import { Route, Routes, BrowserRouter } from "react-router-dom";

import SignIn from "./SignIn";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={SignIn} path="/signin" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
