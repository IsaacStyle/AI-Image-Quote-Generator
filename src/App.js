import logo from './logo.svg';
import './App.css';
import { Link,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={
        <div className="App">
          <h1>Hello World</h1>
        </div>
      } />
    </Routes>
  );
}

export default App;
