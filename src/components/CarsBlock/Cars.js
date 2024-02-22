import {Car} from "./Car";

const Cars = ({cars, setCarsRefresh, setCarUpdate}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarsRefresh={setCarsRefresh} setCarUpdate={setCarUpdate}/>)}
        </div>
    );
};

export {Cars};