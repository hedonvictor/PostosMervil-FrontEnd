import { Environment } from "../../Environments";
import { Api } from "../api";

interface IListagemPostos {
    id: number;
    nome: string;
    rede: string;
    UF: string;
    endereco: string;
    contato: string;
    status: boolean; 
};

interface IDetalhePostos {
    id: number;
    nome: string;
    rede: string;
    UF: string;
    endereco: string;
    contato: string;
    status: boolean; 
};

type TPostosComTotalCount = {
    data: IListagemPostos[],
    totalCount: number;
}

const getAll = async (page = 1, filter = '', id = 0): Promise<TPostosComTotalCount | Error> => {
    try {
        const urlRelativa = `/postos?page=${page}&limit=${Environment.LIMITE_DE_LINHAS}&filter=${filter}&id=${id}`;

        const {data, headers} = await Api.get(urlRelativa);

        if(data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
            };
        };

        return new Error('Erro ao listar os registros')
    } catch (error) {
        console.log(error);
        return new Error((error as {message: string}).message || 'Erro ao listar os registros');
    }
}; 

const getById = async (id: number): Promise<IDetalhePostos | Error> => {
    try {

        const {data} = await Api.get(`/postos/${id}`);

        if(data) return data;

        return new Error('Erro ao buscar o registro')
    } catch (error) {
        console.log(error)
        return new Error((error as {message: string}).message || 'Erro ao buscar o registro')
    }
};

const create = async (dataReceived: Omit<IDetalhePostos, 'id'>): Promise<number | Error> => {
    try {
        const {data} = await Api.post<IDetalhePostos>('/postos', dataReceived);

        if (data) return data.id;

        return new Error('Erro ao criar o registro');
    } catch (error) {
        console.log(error)
        return new Error((error as {message: string}).message || 'Erro ao criar o Registro')
    }
};

const updateById = async (id: number, dataReceived: IDetalhePostos): Promise<void | Error> => {
    try {
        await Api.put(`/postos/${id}`, dataReceived);

    } catch (error) {
        console.log(error)
        return new Error((error as {message: string}).message || 'Erro ao atualizar o Registro')
    }
};

const deleteById = async (id: number): Promise<void | Error> => {
    try {
        await Api.delete(`/postos/${id}`);

    } catch (error) {
        console.log(error)
        return new Error((error as {message: string}).message || 'Erro ao atualizar o Registro')
    }
};


export const PostosService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}