
import { Container } from "react-bootstrap"
import { HeaderCustom } from "../components";

interface Iprops {
    children: React.ReactNode
}

export const BaseLayout: React.FC<Iprops> = ({ children }) => {
    return (
        <>
            <HeaderCustom/>
            <Container className="d-flex flex-column align-items-center min-vh-100 p-5 gap-2 bg-layout">
                {children}
            </Container>
        </>

    );
};