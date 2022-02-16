import { AxiosResponse } from 'axios';
import api from 'utils/api';

export const usePost = <T extends {}>(url: string) => {
    const apiPost = async (object: T) => {
        try {   
            await api.post<T, AxiosResponse<{payload: T}>>(url, object)
            return true
        } catch (e) {
            return e
        }
    }
    return {
        apiPost
    }
}