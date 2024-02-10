import css from './Launch.module.css'

const Launch = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch: image}} = launch

    return (
        <div>
            <div>mission name: {mission_name}</div>
            <div>launch year: {launch_year}</div>
            <img src={image} alt={mission_name}/>
        </div>
    );
};

export {Launch};