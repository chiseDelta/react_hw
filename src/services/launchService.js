import {urls} from "../constants/urls";
import {spaceXService} from "./spaceXService";

const launchService = {
    getAll: () => spaceXService.get(urls.launches)
}

export {launchService}