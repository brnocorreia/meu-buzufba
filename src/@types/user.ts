export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  name: string;
  lastName: string;
  email: string;
  password: string;
}
