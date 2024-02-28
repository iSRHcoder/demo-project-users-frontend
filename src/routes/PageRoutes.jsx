import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import route from "./route.json";
import MainLayout from "./../layouts/MainLayout";
import HomePage from "./../pages/HomePage";
import UsersFormPage from "../pages/UsersFormPage";
import UsersFromDBPage from "../pages/UsersFromDBPage";
import UpdateUser from "../pages/UpdateUser";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={route.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={route.USERS_FORM} element={<UsersFormPage />} />
          <Route path={route.USERS_FROM_DB} element={<UsersFromDBPage />}>
            <Route index element={<UsersFromDBPage />} />
          </Route>
          <Route path={`/users-from-db/:uId`} element={<UpdateUser />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
