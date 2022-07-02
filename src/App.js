import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
