import { useNavigate, useParams } from "react-router-dom"
import { BaseLayout } from "../../shared/layouts/BaseLayout";
import { FerramentasDeDetalhe } from "../../shared";
import { PostosService } from "../../shared/services/postos/PostosService";
import { useEffect, useRef, useState } from "react";
import { FormNewPosto, IPostoFormValues } from "./components/FormNewPosto";




export const DetalhePostos = () => {
    const {id = 'novo'} = useParams<'id'>();
    const navigate = useNavigate();

    const formRef = useRef<HTMLFormElement>(null);

    const [posto, setPosto] = useState<IPostoFormValues>();

    useEffect(() => {
        if(id !== 'novo'){
           PostosService.getById(Number(id))
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                    navigate('/adminPage');
                } else {
                    setPosto(result)
                }
                
            });
        }
    }, [id, navigate])

    const handleSave = (dados: IPostoFormValues) => {
        if(id === 'novo'){
            PostosService.create(dados)
                .then((result) => {
                    if(result instanceof Error){
                        alert(result.message);
                    } else {
                        navigate(`/adminPage/detalhe/${result}`);
                    }
                })
                ;
                
        }; 

        if(id !== 'novo'){
            PostosService.updateById(Number(id) ,{id: Number(id),...dados})
                .then((result) => {
                    if(result instanceof Error){
                        alert(result.message);
                    } else {
                        navigate('/adminPage')
                    }
                });
        };
    };

    const handleDelete = (id: number) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Realmente deseja apagar?')) {
            PostosService.deleteById(id)
            .then(result => {
                if(result instanceof Error) alert(result.message);
                navigate('/adminPage')
            })
        }
    }


    return (
        <BaseLayout>
        <FerramentasDeDetalhe
            mostrarBotaoApagar={id !== 'novo'}
            mostrarBotaoNovo={!id}

            aoCLicarEmApagar={() => handleDelete(Number(id))}
            aoCLicarEmNovo={() => navigate('/adminPage/detalhe/novo')}
            aoCLicarEmVoltar={() => navigate('/adminPage')}
        />
            <FormNewPosto onSubmit={handleSave} ref={formRef} initialData={posto} formButtonText={id === 'novo' ? 'Cadastrar Posto' : 'Atualizar Posto'}/>
        </BaseLayout>
    )
}