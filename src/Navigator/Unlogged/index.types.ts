export enum EUnloggedStackScreens {
  LOGIN = "Login",
  REGISTER = "Register",
  FORGOT_PASSWORD = "ForgotPassword",
  RESET_PASSWORD = "ResetPassword",
  RESET_PASSWORD_SUCCESS = "ResetPasswordSuccess",
  REGISTER_SUCCESS = "RegisterSuccess",
  LOGIN_SUCCESS = "LoginSuccess",
  FORGOT_PASSWORD_SUCCESS = "ForgotPasswordSuccess",
  FORGOT_PASSWORD_EMAIL_SENT = "ForgotPasswordEmailSent",
  ERROR = "Error",
}

export type TUnloggedStackParamList = {
  [EUnloggedStackScreens.LOGIN]: undefined;
  [EUnloggedStackScreens.REGISTER]: undefined;
  [EUnloggedStackScreens.FORGOT_PASSWORD]: undefined;
  [EUnloggedStackScreens.RESET_PASSWORD]: undefined;
  [EUnloggedStackScreens.RESET_PASSWORD_SUCCESS]: undefined;
  [EUnloggedStackScreens.REGISTER_SUCCESS]: undefined;
  [EUnloggedStackScreens.LOGIN_SUCCESS]: undefined;
  [EUnloggedStackScreens.FORGOT_PASSWORD_SUCCESS]: undefined;
  [EUnloggedStackScreens.FORGOT_PASSWORD_EMAIL_SENT]: undefined;
  [EUnloggedStackScreens.ERROR]: { message: string };
};
