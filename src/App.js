import "./App.css";
import React, { useEffect } from "react";
// import components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Checkout, Login, Payment } from "./components/components";
import { auth } from "./firebase";
import { useStateValue } from "./state/stateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
