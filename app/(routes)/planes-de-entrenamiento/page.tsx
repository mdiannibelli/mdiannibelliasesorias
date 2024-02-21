"use client"
import Container from "@/components/container";
import TransitionPage from "@/components/transition-page";
import Image from "next/image";
import Link from "next/link";
import plan from '../../../public/plan-1.jpg'

const PlanesDeEntrenamiento = () => {
   
    return(
        <>
            <TransitionPage/>
            <Container id="planes-de-entrenamiento" className="mt-40 pb-40 md:pb-0">
                <div className="grid items-center">
                    <div className="md:grid grid-cols-3  opacity-[0.3]">
                    <video
                    className=""
                        width='100%' 
                        loop
                        muted
                        autoPlay
                        playsInline
                        
                        
                    >
                        <source src="https://res.cloudinary.com/dvvtskcux/video/upload/v1708464004/jzsvauzulskrbbylwgjc.mp4"/>
                    </video>
                    <video
                    className="hidden md:flex"
                        width='100%' 
                        loop
                        muted
                        autoPlay
                        playsInline
                        
                    >
                        <source src="http://res.cloudinary.com/dvvtskcux/video/upload/v1708467711/xgq1j9f9zjxiuiyqp67f.mp4"/>
                    </video>
                    <video
                    className="hidden md:flex"
                        width='100%' 
                        loop
                        muted
                        autoPlay
                        playsInline
                        
                    >
                        <source src="https://res.cloudinary.com/dvvtskcux/video/upload/v1708467996/fyqaqdewqo8zhmhd3ncr.mp4"/>
                    </video>
                    </div>
                    <div className="grid justify-items-center absolute top-[24rem] xl:top-[34rem] z-20 w-full">
                        <h1 className="text-2xl md:text-4xl xl:text-8xl font-semibold tracking-[0.12em] font-saira font-light">ENTRENÁ CONMIGO</h1>
                        <h3 className="text-xs md:text-2xl xl:text-4xl font-semibold text-secondary tracking-[0.12em] font-saira font-normal">TRANSFORMA TU ESFUERZO EN RESULTADOS</h3>
                    <div className="grid justify-center mt-2 lg:mt-6">
                        <Link href="mailto:mdiannibelliasesorias@gmail.com" target="_blank"
                        className="px-2 py-1 text-xs m-2 md:text-lg md:px-3 md:py-2 transition-all border border-orange-700 bg-secondary bg-opacity-[0.8] text-white cursor-pointer w-fit rounded-sm hover:shadow-xl hover:shadow-secondary/50">Contáctame</Link>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-xs md:text-md">Planes con seguimiento | Planes sin seguimiento</h1>
                    </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default PlanesDeEntrenamiento;