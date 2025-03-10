import {
    ArmchairIcon,
    Footprints,
    ShirtIcon,
    TreePalmIcon,
    WashingMachineIcon,
} from 'lucide-react';

export const NAVBAR_ITEMS = [
    {
        index: 0,
        name: 'Roupas',
        href: '/',
        icon: <ShirtIcon className="h-5 w-5" />,
    },
    {
        index: 1,
        name: 'Calçados',
        href: '/',
        icon: <Footprints className="h-5 w-5" />,
    },
    {
        index: 2,
        name: 'Eletrônicos',
        href: '/',
        icon: <WashingMachineIcon className="h-5 w-5" />,
    },
    {
        index: 3,
        name: 'Móveis',
        href: '/',
        icon: <ArmchairIcon className="h-5 w-5" />,
    },
    {
        index: 4,
        name: 'Lazer',
        href: '/',
        icon: <TreePalmIcon className="h-5 w-5" />,
    },
];
