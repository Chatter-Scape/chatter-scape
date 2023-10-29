export interface UserInterface {
  id: number;
  email: string;
  userRegistrationDate: Date;
  lastLoggedIn: Date;
  isActive: boolean;
  isEmailVerified: boolean;
  createdDate: Date;
  updatedDate: Date;
  password?: string;
  rememberOtpForSevenDays: boolean;
}
