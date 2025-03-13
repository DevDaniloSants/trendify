'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { ChevronLeft } from 'lucide-react';

const GoBackButton = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <Button
            onClick={handleGoBack}
            variant="ghost"
            className="w-[70px] cursor-pointer hover:bg-transparent"
        >
            <ChevronLeft />
            Voltar
        </Button>
    );
};

export default GoBackButton;
