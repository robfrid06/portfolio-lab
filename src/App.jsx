import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './sections/About'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import ProjectDetails from './sections/ProjectDetails'
import LinkToTop from './sections/LinkToTop'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Projects />
            <Resume />
            <LinkToTop />
            <Footer />
          </>
        } />
        <Route path="/projects/:projectTitle" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
