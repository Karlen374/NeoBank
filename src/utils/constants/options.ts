enum materials {
  empty = ' ',
  Married = 'Married',
  Discovered = 'Discovered',
  Single = 'Single',
  Widow_Widower = 'Widow Widower',
}
interface IMaterialOption{
  value: string;
  text: materials,
}

export const materialOptions:IMaterialOption[] = [
  { value: '', text: materials.empty },
  { value: 'MARRIED', text: materials.Married },
  { value: 'DIVORCED', text: materials.Discovered },
  { value: 'SINGLE', text: materials.Single },
  { value: 'WIDOW_WIDOWER', text: materials.Widow_Widower },
];

enum dependents{
  empty = '',
  zero = 0,
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
}
interface IDependentOption{
  value: string | number;
  text: dependents;
}
export const dependentOptions:IDependentOption[] = [
  { value: '', text: dependents.empty },
  { value: 0, text: dependents.zero },
  { value: 1, text: dependents.one },
  { value: 2, text: dependents.two },
  { value: 3, text: dependents.three },
  { value: 4, text: dependents.four },
  { value: 5, text: dependents.five },
];

enum employments{
  empty = ' ',
  Unemployed = 'Unemployed',
  Self_Employed = 'Self Employed',
  Employed = 'Employed',
  Bussiness_owner = 'Bussiness owner'
}

interface IEmploymentOption{
  value: string;
  text: employments;
}

export const employmentOptions:IEmploymentOption[] = [
  { value: '', text: employments.empty },
  { value: 'UNEMPLOYED', text: employments.Unemployed },
  { value: 'SELF_EMPLOYED', text: employments.Self_Employed },
  { value: 'EMPLOYED', text: employments.Employed },
  { value: 'BUSINESS_OWNER', text: employments.Bussiness_owner },
];

enum positions{
  empty = ' ',
  Worker = 'Worker',
  Mid_Manager = 'Mid Manager',
  Top_Manager = 'Top Manager',
  Owner = 'Owner',
}
interface IPositionOption{
  value: string;
  text: positions;
}
export const positionOptions:IPositionOption[] = [
  { value: '', text: positions.empty },
  { value: 'WORKER', text: positions.Worker },
  { value: 'MID_MANAGER', text: positions.Mid_Manager },
  { value: 'TOP_MANAGER', text: positions.Top_Manager },
  { value: 'OWNER', text: positions.Owner },
];

export const termOptions = [
  { value: 6, text: '6 month' }, { value: 12, text: '12 month' }, { value: 18, text: '18 month' }, { value: 24, text: '24 month' },
];
