import './App.css';
import Title from "./components/Title";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div data-depth='0.2' className='content'>
      <Title />
      <Contacts />
    </div>
  );
}

export default App;
