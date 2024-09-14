import "./App.css";
import { createClient } from "@supabase/supabase-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Interview from "./screens/Interview";
import Report from "./screens/Report";
import Profile from "./screens/Profile";
import DefaultLayout from "./layout";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const supabaseUrl = "https://twqwiryumiolecfebqtd.supabase.co";
  const supabaseKey =
    "REDACTED_SECRET";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [showSidebar, setShowSidebar] = useState(true);


  return (
    <Router>
      <DefaultLayout showSidebar={showSidebar}>
        <Routes>
          <Route
            path="/"
            element={<Login db={supabase} isNewAccount={true} />}
          />
          <Route
            path="/signup"
            element={<Login db={supabase} isNewAccount={true} />}
          />
          <Route
            path="/login"
            element={<Login db={supabase} isNewAccount={false} />}
          />
          <Route
            path="/home"
            element={
              <>
                <Profile db={supabase} />
              </>
            }
          />
          <Route path="/interview" element={<Interview db={supabase} />} />
          <Route path="/report" element={<Report db={supabase} />} />
          <Route path="/profile" element={<Profile db={supabase} />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;

