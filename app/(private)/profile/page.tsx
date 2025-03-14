import Container from '@/app/_components/container';
import ProfileInfo from '../_components/profile-info';
import ActivityGraph from '../_components/activity-graph';
import { Settings } from 'lucide-react';

const ProfilePage = () => {
    return (
        <Container>
            <div className="text-center sm:text-left">
                <h1 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
                    Meu Perfil
                </h1>
                <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                    Gerencie sua conta e configurações de forma simples e
                    eficiente.
                </p>
                <div className="my-6" />
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <ProfileInfo />
                    <div className="flex flex-col gap-8 lg:col-span-2">
                        <ActivityGraph />
                        <div className="rounded-xl bg-white p-6">
                            <div className="mb-4 flex items-center gap-4">
                                <Settings className="text-2xl text-gray-600" />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Configurações da Conta
                                </h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Gerencie suas preferências de conta, como
                                notificações, segurança e configurações de
                                privacidade.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-gray-600">
                                <li>Alterar email</li>
                                <li>Alterar senha</li>
                                <li>Gerenciar notificações</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProfilePage;
