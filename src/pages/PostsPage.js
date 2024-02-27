import {useParams} from "react-router-dom";

import {Posts} from "../components";

const PostsPage = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>PostsPage</h1>
            <Posts userId={id}/>
        </div>
    );
};

export {PostsPage};