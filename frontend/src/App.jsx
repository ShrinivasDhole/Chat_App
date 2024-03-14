import "./App.css";
import { useAuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import LogIn from "./pages/login/login"
import SignUp from "./pages/signup/SignUp"
import { Routes, Route , Navigate } from "react-router-dom";

function App() {
  const {authUser} = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <LogIn />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp/> } />
      </Routes>
    </div>
  );
} 

export default App;
