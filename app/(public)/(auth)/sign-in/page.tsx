import Image from 'next/image';
import FormSignIn from '../../_components/form-sign-in';

const SignIn = () => {
    return (
        <div className="w-full space-y-6 p-4 xl:w-[1440px]">
            <div className="flex h-full w-full justify-between">
                <div className="relative hidden h-[780px] lg:block lg:w-full">
                    <Image
                        src={'/sign-in-image.webp'}
                        fill
                        priority
                        alt="Imagem de sign In"
                        sizes="100%"
                        className="object-cover"
                    />
                </div>
                <div className="w-full space-y-10 p-2 md:p-20">
                    <div>
                        <h1 className="text-2xl md:text-4xl">
                            Entrar na Trendify
                        </h1>
                        <p className="text-muted-foreground">
                            Entre com seus dados cadastrados
                        </p>
                    </div>
                    <FormSignIn />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
