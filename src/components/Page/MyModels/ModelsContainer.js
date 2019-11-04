import React from 'react';
import Models from "./Models";
import {addModelActionCreator,sortActionCreator} from "../../../redux/MyModelsReducer";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
return{ Models:state.Models
}
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addModel:()=>{
            dispatch(addModelActionCreator('BadGuy'))
        },
        sort:()=>{
            dispatch(sortActionCreator())
        }
    }
}
const SuperModelsContainer = connect(mapStateToProps,mapDispatchToProps)(Models);
export  default  SuperModelsContainer