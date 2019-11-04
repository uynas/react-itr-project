export const changeProfileInfo=(name)=>{
    return{type:'changeInfo'}
}

let initialState ={
    User :
        {id:0,name:'Alexandr',secondName:'Kirilyuk',login:"sasha.kirilyuk@inbox.ru", image :"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"}
}

const UserProfileReducer=(state=initialState,action)=>{

    let statecopy = {  ...state,
        User:{...state.User}

    }

    if(action.type==='changeInfo'){
        return statecopy

    }
    else return state
}

export  default  UserProfileReducer;