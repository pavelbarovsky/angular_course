export interface UserCredentials {
    username: string;
    password: string;
  }
  
  export interface UserRegistration {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    middleName?: string;
  }
  
  export interface LoginResponse {
    id: string;
    role: 'user' | 'admin' | 'guest';
    firstName: string;
    lastName: string;
    middleName: string;
    avatar: string;
    username: string;
    jwtToken: string;
    expiresIn: number;
  }
  
  export interface RegistrationResponse {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    middleName: string;
  }
  
  export interface UserResponse {
    id: string;
    role: 'user' | 'admin' | 'guest';
    firstName: string;
    lastName: string;
    middleName: string;
    avatar: string;
    username: string;
    jwtToken: string;
    expiresIn: number;
  }