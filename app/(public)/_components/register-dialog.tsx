'use client';

import { Button } from '@/app/_components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/app/_components/ui/dialog';
import FormRegister from './form-register';
import { useState } from 'react';

const RegisterDialog = () => {
    const [isOpen, setisOpen] = useState<boolean>(false);

    const handleDialogToggle = () => {
        setisOpen((prevState) => !prevState);
    };
    return (
        <Dialog open={isOpen} onOpenChange={handleDialogToggle}>
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
                    <DialogTitle>Cadastre-se na Trendify</DialogTitle>
                    <DialogDescription>
                        Aproveite nossas promoções exclusivas e descontos,
                        sempre com os melhores preços.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <FormRegister toggleRegisterDialog={handleDialogToggle} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default RegisterDialog;
