import joinIcon from '../../../attachments/favicon_io (4)/person-add.svg'

const JoinGameButton = ({clickHandler})=>{
  return(
    <button onClick={clickHandler} >Join Game<span><img src={joinIcon} alt=""></img></span></button>
  )
}
export default JoinGameButton