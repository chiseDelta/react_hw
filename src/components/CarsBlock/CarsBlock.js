import {useEffect, useState} from "react";

import {carService} from "../../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarsBlock = () => {
    const [cars, setCars] = useState([])
    const [carsRefresh, setCarsRefresh] = useState(null)
    const [carUpdate, setCarUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [carsRefresh]);

    return (
        <div>
            <CarForm setCarsRefresh={setCarsRefresh} carUpdate={carUpdate} setCarUpdate={setCarUpdate}/>
            <hr/>
            <Cars cars={cars} setCarsRefresh={setCarsRefresh} setCarUpdate={setCarUpdate}/>
        </div>
    );
};

export {CarsBlock};