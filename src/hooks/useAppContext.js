import { useContext } from "react"
import { Context } from "../contexts/AppContext"


const  useAppContext =() => {
  const context = useContext(Context)
  if(!context){
    throw Error('useAppContext must be inside an AppContextProvider')
}
  return context
}
export default useAppContext;