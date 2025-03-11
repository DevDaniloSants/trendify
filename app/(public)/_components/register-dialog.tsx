import { Button } from '@/app/_components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/app/_components/ui/dialog';

const RegisterDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="cursor-pointer px-1 text-base font-semibold hover:bg-transparent"
                >
                    Registre-se
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default RegisterDialog;
