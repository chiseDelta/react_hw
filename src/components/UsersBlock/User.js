const User = ({user}) => {
    const {id, name, website} = user

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>website: {website}</div>
        </div>
    );
};

export {User};