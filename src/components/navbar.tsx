'use client';

import ItemMenu from "./ItemMenu";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [secaoAtiva, setSecaoAtiva] = useState('');

  useEffect(() => {
  const sessoes = document.querySelectorAll('section');

  const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setSecaoAtiva(entry.target.id ) 
      }
    });
  }, { threshold: 0.7 }); 
  sessoes.forEach((sessao) => observador.observe(sessao));
}, []); 
  return (
    <nav id="navbar/header" className="fixed bg-black w-full h-20 flex items-center justify-between px-20">
      <div id="Nome" className="flex text-4xl">
        <span className="text-gold">R</span>
        <span>angel</span>
      </div>
      <div id="menu" className="flex space-x-10 text-xl">
        <ItemMenu secaoAtiva={secaoAtiva}/>
      </div>
    </nav>
  );
}