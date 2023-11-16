import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './compenants/nav/Nav';
import TodoList from './compenants/Todolist/TodoList';

import ErrorComponent from './compenants/ErrorComponent'; 
import Firstpage from './compenants/firstpage/firstpage'
function App() {
  return (
    
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Firstpage/>} />
          {/* <Route path="/Calculatrice" element={<Calculatrice />} /> */}
          <Route path="/home" element={<Firstpage />} />
          <Route path="/todolist" element={<TodoList />} />
         {/*  <Route path="/weather" element={<Weather />} />
          <Route path="/slider" element={<Slider />} /> */}

          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        
      </div>
    
  );
}

export default App;
