import { Routes, Route } from "react-router-dom";
import Main from "../main/Main";
import Evaluation from "../evaluations/Evaluations";
import { LoginPage } from "../login/Login";
import { SignUp } from "../register/SignUp";
import { Cart } from "../cart/Cart";




const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Main />
            <Evaluation />
          </>
        }
      />
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/signup" element={<SignUp />} />
      <Route path="cart" element={<Cart />} />
   
     
      
    </Routes>
  );
};

export default AppRoutes;
