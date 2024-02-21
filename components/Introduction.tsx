"use client"
import Image from "next/image";
import mainImg from '../public/foto-espejo-bodymaniac.png'
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Introduction = () => {
    return (
        <div className="w-[100dvh] m-auto z-20">
            <div className="z-20 grid items-center justify-items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image className="h-auto h-[600px] w-[400px]" src={mainImg} priority alt="mainpic"/>

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="text-2xl font-bold text-center md:text-left md:text-[40px] md:mb-2">
                        Transforma tu esfuerzo
                    </h1>
                    <h1 className="mb-6 text-1xl font-bold text-center leadig-tight text-secondary md:text-left md:text-3xl md:mb-6">
                    <TypeAnimation
                        sequence={[
                            "en resultados.",
                            3000,
                            "en un nuevo estilo de vida.",
                            3000,
                            "en la disciplina que esculpe tu cuerpo y fortalece tu mente.",
                            3000,
                            "en sudor, y que cada gota sea un paso hacia tu transformación.",
                            3000,
                            "en la clave de tu éxito, tus metas y objetivos.",
                            3000
                        ]}
                        wrapper="span"
                        speed={30}
                        repeat={Infinity}
                    />
                    </h1>
                    <p className="mx-auto mb-2 text-xs text-pretty md:text-sm md:mx-0 md:mb-6">
                        Entrená conmigo combinando la ganancia de masa muscular junto a la hipetrofia y el aumento de fuerza en los ejercicios básicos, aplicá la disciplina necesaria para que todo empiece a salir como realmente querés y aprende conmigo a aplicarlo en tus entrenamientos.
                    </p>
                    
                    <div className="flex items-center justify-center">
                        <Link href="mailto:mdiannibelliasesorias@gmail.com" target="_blank"
                        className="px-2 py-1 text-xs m-2 md:text-sm md:px-3 md:py-2 transition-all border border-orange-600 text-secondary cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50">Empezá ahora</Link>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Introduction;