import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/homePage";
import Company from "./pages/company";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
