import {carService} from "../../services/carService";

const Car = ({car, setCarsRefresh, setCarUpdate}) => {
    const {id, brand, price, year} = car

    const deleteCar = async () => {
        await carService.deleteById(id)
        setCarsRefresh(prev => !prev)
    }

    return (
        <div style={{margin: '10px 0 10px 10px'}}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={deleteCar}>delete</button>
            <button onClick={() => setCarUpdate(car)}>update</button>
        </div>
    );
};

export {Car};