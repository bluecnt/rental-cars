/*
import React from "react";
import logo from "./logo.svg";
*/
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashPage from "./pages/0_SplashPage";
import InitialPage from "./pages/1_InitialPage";
import LoginPage from "./pages/2_LoginPage";
import RegisterPage from "./pages/3_RegisterPage";
import VehicleListPage from "./pages/4_VehicleListPage";
import ReservationPage from "./pages/5_ReservationPage";
import ReservationListPage from "./pages/6_ReservationListPage";
import { createContext } from "vm";
import { useContext } from "react";
import React from "react";
import { MyContextProvider } from "./contexts/MyContext";
import MyContextConsumer from "./contexts/MyContextConsumer";

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

/*
const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        //
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      BLUECNT RentalCars
    </div>
  );
};
*/

/*
const App = () => {
  console.clear();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/initial" element={<InitialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/vehicle-list" element={<VehicleListPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/reservation-list" element={<ReservationListPage />} />
      </Routes>
    </BrowserRouter>
  );
};
*/

const App = () => {
  console.clear();

  return (
    <MyContextProvider>
      <MyContextConsumer />
    </MyContextProvider>
  );
};

export default App;
