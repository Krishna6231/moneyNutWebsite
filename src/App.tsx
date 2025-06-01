import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResetPasswordPage from './ResetPasswordPage'; // adjust the path if needed
import SuccessfulPage from './SuccessfulPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/successful" element={<SuccessfulPage />} />
      </Routes>
    </Router>
  );
}

export default App;