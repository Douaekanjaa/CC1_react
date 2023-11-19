import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useTheme } from './compenants/dark_light/ThemeContext';
import Nav from './compenants/nav/Nav';
import ErrorComponent from './compenants/ErrorComponent';
import Firstpage from './compenants/firstpage/firstpage';
import Calculator from './compenants/Calculator/Calculator';
import TodoList from './compenants/Todolist/TodoList';
import Weather from './compenants/Weather/weather';
import Slider from './compenants/Slider/Slider';






function App() {
  const { darkMode } = useTheme();

  return (
    <div className={`App${darkMode ? ' dark-mode' : ''}`}>
      <Nav />
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/home" element={<Firstpage />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </div>
  );
}

export default App;
