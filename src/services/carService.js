import {carsAPIService} from "./carsAPIService";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => carsAPIService.get(urls.cars.base),
    create: (data) => carsAPIService.post(urls.cars.base, data),
    deleteById: (id) => carsAPIService.delete(urls.cars.byId(id)),
    updateById: (id, data) => carsAPIService.put(urls.cars.byId(id), data)
}

export {carService}