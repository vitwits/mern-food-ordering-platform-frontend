import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/layout/Layout.tsx";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/auth-callback" element={<AuthCallbackPage/>} />
      <Route path="/user-profile" element={<span>Profile PAGE</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
