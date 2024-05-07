  import './App.css';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import TestForm from './components/index';
import { EndPage } from './components/endPage';
import { Funtransalation } from './components/funtranslation';

  

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<TestForm />} />
          <Route path="/end-page" element={<EndPage />} />
          <Route path="/translate" element={<Funtransalation />} />
        </Routes>
      </Router>
    );
  }

  export default App;
