import axios from "axios";

import {jsonBaseUrl} from "../constants/urls";

const jsonService = axios.create({baseURL: jsonBaseUrl})

export {jsonService}