import { axiosInstance } from "../../../services/axios";

export function getCategories() {
    return axiosInstance.get('/products-category');
}

