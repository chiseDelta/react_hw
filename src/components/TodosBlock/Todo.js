const Todo = ({todo}) => {
    const {id, title, completed} = todo

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>title: {completed.toString()}</div>
        </div>
    );
};

export {Todo};