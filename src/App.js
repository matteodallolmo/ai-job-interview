import "./App.css";
import { createClient } from "@supabase/supabase-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabaseUrl = "https://twqwiryumiolecfebqtd.supabase.co";
const supabaseKey =
  "REDACTED_SECRET";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="flex justify-center align-middle text-center h-[100vh]">
        <div className="bg-white h-[auto] py-80 rounded-lg w-[40vw]">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["google", "github"]}
          />
        </div>
      </div>
    );
  } else {
    return <div>Logged in!</div>;
  }
}
// function App() {
//   const supabaseUrl = "https://twqwiryumiolecfebqtd.supabase.co";
//   const supabaseKey =
//     "REDACTED_SECRET";
//   const supabase = createClient(supabaseUrl, supabaseKey);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login db={supabase} isNewAccount={true} />} />
//         <Route
//           path="/login"
//           element={<Login db={supabase} isNewAccount={false} />}
//         />
//         <Route path="/home" element={<Home db={supabase} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
