import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import Header from "./components/Header";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // ...
        navigate("/browse");
      } else {
        navigate("/error");
      }
    });
  }, []);
  return (
    <div className="relative min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
