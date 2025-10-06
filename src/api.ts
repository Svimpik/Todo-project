import axios from "axios";

export const client = {
     fetchData: async <T>(url: string): Promise<T> => {
        try {
            const response = await axios.get<T>(url);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    addData: async <T>(url: string, data: any): Promise<T> => {
        try {
            const response = await axios.post<T>(url, data);
            
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    deleteData: async (url: string, id: number) => {
        try {
            await axios.delete(`${url}/${id}`);
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    patchData: async <T>(url: string, data: any): Promise<T> => {
        try {
            const response = await axios.patch(url, data);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}