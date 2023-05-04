import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { UserList } from './components/userlist';
import { Details } from './components/details';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <ul className='nav'>
          <li className='nav-item'>
            <Link className='nav-link' to="/userlist">UserList</Link>
          </li>
          {/* <li className='nav-item'>
          <Link className='nav-link' to="/userlist">About Us</Link>
        </li> */}
        </ul>
        <Routes>
          <Route path="/userlist" element={<UserList />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
