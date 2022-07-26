export interface AccountEdit {
  [key: string]: any;
  email?: string;
  password?: string;
  currentPassword: string;
}