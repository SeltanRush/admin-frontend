export interface IAuthMenuItem {
  text: string;
  link: string;
}

export const authMenuItems: IAuthMenuItem[] = [
  {
    text: 'Sign in',
    link: '/auth/sign-in',
  },
  {
    text: 'Sign up',
    link: '/auth/sign-up',
  },
];