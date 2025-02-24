import { Container, Link } from "@mui/material";
import Drawers from "./Drawers.tsx";

export default function Navbar() {
    return (
        <Container
            maxWidth={false}
            sx={{
                display: "flex",
                position: "sticky",
                top: 0,
                width: "100%",
                height: "3em",
                borderBottom: 1,
                borderColor: "divider",
                ".drawer": {
                    // drawer.tsx
                    position: "absolute",
                    left: 0,
                    top: "0.2em",
                },
                ".home": {
                    margin: "auto",
                },
                backgroundColor: "#fff",
            }}
        >
            <Drawers />
            <Link className="home" sx={{ typography: "body1" }} href="/" underline="none">
                Jindorry
            </Link>
        </Container>
    );
}
