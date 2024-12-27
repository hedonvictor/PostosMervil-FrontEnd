import { FormEvent, forwardRef, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";




interface IPostoFormProps {
    initialData?: {
        nome: string;
        rede: string;
        UF: string;
        endereco: string;
        contato: string;
        status: boolean;
    };
    onSubmit: (postoData: IPostoFormValues) => void;
    formButtonText: string;
};

export interface IPostoFormValues {
    nome: string;
    rede: string;
    UF: string;
    endereco: string;
    contato: string;
    status: boolean; 
};

export const FormNewPosto = forwardRef<HTMLFormElement, IPostoFormProps>(({ initialData, onSubmit, formButtonText }, ref) => {
    const [formData, setFormData] = useState<IPostoFormValues>({
        nome: '',
        rede: '',
        UF: '',
        endereco: '',
        contato: '',
        status: true
    })

    useEffect(() => {
        if (initialData) {
            setFormData(initialData); // Atualiza o estado com os dados recebidos
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            status: e.target.checked, // Atualiza o status com base no checkbox
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Form onSubmit={handleSubmit} ref={ref}>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="formNome">
                        <Form.Control
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Nome do posto"
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="formRede">
                        <Form.Control
                            type="text"
                            name="rede"
                            value={formData.rede}
                            onChange={handleChange}
                            placeholder="Nome da rede"
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={3}>
                    <Form.Group controlId="formUF">
                        <Form.Control
                            type="text"
                            name="UF"
                            value={formData.UF}
                            onChange={handleChange}
                            placeholder="Estado"
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md={9}>
                    <Form.Group controlId="formEndereco">
                        <Form.Control
                            type="text"
                            name="endereco"
                            value={formData.endereco}
                            onChange={handleChange}
                            placeholder="Endereço do posto"
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3 align-items-center">
                <Col md={9}>
                    <Form.Group controlId="formContato">
                        <Form.Control
                            type="text"
                            name="contato"
                            value={formData.contato}
                            onChange={handleChange}
                            placeholder="contato do Posto"
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId="formStatus" className="text-white">
                        <Form.Check
                            name="status"
                            type="switch"
                            label="Ativo"
                            checked={formData.status}
                            onChange={handleStatusChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="secondary" type="submit" className="w-100"> 
                {formButtonText}
            </Button>
        </Form>
    )
});






