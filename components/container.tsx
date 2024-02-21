
interface ContainerProps {
    children: React.ReactNode,
    id: string
    className: string,
}

const Container = (props: ContainerProps) => {
    const {children, className, id} = props
    return(
        <section id={id} className={`flex md:w-full m-auto justify-center ${className}`}>
            {children}
        </section>
    );
}

export default Container;