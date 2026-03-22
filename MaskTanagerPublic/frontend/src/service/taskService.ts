import { api } from './api';

type getTaskParams = {
    id?: number,
}

type editTaskParams = {
    id: number,
    title?: string,
    description?: string,
}

type addTaskParams = {
    title: string,
    description?: string,
}

type deleteTaskParams = {
    id: number,
}

export const getTask = async ({ id } : getTaskParams = {}) => {
    try{
        console.log('entrando no try...');
        if(!id){
            const res = await api.get('/Task');
            return res.data;
        }
        const res = await api.get(`/Task/${id}`);
        console.log('achou dados');
        return await res.data;
    } catch (e) {
        console.log('erro ao tentar buscar tasks: ' + e);
    }
} 

export const editTask = async ({id, title, description} : editTaskParams) => {
    try {
        const res = await api.post('/Task/edit', {id, title, description});
        return res.data;
    } catch (e) {
        console.log('erro ao tentar editar task: ' + e);
    }
}

export const addTask = async ({title, description} : addTaskParams) => {
    try {
        if(!description){
            const res = await api.post('/Task/add', {title});
            return res.data;
        }
        const res = await api.post('/Task/add', {title, description});
        return res.data;
    } catch (e) {
        console.log('erro ao tentar adicionar task: ' + e);
    }
}

export const deleteTask = async ({id} : deleteTaskParams) => {
    try {
        const res = await api.post('/Task/delete', {id});
        return res.data;
    } catch (e) {
        console.log('erro ao tentar deletar task: ' + e);
    }
}