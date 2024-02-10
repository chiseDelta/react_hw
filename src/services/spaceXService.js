import axios from "axios";

import {spaceXBaseUrl} from "../constants/urls";

const spaceXService = axios.create({baseURL: spaceXBaseUrl})

export {spaceXService}