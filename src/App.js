import "./App.css";
import { createClient } from "@supabase/supabase-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Interview from "./screens/Interview";

function App() {
  const supabaseUrl = "https://twqwiryumiolecfebqtd.supabase.co";
  const supabaseKey =
    "REDACTED_SECRET";
  const supabase = createClient(supabaseUrl, supabaseKey);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login db={supabase} isNewAccount={true} />} />
        <Route
          path="/login"
          element={<Login db={supabase} isNewAccount={false} />}
        />
        <Route path="/home" element={<Home db={supabase} />} />
        <Route path="/interview" element={<Interview db={supabase} />} />
      </Routes>
    </Router>
  );
}

export default App;
