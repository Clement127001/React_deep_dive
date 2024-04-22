import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser } from "./utils/userSlice";
import Header from "./components/Header";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { displayName, email, uid } = user;

        dispatch(addUser({ displayName, email, uid }));
        // ...
        navigate("/browse");
      } else {
        navigate("/");
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
