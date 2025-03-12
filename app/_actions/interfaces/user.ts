export interface User {
    name: string;
    email: string;
    password: string;
    avatar: string;
}

export type AuthenticateUser = Pick<User, 'password' | 'email'>;
