import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import Category from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
