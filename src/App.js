import './App.css';
import { Link,Route,Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Nav from './Screens/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className='page'>
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
