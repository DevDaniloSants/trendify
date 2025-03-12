import { User } from '@/app/_actions/interfaces/user';

export interface UserProfile extends User {
    id: number;
    role: string;
}

export interface AuthToken {
    access_token: string;
    refresh_token: string;
}
