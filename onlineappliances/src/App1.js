import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function App1() {
  return (
    <div className="App">
  <center>
    <form>
        <p><h1>Sign in</h1></p>
        
    <table>
      <br></br>
        <tr>
          <td><label>UserName</label></td>
          <td>:</td>
          <td><input type="text"></input></td>
        </tr>
        <br></br>
        <tr>
          <td><label>Email</label></td>
          <td>:</td>
          <td><input type="email"></input></td>
        </tr>
        <br></br>
        <tr>
          <td><label>Phone Number</label></td>
          <td>:</td>
          <td><input type="phonenumber"></input></td>
        </tr>
        <br></br>
        <tr>
          <td><label>Enter Password</label></td>
          <td>:</td>
          <td><input type="password"></input></td>
        </tr>
        <br></br>
        <tr>
          <td><label>Conform Password</label></td>
          <td>:</td>
          <td><input type="password"></input></td>
        </tr>
        <br></br>
    </table>
   <Link to='/Home'> <button>SUBMIT</button></Link>
    <br></br>
      </form>
    </center>
    </div>
  );
}

export default App1;

