import './App.css';
import Header from './component/Header';
import StudentState from './context/StudentState';


function App() {
  return (
    <StudentState>
    <Header/>
    </StudentState>
  )
}

export default App