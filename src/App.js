import './App.css';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import AppBar from "./components/AppBar";

function App() {
  const location = useLocation();

  return (
    <>
      <div className='App'>
        <sidebar className="sidebar">
          <Logo />
          <Navbar />
        </sidebar>
        <main className='main'>
          <AppBar />
          <section className='current-route'>{JSON.stringify(location)}</section>
          <section className='main-content'>
            <Outlet />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
