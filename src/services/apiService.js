import axios from "axios";

import {jsonplaceholderURL} from "../constants/urls";

const apiService = axios.create({baseURL: jsonplaceholderURL})

export {apiService}