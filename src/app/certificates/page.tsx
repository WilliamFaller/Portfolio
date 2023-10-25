import Navbar from "../../components/Navbar";
import Link from "next/link";
import JavascriptLogo from '../../assets/javascript.svg'
import NodeLogo from '../../assets/nodejs-icon.svg'
import Image from 'next/image'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div className="p-5 mt-4">
        <h1 className="text-5xl text-violet-400">/Certificados</h1>
        <div className="flex flex-row mt-10 gap-12">
          <div className="flex flex-col gap-4">
            <Image className="w-10 mr-4" src={JavascriptLogo} alt="Javascript Logo" />
            <Link href={"https://cursos.alura.com.br/certificate/3a39852a-c2bc-41fe-b272-abe75c88854a?lang=pt_BR"}>-JavaScript: Arrays</Link>
            <Link href={"https://cursos.alura.com.br/certificate/3a39852a-c2bc-41fe-b272-abe75c88854a?lang=pt_BR"}>-JavaScript: Arrays</Link>
            <Link href={"https://cursos.alura.com.br/certificate/3a39852a-c2bc-41fe-b272-abe75c88854a?lang=pt_BR"}>-JavaScript: Arrays</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Image className="w-10 mr-4" src={NodeLogo} alt="Node.js Logo" />
            <Link href={"https://cursos.alura.com.br/certificate/3a39852a-c2bc-41fe-b272-abe75c88854a?lang=pt_BR"}>-JavaScript: Arrays</Link>
            <Link href={"https://cursos.alura.com.br/certificate/3a39852a-c2bc-41fe-b272-abe75c88854a?lang=pt_BR"}>-JavaScript: Arrays</Link>
            <Link href={"https://cursos.alura.com.br/certificate/3a39852a-c2bc-41fe-b272-abe75c88854a?lang=pt_BR"}>-JavaScript: Arrays</Link>
          </div>
          <Image className="w-10 mr-4" src={NodeLogo} alt="React Native Logo" />
        </div>
      </div>
    </>
  )
}