import { User } from '@/app/_actions/interfaces/user';

export interface UserProfile extends User {
    id: number;
    role: string;
}
