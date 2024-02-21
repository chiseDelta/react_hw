const Comment = ({comment}) => {
    const {postId, id, name, body} = comment

    return (
        <div>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};