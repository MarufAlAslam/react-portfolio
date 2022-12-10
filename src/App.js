import './App.css';
import Main from './Pages/Main/Main';
import AOS from 'aos';

function App() {
  AOS.init();
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
