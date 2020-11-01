export type User = {
  email: string;
  name: string;
};
export type AuthData = {
  token: string;
  user: User;
};
const signIn = (): Promise<AuthData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asdksjjtrkvcjru329dknsfksanfkanfasd',
        user: {
          email: 'lucasgarcez@email.com',
          name: 'Lucas Garcez',
        },
      });
    }, 2000);
  });
};

export const authService = {
  signIn,
};
