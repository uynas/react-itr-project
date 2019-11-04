import React from 'react';
import EditButtons from "./EditButtons";
import {addModelActionCreator} from "../../../redux/MyModelsReducer";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
return{
}
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addModel:()=>{
            dispatch(addModelActionCreator('BadGuy'))
        }
    }
}



const SuperEditButtonsContainer = connect(mapStateToProps,mapDispatchToProps)(EditButtons);

export  default  SuperEditButtonsContainer