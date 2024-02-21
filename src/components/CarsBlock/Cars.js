import {Car} from "./Car";

const Cars = ({cars, setCarsRefresh}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarsRefresh={setCarsRefresh}/>)}
        </div>
    );
};

export {Cars};