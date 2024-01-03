
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <center>
      <form>
        <br></br>
        <br></br>
        <label>
        <b>UserName :</b>
        <input type="text"required></input>
        </label>
        <br></br>
        <br></br>
        <label>
          <b> Password:</b>
         <b> <input type="password" required></input></b>
        </label>
        <br></br>
        <br></br>

      <Link to='/Home'>  <b><button>Login</button></b></Link>
        <br/>
       
        <br></br>
        <br></br>
      <b><p>Don't Have an Account?</p></b>
     <Link to='/Signup'> <p>Sign up</p></Link>
        <br></br>
      </form>
      </center>
    </div>
  );
}
export default App;


