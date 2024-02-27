import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {UserDetails} from "../components";
import {userService} from "../services";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        userService.getById(id).then(({data}) => setUserDetails(data))
    }, [id]);
    return (
        <div>
            <h1>UserDetailsPage</h1>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};