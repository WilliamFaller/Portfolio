import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="p-5 mt-4">
        <h1 className="text-5xl text-violet-400">/Sobre mim</h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row p-8">
            <div className="min-w-['200px']">
              <div className="flex flex-row gap-12">
                <div>
                  <h2 className="font-bold text-2xl mb-4 text-violet-400">Formação</h2>
                  <p className="font-semibold mb-4 min-w-[20rem] max-w-[0rem]">Graduado em Análise e Desenvolvimento de Sistemas pela Faculdade Eniac em Julho de 2023, durante 2022 realizei diversos cursos pela plataforma da Alura e agora 2023 estou realizando os cursos da plataformada RocketSeat.</p>
                </div>
                <div>
                  <h2 className="font-bold text-2xl mb-4 text-violet-400">Experiência</h2>
                  <p className="font-semibold mb-4 max-w-[100rem]">Trabalhei por pouco mais de 1 ano como suporte técnico em uma software house, onde tinha a tarefa de passar melhorias/ajustes do software para o programador, testar as novas versões do software, 
                  desenvolvimento de scripts sql para produção de relatórios para o cliente e atendimento ao cliente</p>
                </div>
                <div>
                  <h2 className="font-bold text-2xl mb-4 text-violet-400">Estudos</h2>
                  <p className="font-semibold mb-4 max-w-[100rem]">Atualmente, estou estudando Node.js, React e React Native com Typescript na Rocketseat, onde tenho aprendido sobre desenvolvimento de aplicações web e mobile.</p>
                  <p className="font-semibold mb-4 max-w-[100rem]">Como amante da tecnologia, sempre busco estudar um pouco de outras tecnologias e outras linguagens.</p>
                </div>
                <div>
                  <h2 className="font-bold text-2xl mb-4 text-violet-400">Objetivos</h2>
                  <p className="font-semibold mb-4 max-w-[100rem]">Busco uma primeira oportunidade como desenvolvedor, onde possa aplicar meus conhecimentos e aprender ainda mais sobre a área.</p>
                  <p className="font-semibold mb-4 max-w-[100rem]">Tenho interesse em trabalhar em projetos desafiadores e em equipe, onde possa contribuir para o sucesso do produto e do time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}