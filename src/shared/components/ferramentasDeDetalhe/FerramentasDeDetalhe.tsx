import { Button, Form } from "react-bootstrap";


interface IFerramentasDeDetalheProps {
    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEVoltar?: boolean;

    aoCLicarEmNovo?: () => void;
    aoCLicarEmVoltar?: () => void;
    aoCLicarEmApagar?: () => void;
    aoCLicarEmSalvar?: () => void;
    aoCLicarEmSalvarEVoltar?: () => void;
}




export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    mostrarBotaoNovo,
    mostrarBotaoVoltar,
    mostrarBotaoApagar,
    mostrarBotaoSalvar,
    mostrarBotaoSalvarEVoltar,

    aoCLicarEmNovo,
    aoCLicarEmVoltar,
    aoCLicarEmApagar,
    aoCLicarEmSalvar,
    aoCLicarEmSalvarEVoltar,
}) => {
    return (
        <Form className="d-flex bg-secondary w-100 p-2 gap-2 justify-content-end rounded">

            <Button 
                    variant="light" 
                    className="d-flex align-items-center"
                    onClick={aoCLicarEmSalvar}
                >
                Salvar 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="ms-1 bi bi-floppy2" viewBox="0 0 16 16">
                  <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v3.5A1.5 1.5 0 0 1 11.5 6h-7A1.5 1.5 0 0 1 3 4.5V1H1.5a.5.5 0 0 0-.5.5m9.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                </svg>
            </Button>
            <Button 
                    variant="light" 
                    className="d-flex align-items-center"
                    onClick={aoCLicarEmSalvarEVoltar}
                >
                Salvar e voltar
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="ms-1 bi bi-floppy2" viewBox="0 0 16 16">
                  <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v3.5A1.5 1.5 0 0 1 11.5 6h-7A1.5 1.5 0 0 1 3 4.5V1H1.5a.5.5 0 0 0-.5.5m9.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                </svg>
            </Button>
            <Button 
                    variant="light" 
                    className="d-flex align-items-center"
                    onClick={aoCLicarEmApagar}
                >
                Apagar
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="ms-1 bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </Button>
            <Button 
                    variant="light" 
                    className="d-flex align-items-center"
                    onClick={aoCLicarEmVoltar}
                >
                Voltar
                <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="currentColor" className="ms-1 bi bi-arrow-return-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
                </svg>
            </Button>
            <Button 
                    variant="light" 
                    className="d-flex align-items-center"
                    onClick={aoCLicarEmNovo}
                >
                Novo
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="ms-1 bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
            </Button>
        </Form>
    );
}
