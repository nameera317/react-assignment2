import logo from './logo.svg';
import './App.css';
import TopBar from './topBar';
import Filter from './filter';
import Cards from './cards';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Filter/>
      <Cards/>
    </div>
  );
}

export default App;
