import { Api } from "../api";


interface IAuth {
    accessToken: string;
}

const auth = async (username: string, password: string): Promise<IAuth | Error> => {
    try {
        const {data} = await Api.post('/entrar', {email: username, senha: password});

        if(data) {
            return data;
        }

        return new Error('Erro no login');
    } catch (error) {
        console.error(error);
        return new Error('Erro no login');
    }
};

export const AuthService = {
    auth,
};