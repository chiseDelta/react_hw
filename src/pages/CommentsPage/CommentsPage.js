import {Outlet} from "react-router-dom";

import {Comments} from "../../components/CommentsBlock/Comments";
import css from './CommentsPage.module.css'

const CommentsPage = () => {
    return (
        <div className={css.flexBlock}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};