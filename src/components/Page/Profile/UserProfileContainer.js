import {connect} from "react-redux";
import {changeProfileInfo} from "../../../redux/UserProfileReducer";
import UserProfile from "./UserProfile";

let mapStateToProps=(state)=>{
    return{ User:state.User
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        changeInfo:()=>{
            dispatch(changeProfileInfo())
        }
    }
}
const UserProfileContainer = connect(mapStateToProps,mapDispatchToProps)(UserProfile);
export  default  UserProfileContainer