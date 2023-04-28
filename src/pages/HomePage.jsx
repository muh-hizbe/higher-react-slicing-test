import { NavLink } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { Menu } from "../components/layouts/Menu";
import { LoginForm } from "../components/forms/LoginForm";

export default function HomePage() {
    return (
        <MainLayout>
            <div id="sidebar" className="text-white">
                <LoginForm />
            </div>
        </MainLayout >
    );
}