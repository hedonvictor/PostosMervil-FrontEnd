import axios from "axios";

import { errorInterceptor, responseInterceptor } from "./intercerptors";
import { Environment } from "../../../Environments";

const token = localStorage.getItem('APP_ACCESS_TOKEN');
let parsedToken: string | null = null;

if (token) {
  try {
    parsedToken = JSON.parse(token);
  } catch (error) {
    console.error("Erro ao analisar o token do localStorage:", error);
    localStorage.removeItem('APP_ACCESS_TOKEN');
  }
}


const Api = axios.create({
    baseURL: Environment.URL_BASE,
    headers: {
        authorization: parsedToken ? `Bearer ${parsedToken}` : '""',
      }
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
);

export {Api};