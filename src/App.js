// import logo from './logo.svg';
import { Provider } from 'react-redux';
import Body from './Components/Body'
import appStore from './redux/appStore'
// import './App.css';

function App() {
  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
    
  );
}

export default App;




































// {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}