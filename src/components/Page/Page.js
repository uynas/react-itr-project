import React,{ Component } from 'react';
import {Route} from "react-router";
import MyModels from "./MyModels/MyModels";
import {BrowserRouter} from "react-router-dom";
import UserProfileContainer from "./Profile/UserProfileContainer";
import UserProfile from "./Profile/UserProfile";
const Page = (props)=> {
    return(  <BrowserRouter>

    
        <Route path={"/home"}  />
        <Route path={"/profile"} render={()=>(<UserProfileContainer/>)}/>
        <Route path={"/mymodels"}  render={()=>(<MyModels/>)}/>

        </BrowserRouter>
    )
}
export default Page;