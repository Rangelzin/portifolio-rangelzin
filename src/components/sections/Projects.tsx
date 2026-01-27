import ProjetosCards from "../layout/projetos";
import turingbar from "../../../public/image-projetos/turingbarber.png";
import springboot from "../../../public/image-projetos/springbootjava.png"; 
import rdu from "../../../public/image-projetos/rdu-login.png";
import amazonclone from "../../../public/image-projetos/amazonclone.png";

export default function Projects() {
  return (
    <section id="projetos" className="flex flex-col items-center min-h-screen w-full bg-black text-white py-20">
          
          <h2 className="text-5xl md:text-7xl font-extrabold text-gold mb-16"> Projetos </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl w-full justify-center place-items-center my-10" >
             
             <ProjetosCards 
               title="Turing Barber"
               description="O Turing Barber é um sistema de gerenciamento de barbearia desenvolvido na UFG para um projeto acadêmico. Ele controla clientes, barbeiros e agendamentos, usando algoritmo em C."
               image={turingbar}
               repoLink="https://github.com/Rangelzin/AED1-Turing-Barber.git"
             /> 
             <ProjetosCards 
               title="Projeto API Spring Boot"
               description="Projeto de API RESTful desenvolvido com Spring Boot e Java, focado em fornecer serviços eficientes e escaláveis para aplicações web. Tem implementacão de CRUD completo e segurança básica. Conectado a um banco de dados H2 para armazenamento de dados."
               image={springboot}
               repoLink="https://github.com/Rangelzin/Projeto-Cadastro-Spring.git"
            />
            <ProjetosCards 
                  title="Projeto RDU-IP"
                  description="Repositório referente ao grupo 8 - RDU - Rastreio de câncer para matéria de Introdução à Programação da turma de Engenharia de Software 2025.1, com primeira contato com Golang usando Gin Framework para gerenciamento de rotas e JWT para autenticação."
                  image={rdu}
                  repoLink="https://github.com/Rangelzin/RDU-IP-ES-2025.git"
            />
            <ProjetosCards 
                  title="Clone Amazon"
                  description="Projeto de clone da Amazon desenvolvido com Tailwind CSS e arquitetura de tags HTML5, focado em replicar a interface e funcionalidades básicas do site original. Inclui páginas de produtos, carrinho de compras e navegação responsiva."
                  image={amazonclone}
                  repoLink="#"
                  demoLink="#"
            />
          </div>
    </section>
  );
}