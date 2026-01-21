import Link from "next/link";

interface ItemMenuProps {
  secaoAtiva: string;
}

const navItems = [
    { label : "Home", href: "/#home"},
    { label : "Sobre", href: "/#sobre"},
    { label : "Projetos", href: "/#projetos"},
    { label : "Serviços", href: "/#servicos"},
    { label : "Skills", href: "/#skills"},
    { label : "Formação", href: "/#formacao"},
    { label : "Contato", href: "/#contato" }
]

export default function ItemMenu({ secaoAtiva }: ItemMenuProps) { 
    return (
        <>
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-all ${
                        secaoAtiva === item.href.slice(2)
                        ? 'text-gold text-2xl underline underline-offset-6 decoration-4'
                        : 'hover:text-gray-400 text-white hover:text-2xl'
                    }`}
                >
                    {item.label}    
                </Link>
            ))}
        </>
    );
}