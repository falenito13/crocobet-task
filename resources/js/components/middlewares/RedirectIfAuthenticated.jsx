import User from '../models/User'
import {useParams} from "react-router-dom";
import {REDIRECT_IF_AUTHENTICATED} from "../constants/Pages";

export default function AdminRoute({children}) {
    const {lang} = useParams()
    if (User.isLoggedIn()) {
        window.location.href = REDIRECT_IF_AUTHENTICATED
    }
    return children;
};
