import {Routes, Route} from "react-router-dom"
import './App.css';
import {News} from './components/News';
import {Newscards} from './components/Newscards';

function App() {
  return (
    <div className="App">
      <News/>
      {/* <Newscards/> */}
      <Routes>
        <Route path="/newscards" element={<Newscards/>} />
        
      </Routes>
    </div>
  );
}

export default App;
