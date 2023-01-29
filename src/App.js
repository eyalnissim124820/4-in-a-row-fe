import './App.css';
import useAuthContext from './hooks/useAuthContext';

function App() {

  const {currentUser} = useAuthContext()

  return (
  <div>hello</div>
  );
}

export default App;
