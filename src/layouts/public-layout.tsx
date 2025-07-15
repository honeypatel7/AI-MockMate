import { Outlet } from "react-router-dom";
import Header from "@/components/header";

import AuthHanlder from "@/handlers/auth-handler";
import { Footer } from "@/components/footer";

export const PublicLayout = () => {
    return (
        <div className="w-full">

            <AuthHanlder />
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
};
