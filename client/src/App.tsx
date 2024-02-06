import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { autoLogin } from "./actions/authActions";
// import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AlertNotification from "./components/AlertNotification";
import { useAppSelector } from "./store";
import Loading from "./components/Loading";
import { DashBoard } from "./pages/DashBoard";
import { NotFoundPage } from "./pages/NotFound";
import { UsersComponent } from "./pages/Users";
import { UserUpdateComponent } from "./pages/UserUpdate";

function App() {
  const dispatch = useDispatch();
  const { loading } = useAppSelector((state) => state.auth);

  // auto login
  // useEffect(() => {
  //   dispatch(autoLogin());
  // }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<DashBoard />} />

          <Route path="/users" element={<UsersComponent />} />

          <Route path="/user/:id" element={<UserUpdateComponent />} />

          <Route path="/user/create" element={<UserUpdateComponent />} />


          {/* <Route
            path="/auth/reset-password/:token"
            element={<ResetPassword />}
          /> */}
          {/* <Route path="/forgotPassword" element={<ForgotPassword />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <AlertNotification />
    </>
  );
}

export default App;
