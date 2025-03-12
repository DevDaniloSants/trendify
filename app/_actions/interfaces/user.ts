export interface User {
    name: string;
    email: string;
    password: string;
    avatar: string;
}

export type SignIn = Pick<User, 'password' | 'email'>;
