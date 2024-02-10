import {postService} from "../../services/postService";
import {useEffect, useState} from "react";
import {Post} from "./Post";
import {PostDetails} from "./PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
            <hr/>
            {posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
        </div>
    );
};

export {Posts};