import './App.css';
import { Link,Route,Routes } from 'react-router-dom';
// import Home from './Screens/Home';
import Nav from './Screens/Nav';
import Home2 from './Screens/Home copy';

function App() {
  return (
    <>
      <Nav />
      <div className='page'>
        <Routes>
          <Route path={'/'} element={<Home2 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
