import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => apiService.get(urls.users),
}

export {userService}