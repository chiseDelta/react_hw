import {useEffect, useState} from "react";
import {Cars} from "./Cars";
import {carService} from "../../services/carService";
import {CarForm} from "./CarForm";

const CarsBlock = () => {
    const [cars, setCars] = useState([])
    const [carsRefresh, setCarsRefresh] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [carsRefresh]);

    return (
        <div>
            <CarForm setCarsRefresh={setCarsRefresh}/>
            <hr/>
            <Cars cars={cars} setCarsRefresh={setCarsRefresh}/>
        </div>
    );
};

export {CarsBlock};