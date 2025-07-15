import { Outlet } from "react-router-dom";
import Header from "@/components/header";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

export const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />

            <Container>
                <main className="flex-grow">
                    <Outlet />
                </main>
            </Container>

            <Footer />
        </div>
    );
};
