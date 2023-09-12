import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Projects from './page/Projects';
import ProjectDetail from './page/ProjectDetail';
import { ProjectDetailData } from './data/ProjectDetailData';
import NavBar from './components/NavBar';
import NavBarMobile from './components/Mobile/NavBar_Mobile';

function App() {
  return (
    <div id="app">
      <NavBar />
      <NavBarMobile />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        {ProjectDetailData.map((detail, index) => (
          <Route
            key={index}
            path={detail.path}
            element={<ProjectDetail {...detail.content} />}
          ></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
