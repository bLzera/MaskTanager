import { api } from './api';
import type { Enum } from '../types/Enum';

type getTaskParams = {
    id?: number,
}

type editTaskParams = {
    id: number,
    title?: string,
    description?: string,
    status: Enum,
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
        if(!id){
            const res = await api.get('/Task');
            return res.data;
        }
        const res = await api.get(`/Task/${id}`);
        return await res.data;
    } catch (e) {
        console.log('erro ao tentar buscar tasks: ' + e);
    }
} 

export const editTask = async ({id, title, description, status} : editTaskParams) => {
    try {
        const res = await api.post('/Task/edit', {id, title, description, status: status.id});
        return res.data;
    } catch (e: any) {
        console.log('erro completo:' , e);
        console.log('response:' , e?.response);
        console.log('data:' , e?.response?.data);
        console.log('status:' , e?.response?.status);
    }
}

export const addTask = async ({title, description} : addTaskParams) => {
    try {                
        if(!description){            
            const res = await api.post('/Task/add', {title}, {
                timeout: 10000,
            });
            return res.data;
        }        
        const res = await api.post('/Task/add', {title, description});
        return res.data;
    } catch (e: any) {
        console.log(e.message);
        console.log('API INSTANCE: ', api);
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