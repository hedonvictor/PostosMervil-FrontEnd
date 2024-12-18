import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';


import FerramentasDeListagem from '../barraDeFerramentas/FerramentasDeListagem';
import { IListagemPostos, PostosService } from '../../services/postos/PostosService';
import { useDebounce } from '../../hooks';
import { Button, ButtonGroup, Container, Pagination, ProgressBar, Table, } from 'react-bootstrap';
import { Environment } from '../../Environments';


interface ITabelaListagemProps {
    mostrarBotoes?: boolean;
}


export const TabelaListagem: React.FC<ITabelaListagemProps> = ({ mostrarBotoes = false }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { debounce } = useDebounce(1500, true);

    const navigate = useNavigate();

    const [rows, setRows] = useState<IListagemPostos[]>([])
    const [totalCount, setTotalCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true);

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    },[searchParams]);

    const pagina = useMemo(() => {
        return Number(searchParams.get('pagina') || '1')
    }, [searchParams])

    useEffect(() => {
        setIsLoading(true);

        debounce(() => {
            PostosService.getAll(pagina, busca)
            .then((result) => {
                setIsLoading(false);

                if(result instanceof Error){
                    alert(result.message);
                    return;
                };
                
                console.log(result)

                setRows(result.data);
                setTotalCount(result.totalCount);

            })
        });

    }, [busca, pagina, debounce])   


    const handleDelete = (id: number) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Realmente deseja apagar?')) {
            PostosService.deleteById(id)
            .then(result => {
                if(result instanceof Error) {
                    alert(result.message)
                } else {
                    setRows(oldRows =>  [
                            ...oldRows.filter(oldRow => oldRow.id !== id)
                        ])
                    alert('Registro apagado com sucesso')
                }
            })
        }
    }




    return (
        <Container >
            <FerramentasDeListagem
            textoDaBusca={busca}
            aoMudarTextoDeBusca={texto => setSearchParams({busca: texto, pagina: '1'}, {replace: true})}
            />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    { mostrarBotoes && (
                        <th>Ações</th>
                    )}
                        <th>Rede</th>
                        <th>Posto</th>
                        <th>UF</th>
                        <th>Endereço</th>
                        <th>Contato</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(row =>(
                        <tr key={row.id}>
                            { mostrarBotoes && (
                                <td>
                                    <ButtonGroup>
                                        <Button variant='secondary' onClick={() => handleDelete(row.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                            </svg>
                                        </Button>
                                        <Button variant='secondary' onClick={() => navigate(`/postos/detalhe/${row.id}`)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
                                            </svg>
                                        </Button>
                                    </ButtonGroup>
                                </td>
                            )}

                            <td>{row.rede}</td>
                            <td>{row.nome}</td>
                            <td>{row.UF}</td>
                            <td>{row.endereco}</td>
                            <td>{row.contato}</td>
                        </tr>
                    ))}
                </tbody>
                
                {totalCount === 0 && !isLoading && (
                    <caption className='text-white'>{Environment.LISTAGEM_VAZIA}</caption>
                )}

                <tfoot>
                    {isLoading && (
                        <tr>
                            <td colSpan={6}>
                                <ProgressBar variant='info'now={100} animated/>
                            </td>
                        </tr>
                    )}
                    {(totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS) && (
                        <tr>
                            <td colSpan={6}>
                            <Pagination className="justify-content-center">
                              <Pagination.Prev onClick={() => setSearchParams({busca, pagina: (pagina - 1).toString()})} disabled={pagina === 1} />
                              {Array.from({ length: Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS) }, (_, index) => index + 1).map((page) => (
                                <Pagination.Item
                                  key={page}
                                  active={page === pagina}
                                  onClick={() => setSearchParams({busca, pagina: page.toString()})}
                                >
                                  {page}
                                </Pagination.Item>
                              ))}
                              <Pagination.Next onClick={() => setSearchParams({busca, pagina: (pagina + 1).toString()})} disabled={pagina === Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS)}/>
                            </Pagination>
                            </td>
                        </tr>
                    )}
                </tfoot>
            </Table>
        </Container>
    )
}