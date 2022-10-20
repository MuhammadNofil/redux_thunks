import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./redux/feautures/postslice";

export default configureStore({
    reducer:{
        post:postsReducer
    }
})