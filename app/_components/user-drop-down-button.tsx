import { LogOutIcon, UserIcon } from 'lucide-react';
import { UserProfile } from '../_data-access/interfaces/user';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Link from 'next/link';

interface UserDropDownButtonProps {
    user: UserProfile;
    handleLogoutClick: () => void;
}

const UserDropDownButton = ({
    user,
    handleLogoutClick,
}: UserDropDownButtonProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer rounded-full"
                >
                    <Avatar>
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button
                        className="h-7 w-full cursor-pointer p-1 hover:bg-transparent"
                        variant={'ghost'}
                    >
                        <Link
                            href={'/profile'}
                            className="flex items-center gap-2"
                        >
                            <UserIcon />
                            Perfil
                        </Link>
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Button
                        onClick={handleLogoutClick}
                        className="h-7 w-full cursor-pointer p-1 hover:bg-transparent"
                        variant="ghost"
                    >
                        <LogOutIcon />
                        <span>Sair</span>
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropDownButton;
