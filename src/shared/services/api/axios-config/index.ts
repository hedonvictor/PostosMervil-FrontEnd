import axios from "axios";

import { errorInterceptor, responseInterceptor } from "./intercerptors";
import { Environment } from "../../../Environments";

const Api = axios.create({
    baseURL: Environment.URL_BASE,
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
);

export {Api};