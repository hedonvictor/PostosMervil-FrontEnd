
import { Container } from "react-bootstrap"

interface Iprops {
    children: React.ReactNode
}

export const BaseLayout: React.FC<Iprops> = ({ children }) => {
    return (
        <Container className="d-flex flex-column align-items-center min-vh-100 p-5 gap-2 bg-layout">
            {children}
        </Container>
    );
};