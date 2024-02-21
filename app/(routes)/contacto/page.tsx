import Container from "@/components/container";
import TransitionPage from "@/components/transition-page";

const Contacto = () => {
    return(
        <>
            <TransitionPage/>
            <Container id="contact" className="mt-32 md:mt-24 lg:mt-44 px-4 pb-40 md:pb-0 md:px-6">
                <section className="md:mb-32">
                <div className="flex flex-col items-center justify-center max-w-[260px] md:max-w-xl mx-auto">
                    <h1 className="text-sm md:text-2xl xl:text-4xl font-semibold tracking-[0.15em] text-secondary font-saira font-[400] mb-8">COACH MARCOS DIONEL</h1>
                    <p className="text-pretty text-[10px] md:text-[16px] text-center font-saira font-normal mb-12">Con mas de 2 años de experiencia viviendo y aprendiendo en este mundo fitness, trabajando a diario respetando la constancia en las sesiones de entrenamiento, optimizando el rendimiento y obteniendo nuevos resultados.</p>
                    <p className="text-pretty text-[9px] md:text-[14px] text-center font-saira mb-4"><strong className="text-secondary font-black">No dudes en contactarte a través del siguiente formulario web o a través de WhatsApp para adquirir un entrenamiento completamente adaptado a vos.</strong></p>
                </div>
                <div className="mt-2 max-w-full">
                    <form action="https://formsubmit.co/mdiannibelliasesorias@gmail.com" method="POST" className="grid grid-cols-2 gap-x-6 gap-y-4 items-center justify-center">
                        <div className="flex flex-col xl:w-[450px]">
                            <label className="mb-2 text-xs md:text-lg" htmlFor="name" id="name">Nombre</label>
                            <input className="bg-[rgba(240,240,240,1)] text-[#000] rounded-sm p-1 md:p-2" type="text" name="name" id="name" required />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-xs md:text-lg" htmlFor="ciudad" id="ciudad">Ciudad</label>
                            <input className="bg-[rgba(240,240,240,1)] text-[#000] rounded-sm p-1 md:p-2" type="text" name="ciudad" id="ciudad" required/>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-xs md:text-lg" htmlFor="email" id="email">Email</label>
                            <input className="bg-[rgba(240,240,240,1)] text-[#000] rounded-sm p-1 md:p-2" type="email" name="email" id="email" required/>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-xs md:text-lg" htmlFor="phone" id="phone">Telefono</label>
                            <input className="bg-[rgba(240,240,240,1)] text-[#000] rounded-sm p-1 md:p-2" type="text" name="phone" id="phone" required/>
                        </div>
                        <div className="flex flex-col col-span-2">
                            <label className="mb-2 text-xs md:text-lg" htmlFor="mensaje" id="mensaje">Mensaje</label>
                            <textarea className="bg-[rgba(240,240,240,1)] text-[#000] rounded-sm p-1 md:p-2 h-24 w-full" name="mensaje" id="mensaje" required/>
                        </div>
                        <div className="flex flex-col col-span-2 bg-secondary w-52 mx-auto mt-4 p-2 md:px-4 md:py-2 cursor-pointer rounded-xl hover:bg-orange-600">
                            <input className="cursor-pointer text-xs md:text-sm  font-[500] uppercase text-[#000] transition-all hover:shadow-xl hover:shadow-secondary" type="submit" value="Enviar Mensaje" />
                        </div>
                    </form>
                </div>
                </section>
            </Container>
        </>
    );
}

export default Contacto;