import {jsonService} from "./jsonService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => jsonService.get(urls.posts)
}

export {postService}