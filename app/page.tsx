"use client"
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Sobremim from "@/components/Sobremim";
import Sobremimbar from "@/components/Sobremimbar";
import Experiencia from "@/components/Experiencia";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <main className="relative flex-1 bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto overflow-clip">
      <div className="w-full h-full">
          <Navbar />
          <Main />
          <Sobremimbar />
          <Sobremim />
          <Experiencia />
          <Projetos />
          <Contato />
      </div>
    </main>
  );
}
