import { Button, Form } from "react-bootstrap";

interface IFerramentasDeListagemProps {
    textoDaBusca?: string;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
    
    textoBotaoNovo?: string;  
    mostrarInputButton?: boolean;
    aoCLicarEmNovo?: () => void;
}



export const FerramentasDeListagem: React.FC<IFerramentasDeListagemProps> = ({
    textoDaBusca = '',
    aoMudarTextoDeBusca,
    
    aoCLicarEmNovo,
    mostrarInputButton = false,  
    textoBotaoNovo = 'Novo',
}) => {
    return (
        <Form className="d-flex bg-secondary w-100 p-2 rounded">
            <Form.Control
                type="search"
                placeholder="Pesquisar..."
                className="me-2"
                value={textoDaBusca}
                onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
            />
            { mostrarInputButton && (
                <Button 
                    variant="light" 
                    className="d-flex align-items-center"
                    onClick={aoCLicarEmNovo}
                >
                    {textoBotaoNovo}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </Button>
            )}
        </Form>
    );
}

export default FerramentasDeListagem;