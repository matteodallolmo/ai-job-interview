import "./App.css";
import { createClient } from "@supabase/supabase-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Interview from "./screens/Interview";
import Report from "./screens/Report";
import Profile from "./screens/Profile";
import Header from "./components/Header";

function App() {
  const supabaseUrl = "https://twqwiryumiolecfebqtd.supabase.co";
  const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login db={supabase} isNewAccount={true} />} />
        <Route
          path="/signup"
          element={<Login db={supabase} isNewAccount={true} />}
        />
        <Route
          path="/login"
          element={<Login db={supabase} isNewAccount={false} />}
        />
        <Route path="/home" element={<Profile db={supabase} />} />
        <Route path="/interview" element={<Interview db={supabase} />} />
        <Route path="/report" element={<Report db={supabase} />} />
        <Route path="/profile" element={<Profile db={supabase} />} />
      </Routes>
    </Router>
  );
}

export default App;
