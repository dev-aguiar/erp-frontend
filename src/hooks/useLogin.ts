import axios, { AxiosPromise } from "axios";
import { useMutation } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

interface LoginRequest {
	login: string;
	senha: string;
}

interface LoginResponse {
	token: string;
}

const postLogin = async (data: LoginRequest): AxiosPromise<LoginResponse> => {
	const response = axios.post(API_URL + "/auth/login", data);
	return response;
};

export function useLogin() {
	const mutate = useMutation({
		mutationFn: postLogin,
	});

	return mutate;
}
