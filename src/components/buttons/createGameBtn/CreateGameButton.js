import addIcon from '../../../attachments/favicon_io (4)/ADD.svg'
const CreateGameButton =({clickHandler}) => {
  return(
      <button onClick={clickHandler}>Create Game<span><img src={addIcon} alt=""></img></span></button>
  )
}
export default CreateGameButton