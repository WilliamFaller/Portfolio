import Image from 'next/image'
import ReactNativeLogo from '../../../assets/react-native.svg'
import NodeLogo from '../../../assets/nodejs-icon.svg'
import TypescriptLogo from '../../../assets/typescript.svg'
import TailwindLogo from '../../../assets/tailwind-css.svg'
import GymGif from '../../../assets/gif.gif'
import Navbar from '@/components/navbar'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div className="p-5 mt-4">
        <h1 className="text-5xl text-violet-400">/Projetos/igniteGym</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:flex-row p-8 ">
          <div className="w-full md:w-72 h-[38-rem] border-2 border-violet-400 rounded-xl mb-8 md:mb-0 md:mr-6">
            <Image src={GymGif} alt="Gym" className="rounded-xl w-full h-full" />
          </div>
          <div className="max-w-sm">
            <h1 className="font-bold text-2xl mb-4 text-violet-400">Ignite Gym</h1>
            <p className="font-semibold mb-4">Neste projeto proposto pela Rocketseat, como forma de aprimorar o meu aprendizado, tive a oportunidade de trabalhar com diversas tecnologias.</p>
            <p className="font-semibold mb-4">Ele consiste em um app para o controle de treinos de musculação, os exercícios ficam separados por grupos musculares, la você pode visualizar os diversos exercicios para cada grupo, marcar como concluído e visualizar o histórico de treinos realizados.</p>
            <p className="font-semibold mb-4">Meu maior desafio neste projeto foi fazer a integração com o backend, listando os grupos, exercícios e as demais informações, o login foi feito utilizando Token JWT para controle de sessão</p>
            <div className="flex flex-row">
              <Image className="w-10 mr-4" src={ReactNativeLogo} alt="React Native Logo" />
              <Image className="w-10 mr-4" src={TypescriptLogo} alt="React Native Logo" />
              <Image className="w-10 mr-4" src={NodeLogo} alt="React Native Logo" />
              <Image className="w-10 mr-4" src={TailwindLogo} alt="React Native Logo" />
            </div>
          </div>
          <div className="ml-8">
            <h1 className="font-bold text-2xl mb-4 text-violet-400">Funcionalidades</h1>
              <li>Login com <span className="text-violet-400">Token JWT</span></li>
              <li>Listagem de grupos musculares e exercícios</li>
              <li>Marcação de exercício concluído</li>
              <li>Consulta do histórico de treino</li>
              <li>Acesso a galeria do usuário para mudança de foto de perfil</li>
              <li>Mudança de dados através de formulário, utilizando <span className="text-violet-400">yup</span> e <span className="text-violet-400">React Hook Form</span></li>
          </div>
        </div>
      </div>
    </>
  )
}