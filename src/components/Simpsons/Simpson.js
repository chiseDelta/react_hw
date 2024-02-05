const Simpson = ({simpson}) => {
    const {name, img} = simpson;

    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name}/>
        </div>
    );
};

export {Simpson};