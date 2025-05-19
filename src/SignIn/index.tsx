import { Input } from "@/components/ui/input";

const SignIn = () => {
  return (
    <div className="flex">
      <div className="bg-amber-900 h-screen w-1/2 p-2">
        <h1 className="text-amber-200 font-bold text-3xl">Mozelli</h1>
        <p className="text-zinc-300 font-semibold text-xl mb-12">
          Sales Funnel Builder
        </p>
        <div className="flex flex-col items-center">
          <p className="text-zinc-100">Crie seu funil de vendas em minutos.</p>
          <p className="text-zinc-100">Fácil de usar. Arraste e sote!</p>
        </div>
      </div>
      <div className="flex items-center mx-auto">
        <div className="flex flex-col">
          <h2 className="text-2xl text-center">Crie sua conta</h2>

          <button className="bg-zinc-200 p-2 mt-6 rounded-xs hover:cursor-pointer hover:bg-zinc-100">
            Entrar com o Google
          </button>
          <span className="my-6 text-center">ou</span>
          <div className="flex flex-col gap-2">
            <Input type="text" placeholder="Seu nome..." />
            <Input type="password" placeholder="Seu email.." />
            <Input type="password" placeholder="Crie uma senha..." />
          </div>
          <p className="pt-2 text-sm">
            Esqueceu sua senha?{" "}
            <a href="#" className="hover:text-amber-800 font-semibold">
              Clique aqui.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

//<p>{import.meta.env.VITE_TEST}</p>
