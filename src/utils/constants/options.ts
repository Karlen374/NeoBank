enum genders{
  emty = '',
  Male = 'MALE',
  Female = 'FEMALE',
}
interface IGenderOption{
  value: genders;
  text: string;
}
export const genderOptions:IGenderOption[] = [
  { value: genders.emty, text: '' },
  { value: genders.Male, text: 'Male' },
  { value: genders.Female, text: 'Female' },
];

enum materials {
  empty = '',
  Married = 'MARRIED',
  Discovered = 'DISCOVERED',
  Single = 'SINGLE',
  Widow_Widower = 'WIDOW WIDOWER',
}
interface IMaterialOption{
  value: materials;
  text: string,
}

export const materialOptions:IMaterialOption[] = [
  { value: materials.empty, text: ' ' },
  { value: materials.Married, text: 'Married' },
  { value: materials.Discovered, text: 'Discovered' },
  { value: materials.Single, text: 'Single' },
  { value: materials.Widow_Widower, text: 'Widow Widower' },
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
  value: dependents;
  text: string | number;
}
export const dependentOptions:IDependentOption[] = [
  { value: dependents.empty, text: '' },
  { value: dependents.zero, text: 0 },
  { value: dependents.one, text: 1 },
  { value: dependents.two, text: 2 },
  { value: dependents.three, text: 3 },
  { value: dependents.four, text: 4 },
  { value: dependents.five, text: 5 },
];

enum employments{
  empty = '',
  Unemployed = 'UNEMPLOYED',
  Self_Employed = 'SELF EMPLOYED',
  Employed = 'EMPLOYED',
  Bussiness_owner = 'BUSSINESS OWNER'
}

interface IEmploymentOption{
  value: employments;
  text: string;
}

export const employmentOptions:IEmploymentOption[] = [
  { value: employments.empty, text: '' },
  { value: employments.Unemployed, text: 'Unemployed' },
  { value: employments.Self_Employed, text: 'Self Employed' },
  { value: employments.Employed, text: 'Employed' },
  { value: employments.Bussiness_owner, text: 'Bussiness_owner' },
];

enum positions{
  empty = '',
  Worker = 'WORKER',
  Mid_Manager = 'MID_MANAGER',
  Top_Manager = 'TOP_MANAGER',
  Owner = 'OWNER',
}
interface IPositionOption{
  value: positions;
  text: string;
}
export const positionOptions:IPositionOption[] = [
  { value: positions.empty, text: '' },
  { value: positions.Worker, text: 'Worker' },
  { value: positions.Mid_Manager, text: 'Mid Manager' },
  { value: positions.Top_Manager, text: 'Top Manager' },
  { value: positions.Owner, text: 'Owner' },
];

export const termOptions = [
  { value: 6, text: '6 month' }, { value: 12, text: '12 month' }, { value: 18, text: '18 month' }, { value: 24, text: '24 month' },
];
