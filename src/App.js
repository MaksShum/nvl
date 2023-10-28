import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EntryPage from './components/Pages/EntryPage/EntryPage'
import MainPage from './components/Pages/MainPgae/MainPage'
import RegPage from "./components/Pages/RegPage/RegPage";
import Profile from "./components/Pages/Profile/Profile";
import CreateEventsPage from './components/Pages/CreateEventsPage/CreateEventsPage'


import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <MainPage />}/>
        <Route path="/entry" element={ <EntryPage />}/>
        <Route path="/reg" element={ <RegPage />}/>
        <Route path="/profile" element={ <Profile />}/>
        <Route path="/create" element={ <CreateEventsPage />}/>
      </Routes>
    </Router>

  );
}

export default App;
