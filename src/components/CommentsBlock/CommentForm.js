import {useForm} from "react-hook-form";

const CommentForm = ({setComments}) => {
    const {register, reset, handleSubmit, formState: {isValid}} = useForm({mode: "all"})

    const save = (comment) => {
        setComments(prev => [...prev, comment])
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="number" placeholder={"postId"} {...register('postId', {required: true})}/>
                <input type="number" placeholder={"id"} {...register('id', {required: true})}/>
                <input type="text" placeholder={"name"} {...register('name', {required: true})}/>
                <input type="text" placeholder={"body"} {...register('body', {required: true})}/>
                <button disabled={!isValid}>save</button>
            </form>
        </div>
    );
};

export {CommentForm};