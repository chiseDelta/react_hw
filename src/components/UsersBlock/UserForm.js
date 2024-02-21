import {useForm} from "react-hook-form";

const UserForm = ({setUsers}) => {
    const {register, reset, handleSubmit, formState: {isValid}} = useForm({mode: "all"})

    const save = (car) => {
        setUsers(prev => [...prev, car])
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="number" placeholder={"id"} {...register('id', {required: true})}/>
                <input type="text" placeholder={"name"} {...register('name', {required: true})}/>
                <input type="text" placeholder={"website"} {...register('website', {required: true})}/>
                <button disabled={!isValid}>save</button>
            </form>
        </div>
    );
};

export {UserForm};