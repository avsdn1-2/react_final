import { axiosInstance } from "../../../services/axios";



export function create({ title = 'Test title', body = 'Test body' }) {
    return axiosInstance.post(`/order`, {
        title,
        body,
    });
}



