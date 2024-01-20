import './App.css';
import Authentication from './components/Authentication';
import Main from './components/Main';
import { useAuthentication } from './store';

function App() {
  const {authentication}=useAuthentication();
  return (
    <div className="App">
      <div className="overlay"></div>
      {authentication?<Authentication/>:<Main/>}
    </div>
  );
}

export default App;
