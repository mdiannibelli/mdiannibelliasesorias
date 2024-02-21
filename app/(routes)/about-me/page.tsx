import Container from "@/components/container";
import TransitionPage from "@/components/transition-page";
import Image from "next/image";
import avatar from '../../../public/avatar.png'
import avatar2 from '../../../public/avatar-2.jpg'
import avatar3 from '../../../public/avatar-3.jpg'

const AboutMe = () => {
    return( 
        <>
            <TransitionPage/>
            <Container id="about-1" className="mt-40 px-4 pb-20  md:pb-0 md:px-6">
                <div className="grid md:grid-cols-2 justify-around items-center justify-items-center w-full m-auto bg-[#1D1D1D] py-4 md:py-0">
                    <div className="p-4">
                    <Image src={avatar} alt="avatar" className="h-[250px] w-[300px] md:h-[450px] md:w-[500px]"/>
                    </div>
                    <div className="max-w-xl mx-4 my-2">
                    <h1 className="text-2xl md:text-4xl uppercase font-semibold text-secondary tracking-[0.1em] mb-8">¿Quién soy?</h1>
                    <p className="text-xs md:text-sm text-pretty mb-4">Soy Marcos,<strong className="text-orange-500"> instructor de musculación y entrenador personal formado académicamente en ENADE </strong> . A los 15 años pisé por primera vez un gimnasio y a los 17 fue cuando empecé a tomarme esto en serio, realicé una transformación física que duró un estimado de 2 años donde pasé de pesar 64kg a 85kg mediante una etapa de ganancia muscular, para luego bajar a 74kg mediante una etapa de definicón. </p>
                    <p className="text-xs md:text-sm text-pretty mb-4">Durante esta etapa no solo aprendí a entrenar y a alimentarme correctamente, sino que más importante aprendí a llevar un nuevo estilo de vida que va a durar para siempre, donde en ella <strong className="text-orange-500"> adquirí nuevos hábitos saludables, forjar una autoestima única, disciplina y un cambio de mentalidad</strong>.</p>
                    <p className="text-xs md:text-sm text-pretty mb-4">En pocas palabras si a mi yo de hace unos años no le hubiera sucedido esto, no sería la misma persona que soy hoy.</p>
                    </div>
                </div>
            </Container>
            <Container id="about-2" className="lg:mt-32 mb-20 px-4  md:pb-0 md:px-6">
                <div className="grid md:grid-cols-2 justify-around items-center justify-items-center w-full m-auto bg-[#1D1D1D] py-4 md:py-0">
                    <div className="max-w-xl mx-4 my-2">
                    <h1 className="text-2xl md:text-4xl uppercase font-semibold text-secondary tracking-[0.1em] mb-8">Mi cambio físico</h1>
                    <p className="text-xs md:text-sm text-pretty mb-4">Mi cambio empieza un <strong className="text-orange-500">3 de junio de 2022 pesando 63,5kg</strong> (primer foto), momento en el cual todavía no habia retomado el entrenamiento de pesas ya que practicaba Muay Thai, mientras tanto estaba comenzando a aumentar las cantidades de comida debido a que mi objetivo era subir de peso.</p>
                    <p className="text-xs md:text-sm text-pretty mb-4">A mediados de septiembre ya habìa logrado aumentar los primeros 5kg y fue donde empecé a complementar el deporte con el gimnasio. Sin muchos conocimientos previos, me basé por mi propia cuenta haciendo una rutina muy conocida como "Push Pull Legs".</p>
                    <p className="text-xs md:text-sm text-pretty mb-4">Finalizando diciembre dejo por completo el deporte y me dedico al cien por ciento al gimnasio, donde empecé a pulir mis entrenamientos y la técnica de los ejercicios, manteniendo 6 sesiones de entrenamiento semanales hasta llegar a agosto, donde <strong className="text-orange-500">finalmente comiendo 4300 calorías logré pesar 85kg</strong> para después en septiembre comenzar mi etapa de definición.</p>
                    <h2 className="text-1xl uppercase font-semibold mb-4">Cambié no solo mi físico, sino también mi mentalidad y mis hábitos.</h2>
                    </div>
                    <div className="p-4">
                    <Image src={avatar2} alt="avatar2" className="h-[250px] w-[300px] md:h-[450px] md:w-[500px]" />
                    </div>
                </div>
            </Container>
            <Container id="about-3" className="mt-20 lg:mt-32 px-4 pb-24 lg:pb-40  md:pb-0 md:px-6">
                <div className="grid md:grid-cols-2 justify-around items-center justify-items-center w-full m-auto bg-[#1D1D1D] py-4 md:py-0">
                    <div className="p-4">
                    <Image src={avatar3} alt="avatar" className="h-[250px] w-[300px] md:h-[450px] md:w-[500px]"/>
                    </div>
                    <div className="max-w-xl mx-4 my-2">
                    <h1 className="text-2xl md:text-4xl uppercase font-semibold text-secondary tracking-[0.1em] mb-8">¿Y ahora?</h1>
                    <p className="text-xs md:text-sm text-pretty mb-4">Tengo mucho margen para seguir creciendo físicamente y mentalmente, siempre hay algo para aprender, pero mientras tanto <strong className="text-orange-500">deseo compartir mi estilo de vida adquirido con aquellos que lo deseen</strong> a través de mis asesorías y demostrar que tanto yo como cualquiera puede cambiar sus hábitos.</p>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default AboutMe;