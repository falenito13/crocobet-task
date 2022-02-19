import User from '../models/User'
import {useParams} from "react-router-dom";
import {REDIRECT_UNLESS_AUTHENTICATED} from "../constants/Pages";

export default function RedirectUnlessAuthenticated({children}) {
    if (!User.isLoggedIn()) {
        window.location.href = REDIRECT_UNLESS_AUTHENTICATED
    }
    return children;
};
