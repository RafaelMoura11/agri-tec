import LostInterface from '../interfaces/LostInterface';
import api from '../api';

    const getLosts = async () => {
        const { data } = await api.get('/api/losts')
        return data
    }


    const createLost = async (lost: LostInterface) => {
        try {
        const { id, ...lostWithoutId } = lost
        await api.post(`/api/losts`, lostWithoutId)
        } catch (e) {
        console.log(e)
        }
    }


    const editLost = async (lost: LostInterface) => {
        try {
        await api.put(`/api/losts/${lost.id}`, lost)
        } catch (e) {
        console.log(e)
        }
    }


    const deleteLost = async (id: number | string) => {
        try {
        await api.delete(`/api/losts/${id}`)
        } catch (e) {
        console.log(e)
        }
    }

    export { getLosts, createLost, editLost, deleteLost }