import { getFullYear, getFooterCopy } from './utils';
import logo from './Holbie-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label>
            Email:
            <input className='input-text' type="text" name="email" />
          </label>
          <label>
            Password:
            <input className='input-text' type="text" name="password" />
          </label>
          <input className='input-button' type="submit" value="OK" />
        </form>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
