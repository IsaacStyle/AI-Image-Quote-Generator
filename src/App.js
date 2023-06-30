import './App.css';
import { Link,Route,Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Home2 from './Screens/Replicate';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
    </Routes>
  );
}

export default App;
