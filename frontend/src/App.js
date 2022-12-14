import './App.css';
import PostView from './components/PostView/PostView' 
import LandingPage from './components/Landing-Page/LandingPage';
import CreatePost from './components/PostView/CreatePost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route exact  path='/' element={<LandingPage/>}/>
        <Route path='/post' element={<PostView/>}></Route>
        <Route path='/createPost' element={<CreatePost/>}/>
      </Routes>
    </Router> 
    
    
    </>
    
  );
}


export default App;