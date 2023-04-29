import { MainLayout } from "../components/layouts/MainLayout";
import { LoginForm } from "../components/forms/LoginForm";
import { Grid } from "@mui/material";
import { ImageSlider } from "../components/sliders/ImageSlider";

export default function HomePage() {
    return (
        <MainLayout>
            <Grid container>
                <Grid item xs={0} md={7} lg={7} className="w-0 md:w-[7/12] h-screen flex relative">
                    <ImageSlider />
                </Grid>

                <Grid item xs={12} md={5} lg={5} className="md:bg-black md:p-10 h-screen">
                    <LoginForm />
                </Grid>
            </Grid>
        </MainLayout >
    );
}