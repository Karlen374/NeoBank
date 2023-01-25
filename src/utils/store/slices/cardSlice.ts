import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  IOffer,
  useApplicationServices,
  ICardCustomizeForm,
  IScoringForm,
  IPayment,
} from '@utils';

interface CardSliceState {
  loader:boolean;
  modal: boolean;
  confirmModal: boolean;
  selectedOffer: boolean;
  codeErrorStatus: boolean;
  status:
  'PREAPPROVAL' | 'CLIENT_DENIED' | 'APPROVED' | 'CC_DENIED' | 'CC_APPROVED' | 'PREPARE_DOCUMENTS' | 'DOCUMENT_CREATED' | 'CREDIT_ISSUED';
  monthlyPayments: IPayment[];
}

const initialState:CardSliceState = {
  loader: false,
  selectedOffer: false,
  modal: false,
  confirmModal: false,
  codeErrorStatus: false,
  status: null,
  monthlyPayments: null,
};

export const postCardCustomizeData = createAsyncThunk(
  'cardSlice/postCardCustomizeData',
  async (data:ICardCustomizeForm) => {
    const { postPrescoringFormData } = useApplicationServices();
    const response = await postPrescoringFormData(data);
    return response;
  },
);
interface IPostScoringDataProps{
  data: IScoringForm,
  applicationId: string,
}
export const postScoringData = createAsyncThunk(
  'cardSlice/postScoringData',
  async ({ data, applicationId }:IPostScoringDataProps) => {
    const { postScoringFormData } = useApplicationServices();
    const response = await postScoringFormData(data, applicationId);
    return response;
  },
);

export const postSelectedOffer = createAsyncThunk(
  'cardSlice/postSelectedOffer',
  async (data: IOffer) => {
    const { postChooseOffer } = useApplicationServices();
    const response = await postChooseOffer(data);
    return response;
  },
);

export const getStatus = createAsyncThunk(
  'cardSlice/getStatus',
  async (applicationId:string) => {
    const { getOfferStatus } = useApplicationServices();
    const response = await getOfferStatus(applicationId);
    return response;
  },
);

export const postPermission = createAsyncThunk(
  'cardSlice/postPermission',
  async (applicationId:string) => {
    const { postUserPermission } = useApplicationServices();
    const response = await postUserPermission(applicationId);
    return response;
  },
);

export const postSign = createAsyncThunk(
  'cardSlice/postSign',
  async (applicationId: string) => {
    const { postUserSign } = useApplicationServices();
    const response = await postUserSign(applicationId);
    return response;
  },
);
interface IPostCodeProps{
  applicationId:string;
  code:string;
}
export const postCode = createAsyncThunk(
  'cardSlice/postCode',
  async ({ applicationId, code }:IPostCodeProps) => {
    const { postSignCode } = useApplicationServices();
    const response = await postSignCode(applicationId, code);
    return response;
  },
);

const CardSlice = createSlice({
  name: 'shortLink',
  initialState,
  reducers: {
    changeModalStatus: (state, action) => {
      state.modal = action.payload;
    },
    changeConfirmModalStatus: (state, action) => {
      state.confirmModal = action.payload;
    },
    monthlyPaymentsDescSort: (state, action) => {
      const sortValue: 'number' | 'totalPayment' | 'debtPayment' | 'interestPayment' | 'remainingDebt' | 'date' = action.payload;
      if (
        sortValue === 'number'
        || sortValue === 'totalPayment'
        || sortValue === 'debtPayment'
        || sortValue === 'interestPayment'
        || sortValue === 'remainingDebt'
      ) {
        state.monthlyPayments = state.monthlyPayments.sort((a, b) => Number(a[sortValue]) - Number(b[sortValue]));
      } else state.monthlyPayments = state.monthlyPayments.sort((a, b) => a.date.localeCompare(b.date));
    },
    monthlyPaymentsIncSort: (state, action) => {
      const sortValue: 'number' | 'totalPayment' | 'debtPayment' | 'interestPayment' | 'remainingDebt' | 'date' = action.payload;
      if (
        sortValue === 'number'
        || sortValue === 'totalPayment'
        || sortValue === 'debtPayment'
        || sortValue === 'interestPayment'
        || sortValue === 'remainingDebt'
      ) {
        state.monthlyPayments = state.monthlyPayments.sort((a, b) => Number(b[sortValue]) - Number(a[sortValue]));
      } else state.monthlyPayments = state.monthlyPayments.sort((a, b) => a.date.localeCompare(b.date)).reverse();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCardCustomizeData.pending, (state) => {
        state.loader = true;
      })
      .addCase(postCardCustomizeData.fulfilled, (state, action) => {
        state.loader = false;
        const offers = action.payload.sort((a:IOffer, b:IOffer) => (a.totalAmount - b.totalAmount));
        localStorage.setItem('offers', JSON.stringify(offers));
      })
      .addCase(postSelectedOffer.pending, (state) => {
        state.loader = true;
      })
      .addCase(postSelectedOffer.fulfilled, (state) => {
        state.loader = false;
        state.selectedOffer = true;
      })
      .addCase(postScoringData.pending, (state) => {
        state.loader = true;
      })
      .addCase(postScoringData.fulfilled, (state) => {
        state.loader = false;
        state.status = 'CC_DENIED';
      })
      .addCase(getStatus.pending, (state) => {
        state.loader = true;
      })
      .addCase(getStatus.fulfilled, (state, action) => {
        if (action.payload.status !== 'PREAPPROVAL') state.selectedOffer = true;
        const monthlyPayments = action.payload.credit?.paymentSchedule;
        if (monthlyPayments) state.monthlyPayments = monthlyPayments;
        state.status = action.payload.status;
        state.loader = false;
      })
      .addCase(postPermission.pending, (state) => {
        state.loader = true;
      })
      .addCase(postPermission.fulfilled, (state) => {
        state.status = 'DOCUMENT_CREATED';
        state.loader = false;
      })
      .addCase(postSign.pending, (state) => {
        state.loader = true;
      })
      .addCase(postSign.fulfilled, (state) => {
        state.loader = false;
        localStorage.setItem('sign', 'true');
      })
      .addCase(postCode.pending, (state) => {
        state.loader = true;
        state.codeErrorStatus = false;
      })
      .addCase(postCode.rejected, (state) => {
        state.loader = false;
        state.codeErrorStatus = true;
      })
      .addCase(postCode.fulfilled, (state) => {
        state.loader = false;
        state.status = 'CREDIT_ISSUED';
      });
  },
});

const { actions, reducer } = CardSlice;

export default reducer;

export const {
  changeModalStatus,
  changeConfirmModalStatus,
  monthlyPaymentsDescSort,
  monthlyPaymentsIncSort,
} = actions;
