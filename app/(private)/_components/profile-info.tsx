'use client';

import { notFound } from 'next/navigation';
import { CreditCard, MapPin, ShoppingCart } from 'lucide-react';
import { useUser } from '@/app/_hooks/useUser';
import Image from 'next/image';

const ProfileInfo = () => {
    const { user } = useUser();

    if (!user) return notFound();

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-6 sm:flex-col md:flex-row">
                <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full border-4 border-gray-100">
                    <Image
                        src={user.avatar}
                        alt="User Avatar"
                        width={0}
                        height={0}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-semibold text-gray-900">
                        {user?.name}
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        {user?.email}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-xl bg-white p-6">
                    <div className="mb-4 flex items-center gap-4">
                        <MapPin className="text-2xl text-gray-600" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Endereço de Entrega
                        </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                        Rua dos Lírios, 123, São Paulo, SP, Brasil
                    </p>
                </div>

                <div className="rounded-xl bg-white p-6">
                    <div className="mb-4 flex items-center gap-4">
                        <CreditCard className="text-2xl text-gray-600" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Preferências de Pagamento
                        </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                        Cartão de Crédito Visa
                    </p>
                    <p className="text-sm text-gray-600">
                        PayPal: usuario@exemplo.com
                    </p>
                </div>

                <div className="rounded-xl bg-white p-6">
                    <div className="mb-4 flex items-center gap-4">
                        <ShoppingCart className="text-2xl text-gray-600" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Histórico de Pedidos
                        </h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>#12345 - Produto X - 15/02/2025</li>
                        <li>#12346 - Produto Y - 12/02/2025</li>
                        <li>#12347 - Produto Z - 10/02/2025</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
