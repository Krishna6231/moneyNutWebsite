import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResetPasswordPage from './ResetPasswordPage'; // adjust the path if needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;