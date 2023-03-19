import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container mt-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
