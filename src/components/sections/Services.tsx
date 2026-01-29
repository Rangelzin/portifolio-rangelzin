import { Globe, Server, Database, Palette, Rocket,BrainCircuit } from "lucide-react";

export default function Services() { 
    const DataService = [
        {
            title: "Front-end",
            description: "Desenvolvimento de interfaces modernas, interativas e responsivas para usuários finais",   
            icons: Globe 
        },
        {
            title: "API's e Backend",
            description: "Construção de APIs RESTful usando Golang e Java para interfaces web ",   
            icons: Server
        },
        {
            title: "Banco de Dados",
            description: "Modelagem e otimização de bancos de dados SQL e PostgreSQL para alta performance.",   
            icons: Database
        },
        {
            title: "UI/UX Design",
            description: "Design de interfaces modernas e intuitivas focadas na experiência do usuário.",   
            icons: Palette
        },
        {
            title: "DevOps & Deploy",
            description: "Configuração de CI/CD, Docker, e deploy em cloud (Vercel, etc).",   
            icons: Rocket
        },
        {
            title: "Algoritmos",
            description: "Implementação de Algoritmos para gerenciamento de regras de negócio e verificações",   
            icons: BrainCircuit
        },
        
    ]

    return (
    <section id="servicos" className="flex flex-col items-center min-h-screen w-full bg-[--foreground] text-white py-20">
        <h2 className="text-5xl md:text-7xl font-extrabold text-gold mb-16"> Meus Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full justify-center place-items-center my-10" >
            
            {DataService.map((service) => (
                <div key={service.title} className="bg-black/15 border border-gold/5 rounded-2xl p-8 w-80 h-70 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
                    <service.icons className="text-gold w-16 h-16 mb-6"/>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-white text-base text-justify">{service.description}</p>
                </div>
            ))}
        </div>  
    </section>
  );
}