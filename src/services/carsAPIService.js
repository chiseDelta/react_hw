import axios from "axios";

import {carsAPIURL} from "../constants/urls";

const carsAPIService = axios.create({baseURL: carsAPIURL})

export {carsAPIService}