import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import Navbar from './components/Navbar';

console.log(import.meta.env.VITE_BACKEND_URL);

function App() {
  

  return (
    <>
    <div className='bg-zinc-900 h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/projects' element={<ProjectsPage />}/>
        <Route path='/projects/:projectId' element={<ProjectDetailsPage />}/>
        
      </Routes>
    </div>
    </>
  )
}

export default App;
