import {useEffect} from "react";
import {useForm} from "react-hook-form";

import {carService} from "../../services/carService";

const CarForm = ({setCarsRefresh, carUpdate, setCarUpdate}) => {
    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm({mode: 'all'})

    useEffect(() => {
        if (carUpdate) {
            setValue('brand', carUpdate.brand, {shouldValidate: true})
            setValue('price', carUpdate.price, {shouldValidate: true})
            setValue('year', carUpdate.year, {shouldValidate: true})
        }
    }, [carUpdate]);

    const save = async (car) => {
        await carService.create(car)
        setCarsRefresh(prev => !prev)
        reset()
    }

    const update = async (car) => {
        await carService.updateById(carUpdate.id, car)
        setCarsRefresh(prev => !prev)
        setCarUpdate(null)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand', {
                    required: true,
                    pattern: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/
                })}/>
                <input type="number" placeholder={'price'} {...register('price', {
                    required: true,
                    valueAsNumber: true,
                    max: {value: 1000000, message: 'Highest price is 1.000.000'},
                    min: {value: 0, message: 'Lowest price is 0'}
                })}/>
                <input type="number" placeholder={'year'} {...register('year', {
                    required: true,
                    valueAsNumber: true,
                    max: {value: new Date().getFullYear(), message: 'Current year MAXIMUM'},
                    min: {value: 1990, message: '1990 year MINIMUM'}
                })}/>
                <button disabled={!isValid}>{carUpdate ? 'update' : 'save'}</button>
                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </form>
        </div>
    );
};

export {CarForm};