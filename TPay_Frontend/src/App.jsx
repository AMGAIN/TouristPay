import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/Profile";
import MobileLayout from "./layouts/MobileLayout";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import TransactionHistory from "./pages/TransactionHistory";
import PaymentProcess from "./pages/PaymentProcess";
import PaymentProcess2 from "./pages/PaymentProcess2";
import TPin from "./pages/TPin";
import KYCForm from "./pages/KycForm";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  return (
    <MobileLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/tHistory" element={<TransactionHistory/>}/>
        <Route path="/pprocess" element={<PaymentProcess/>} />
        <Route path="/pprocess/pprocess2" element={<PaymentProcess2/>} />
        <Route path="/pprocess/pprocess2/tpin" element={<TPin/>} />
        <Route path="/kyc" element={<KYCForm/>}/>
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </MobileLayout>
  );
}

export default App;
