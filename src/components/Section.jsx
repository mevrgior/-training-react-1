
export default function Section({title, children, ...forwardProps}){
    return(
        <section {...forwardProps}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}