import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddPost from "../posts/AddPost";
import Posts from "../posts/Posts";
import ModifyPost from "../posts/ModifyPost";

const AppRouter = () => {
    return (
        <div style={style}>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Posts} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/add_post" component={AddPost} />
                    <Route path="/modify_post" component={ModifyPost} />
                </div>
            </BrowserRouter>
        </div>
    );
};

const style = {
    marginTop: "20px",
};
export default AppRouter;
