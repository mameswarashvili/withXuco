import './App.css';
import LoginCheck from './LoginCheck';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <nav>
            <ul>
              <li><a href="#">მთავარი</a></li>  
              <li><a href="#">ყუთები</a></li>
              <li><a href="#"><i class="fa-solid fa-user">&nbsp;</i>შესვლა</a></li>
            </ul>
          </nav>
      </header>
      <div>
        <h1>Random Box</h1>
        <LoginCheck />
      </div>
    </div>
  );
}

export default App;
