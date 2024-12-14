import { useSearchParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import { BaseLayout } from '../../shared/layouts/BaseLayout';
import { FerramentasDeListagem } from '../../shared';
import { PostosService } from '../../shared/services/postos/PostosService';
import { useDebounce } from '../../shared/hooks';


export const ListagemPostos = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { debounce } = useDebounce(1500, true);

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    },[searchParams]);

    useEffect(() => {

        debounce(() => {
            PostosService.getAll(1, busca)
            .then((result) => {
                if(result instanceof Error){
                    alert(result.message);
                    return;
                };
                
                console.log(result)
            })
        })

    }, [busca, debounce])   

    return (
        <BaseLayout>
            <FerramentasDeListagem
                textoDaBusca={busca}
                aoMudarTextoDeBusca={texto => setSearchParams({busca: texto}, {replace: true})}
            />
        </BaseLayout>
    );
};