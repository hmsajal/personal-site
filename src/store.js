import React from 'react'

const initialState = {menuSelection:''}
const store =React.createContext(initialState)
const {Provider} = store;

function StateProvider({children}) {
   const [state,dispatch] = React.useReducer((state,action)=>{
       switch(action.type){
           case 'CurrentMenuItemSelection':
               return {menuSelection : action.payload};
           
           default: throw new Error();
       }
   },initialState)
return <Provider value={{state,dispatch}}>{children}</Provider>
}

export {store,StateProvider}
