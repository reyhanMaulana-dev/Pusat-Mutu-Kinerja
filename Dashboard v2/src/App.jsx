import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/survei/:id" element={<Dashboard />} />

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
