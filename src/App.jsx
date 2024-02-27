import React, { useEffect } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import POS from "./pages/POS";
import Sidebar from "./components/Sidebar";
import ContextProvider from "./context/store";

function InvoiceRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/invoice", { replace: true });
  }, [navigate]);

  return null; // This component doesn't render anything, it just handles the redirect
}

function App() {
  return (
    <Router>
      <ContextProvider>
        <Sidebar />
        <Routes>
          <Route path="/" element={<InvoiceRedirect />} />
          <Route path="/invoice" element={<POS />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
