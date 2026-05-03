
import { Home } from "@/page/Home";
import { LoginPage } from "../page/login";
import { SignupPage } from "../page/signup";
import { ALL_ROUTES } from "./constants";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";
import { Layout } from "@/Layout";
import { AddPost } from "@/page/AddPost";
import { Profile } from "@/page/Profile";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export const RouteConfig = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path={ALL_ROUTES.LOGIN} element={<LoginPage />} />
                <Route path={ALL_ROUTES.SIGNUP} element={<SignupPage />} />
                <Route element={<PrivateRoute />}>
                    <Route element={<Layout />}>
                        <Route path={ALL_ROUTES.HOME} element={<Home />} />
                        <Route path={ALL_ROUTES.ADDPOST} element={<AddPost />} />
                        <Route path={ALL_ROUTES.PROFILE} element={<Profile />} />
                    </Route>
                </Route>
                <Route path="*" element={<LoginPage />} />
            </Routes>
        </Provider>

    )
}