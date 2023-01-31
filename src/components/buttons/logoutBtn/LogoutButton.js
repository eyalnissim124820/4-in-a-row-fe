import logoutImg  from '../../../attachments/favicon_io (4)/logout-icon.svg'

const LogoutButton = ({clickHandler})=>{
  
  
  return(
    <div className="">
      <img onClick={clickHandler} src={logoutImg} alt="door-icon"/> 
    </div>
  )
}
export default LogoutButton;