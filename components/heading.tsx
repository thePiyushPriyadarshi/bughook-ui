
interface Props{
    children : React.ReactNode;
}

const Heading = ({children}:Props) => {

    return(
        <h1 className="text-xl md:text-2xl font-semibold">{children}</h1>
    )
}

export { Heading }
