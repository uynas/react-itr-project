export const addModelActionCreator=(name)=>{
    return{type:'addModel',name:name}
}
export const sortActionCreator=()=>{
    return{type:'sort'}
}
let initialState ={
    Models : [
        {id:1,name:'Monster',imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJa6tzGKDhfZaYcDKoW4wFkirs1vsFB95MiTvsS2l5SYb6E5N&s',
            buyescount:0

        }, {id:0,name:'Bad Guy',imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTod8Kw078OqD-Oy55edQ0-o_f_tkYSm_rW2VHJy4-7xtLgqzUlaw&s',
            buyescount:0

        }
    ]

}

 const MyModelsReducer=(state=initialState,action)=>{

     let statecopy = {  ...state,
             Models:{...state.Models}
          }

    if(action.type==='addModel'){
        let NewName={
            name:action.name
        }
        statecopy.Names.push(NewName)
        alert(action.name);
        return statecopy

}else  if(action.type==='sort'){

        statecopy.Models.sort();

        return statecopy

    }
else return state
}

export  default  MyModelsReducer;