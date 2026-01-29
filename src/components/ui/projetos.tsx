import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react"; 

interface ProjectsProps {
    title: string;
    description: string;
    image: string | StaticImageData; 
    repoLink: string;  
    demoLink?: string;
}

export default function ProjetosCards({ title, description, image, repoLink, demoLink }: ProjectsProps) { 
    return (

        <div className="flex flex-col bg-neutral-900 border hover:border-white border-gold rounded-3xl overflow-hidden transition-colors duration-300 w-[400] h-[600]">

            <div className="relative h-1/2 w-full bg-black">
                <Image
                    src={image}
                    alt={`Capa do projeto ${title}`}
                    fill 
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
            </div>

            <div className="flex flex-col justify-between p-6 h-1/2">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-gray-400 text-lg line-clamp-5">
                        {description}
                    </p>
                </div>

                <div className="flex gap-4 mt-4">
                    <Link href={repoLink} target="_blank" className="flex items-center gap-2 text-white hover:text-gold transition-colors font-medium text-sm">
                        <Github size={18} /> Código
                    </Link>
                    {demoLink && (
                    <Link href={demoLink} target="_blank" className="flex items-center gap-2 text-white hover:text-gold transition-colors font-medium text-sm">
                        <ExternalLink size={18} /> Demo
                    </Link>
                    )}
                </div>
            </div>
        </div>
    );
}