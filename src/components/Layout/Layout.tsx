import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { BottomBar } from "../BottomBar/BottomBar";
import { Header } from "../Header/Header";
import { BookCard } from "../BookCard/BookCard";

export const Layout: React.FC = () => {
  return (
    <Grid container direction="column" style={{ height: "100vh" }}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item xs sx={{ overflow: "auto", bgcolor: "#333" }}>
        <Container
          sx={{
            minHeight: "100%",
            bgcolor: "#333",
            gridTemplateRows: "auto 1fr auto",
          }}
        >
          <BookCard
            img="https://covers.openlibrary.org/b/id/916570.jpg"
            title="Title"
            description="Test Desc"
          />
          <Outlet />
        </Container>
      </Grid>
      <Grid item>
        <BottomBar />
      </Grid>
    </Grid>
  );
};
