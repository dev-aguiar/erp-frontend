import axios, { AxiosPromise } from "axios";
import { useMutation } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

interface RegisterRequest {
    login: string;
    senha: string;
    role: string;
}

const postRegister = async (data: RegisterRequest): AxiosPromise<void> => {
    const response = axios.post(API_URL + "/auth/register", data);
    return response;
};

export function useRegister() {
    const mutate = useMutation({
        mutationFn: postRegister,
    });

    return mutate;
}
