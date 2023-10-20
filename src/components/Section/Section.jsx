import { Title } from "./Section.styled"

export const Section = ({title, children}) => {
    return (
        <section>
            <Title>
                {title && <h2>{title}</h2>}
                {children}
            </Title>
        </section>
        
    )
}