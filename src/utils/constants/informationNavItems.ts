interface INavItems{
  name:string;
  id: 0 | 1 | 2 | 3;
}

export const informationNavItems:INavItems[] = [
  {
    name: 'About card',
    id: 0,
  },
  {
    name: 'Rates and conditions',
    id: 1,
  },
  {
    name: 'Cashback',
    id: 2,
  },
  {
    name: 'FAQ',
    id: 3,
  },
];
