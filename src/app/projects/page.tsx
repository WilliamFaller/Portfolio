import Image from 'next/image'
import ReactNativeLogo from '../../assets/react-native.svg'
import ReactLogo from '../../assets/react.svg'
import NodeLogo from '../../assets/nodejs-icon.svg'
import TypescriptLogo from '../../assets/typescript.svg'
import TailwindLogo from '../../assets/tailwind-css.svg'
import GymGif from '../../assets/gif.gif'
import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div className="p-5 mt-4">
        <h1 className="text-5xl text-violet-400">/Projetos</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:flex-row p-8 ">
          <div className="w-full md:w-72 h-[38-rem] border-2 border-violet-400 rounded-xl mb-8 md:mb-0 md:mr-6">
            <Link href={'./projects/igniteGym'}>
              <Image src={GymGif} alt="Gym" className="rounded-xl w-full h-full" />
            </Link>
          </div>
          <div className="max-w-sm">
            <Link href={'./projects/igniteGym'}>
              <h1 className="font-bold text-2xl mb-4">Ignite Gym</h1>
            </Link>
            <p className="font-semibold mb-4">Como entusiasta de programação e do mundo da musculação, mergulhei recentemente em um projeto pessoal que representa a convergência desses dois assuntos, o Ignite Gym. Este aplicativo, construído como parte do meu aprendizado contínuo, visa não apenas melhorar a experiência na academia, mas também aprimorar minhas habilidades no desenvolvimento mobile.</p>
            <div className="flex flex-row">
              <Image className="w-10 mr-4" src={ReactNativeLogo} alt="React Native Logo" />
              <Image className="w-10 mr-4" src={TypescriptLogo} alt="React Native Logo" />
              <Image className="w-10 mr-4" src={NodeLogo} alt="React Native Logo" />
              <Image className="w-10 mr-4" src={TailwindLogo} alt="React Native Logo" />
            </div>
          </div>
        </div>
        {/*<div className="flex flex-col md:flex-row p-8 ">
          <div className="w-full md:w-72 h-[38-rem] border-2 border-violet-400 rounded-xl mb-8 md:mb-0 md:mr-6">
            <Image src={GymGif} alt="Gym" className="rounded-xl w-full h-full"/>
          </div>
          <div className="max-w-sm">
            <h1 className="font-bold text-2xl mb-4">Titulo do App</h1>
            <p className="font-semibold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="flex flex-row">
              <Image className="w-10 mr-4" src={ReactNativeLogo} alt="React Native Logo" />
              <Image className="w-10 mr-4" src={TypescriptLogo} alt="React Native Logo" />
              <Image className="w-10 mr-4" src={NodeLogo} alt="React Native Logo" />
              <Image className="w-10 mr-4" src={TailwindLogo} alt="React Native Logo" />
            </div>
          </div>
        </div>*/}
      </div>
    </>
  )
}