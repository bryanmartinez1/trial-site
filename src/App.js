import { NavBar } from "./NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sell from "./pages/Sell";
import Strikes from "./pages/Strikes";
import ShoppingCart from "./pages/ShoppingCart";

import { Route, Routes } from "react-router-dom";
import Parse from "parse/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Starts SDK
// Parse.setAsyncStorage(AsyncStorage);
// App ID, JS Key, URL
// Parse.initialize(
//   "DjfivdBijDI8xfnhVzb0PMEJNcTIbmmvbNLIMadz",
//   "ui8MjsQHVjNjxfdfaxNAAJdKSnSp6w3QAEWMHYzi"
// );
// Parse.serverURL = "https://parseapi.back4app.com/";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shopping_cart" element={<ShoppingCart />} />
          <Route path="/strikes" element={<Strikes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
