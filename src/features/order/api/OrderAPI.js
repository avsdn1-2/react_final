import { axiosInstance } from "../../../services/axios";



export function create({ firstName = 'Test firstName', lastName = 'Test lastName' }) {
    return axiosInstance.post(`/order`, {
        firstName,
        lastName,
    });
}



