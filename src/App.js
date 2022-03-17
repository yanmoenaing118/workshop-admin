import "./styles/App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dramas from "./routes/dramas";
import Songs from "./routes/songs";
import Home from "./routes/home";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dramas" element={<Dramas />} />
          <Route path="songs" element={<Songs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
