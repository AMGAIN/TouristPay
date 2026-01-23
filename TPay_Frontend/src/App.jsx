import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/Profile";
import MobileLayout from "./layouts/MobileLayout";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import TransactionHistory from "./pages/TransactionHistory";
import PaymentProcess from "./pages/PaymentProcess";

function App() {
  return (
    <MobileLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/tHistory" element={<TransactionHistory/>}/>
        <Route path="paymentprocess" element={<PaymentProcess/>} />
      </Routes>
    </MobileLayout>
  );
}

export default App;
