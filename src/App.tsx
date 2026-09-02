import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from "./pages/HomePage"; 
import { ProjectPage } from './pages/ProjectPage';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route index element={<HomePage />}/>
      <Route path="prosjekter/:id" element={<ProjectPage />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
