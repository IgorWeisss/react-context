import { ReactNode, createContext, useReducer } from "react";

interface ContextProps {
  state: typeof initialState
  dispatch: React.Dispatch<actionProps>
}

interface actionProps {  
  type: 'SET_FIRST' | 'SET_LAST'
  payload: string
}

const initialState = {
  first: '',
  last: ''
}

function reducer (state: typeof initialState, action: actionProps) {
  const {type, payload} = action
  switch (type) {
    case 'SET_FIRST': {
      return {...state, first: payload}
    }
    case 'SET_LAST': {
      return {...state, last: payload}
    }
    default :
    return state
  }
}

export const Context = createContext({} as ContextProps)

export function ContextProvider({children}: {children: ReactNode}) {
  console.log("Context")  
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
}
