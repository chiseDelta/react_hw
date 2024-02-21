import {carsAPIService} from "./carsAPIService";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => carsAPIService.get(urls.cars.cars),
    create: (data) => carsAPIService.post(urls.cars.cars, data),
    deleteById: (id) => carsAPIService.delete(urls.cars.byId(id))
}

export {carService}