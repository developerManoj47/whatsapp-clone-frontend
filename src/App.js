import './App.css';
import Chat from './pages/Chat';
import Sidebar from './pages/Sidebar';


function App() {
  return (
    <div className="App">
      <div className='app_body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
