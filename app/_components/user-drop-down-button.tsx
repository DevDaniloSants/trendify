import { LogOutIcon } from 'lucide-react';
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
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>
                    <Button
                        onClick={handleLogoutClick}
                        className="h-7 w-full cursor-pointer justify-start hover:bg-transparent"
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
