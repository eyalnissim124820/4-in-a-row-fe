import { useNavigate } from "react-router-dom"
import useAuthContext from "../../hooks/useAuthContext"

const PrivateRoutes = ({children}) =>{
  const {currentUser} = useAuthContext()
  const navigate = useNavigate()
  return(
    <> 
      {currentUser && children }
    </>
  )
}

export default PrivateRoutes