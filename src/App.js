import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EntryPage from './components/Pages/EntryPage/EntryPage'
import MainPage from './components/Pages/MainPgae/MainPage'


import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <MainPage />}/>
        <Route path="/entry" element={ <EntryPage />}/>
      </Routes>
    </Router>

  );
}

export default App;
