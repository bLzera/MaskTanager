import { api } from "./api";

type getEnumParams = {
    nome: string
}

export const getEnum = async ({nome}: getEnumParams) => {
    try{
        const res = await api.get(`/Config/enum/${nome}`);
        return await res.data;
    } catch (e) {
        console.log('erro ao tentar buscar enum ' + nome + ': ' + e);
    }
}