import React from 'react'

const initialState = {
                       selectedMenu:'',
                       scrollDown:0
                    }
const store =React.createContext(initialState)
const {Provider} = store;

function StateProvider({children}) {
   const [state,dispatch] = React.useReducer((state,action)=>{
       switch(action.type){
           case 'CurrentMenuItemSelection':
               return{
                   selectedMenu:action.selectedMenu,
                   scrollDown:0
               }
           case 'PageScrollDown':
               return{
                   scrollDown:action.scrollDown,
                   selectedMenu:state.selectedMenu
               }
           default: return state;
       }
   },initialState)
return <Provider value={{state,dispatch}}>{children}</Provider>
}

export {store,StateProvider}
