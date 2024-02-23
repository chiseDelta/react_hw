import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {AlbumPage} from "./pages/AlbumPage";
import {TodosPage} from "./pages/TodosPage";
import {PostsPage} from "./pages/PostsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'todos'}/>
            },
            {
                path: 'todos', element: <TodosPage/>
            },
            {
                path: 'albums', element: <AlbumPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {
                        path: 'post', element: <PostsPage/>
                    }
                ]
            }
        ]
    }
])

export {router}