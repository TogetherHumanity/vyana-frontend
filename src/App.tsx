import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; // ✅ Make sure this exists
import Chat from "./components/Chat"; // or whatever your main page is

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
