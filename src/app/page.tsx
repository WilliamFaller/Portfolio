import Image from 'next/image';
import GymGif from '../assets/gif.gif';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-5 mt-4 ">
        <h1 className="text-5xl text-violet-400">/home</h1>
      </div>
      <div className="flex flex-col md:gap-0 md:flex-row md:justify-around ml-4 mr-4">
        <div className="flex flex-col mt-12">
          <div className="flex flex-row">
            <h1 className="md:text-5xl text-2xl text-gray-300">Opa, me chamo</h1>&nbsp;
            <span className="text-violet-400 text-2xl md:text-5xl"> William!</span>
          </div>
          <div className="flex flex-row max-w-sm md:max-w-md">
            <h2 className="md:text-3xl text-xl text-gray-300">Desenvolvedor</h2> &nbsp;
            <span className="md:text-3xl text-xl text-violet-400">Fullstack</span> &nbsp;
            <h2 className="md:text-3xl text-xl text-gray-300">e</h2>&nbsp;
            <span className="md:text-3xl text-xl text-violet-400">Mobile</span>
          </div>
          <div className="flex flex-row md:max-w-[34rem]">
            <span className="mt-4 max-w-sm md:max-w-full">
              Olá, meu nome é <span className="text-violet-400">William</span> e sou um desenvolvedor de software formado em Análise e
              Desenvolvimento de Sistemas. Atualmente, estou estudando <span className="text-violet-400">Node.js</span>
              , <span className="text-violet-400">React</span> e <span className="text-violet-400">React Native</span> com <span className="text-violet-400">Typescript</span> na Rocketseat.
              Trabalhei por pouco mais de um ano em uma software house, onde adquiri experiência em suporte.
              Agora, estou buscando minha <span className="text-violet-400">primeira oportunidade</span> como <span className="text-violet-400">desenvolvedor</span> e estou animado para aplicar
              minhas habilidades e conhecimentos em projetos desafiadores.
            </span>
          </div>
        </div>

        <div className="md:mt-[-80px] mt-4 flex flex-col">
          <h1 className="text-violet-400 text-3xl">Projeto em Destaque</h1>
          <Link className="flex flex-col md:flex-row pt-8" href={'./projects/igniteGym'}>
            <div className="w-full md:w-72 border-2 border-violet-400 rounded-xl mb-8 md:mb-0 md:mr-6">
              <Image src={GymGif} alt="Gym" className="rounded-xl w-full h-full" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}