import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavigationPagesLabels } from "../../utils/navigationPages.enum";

export const Header: React.FC = () => {
  const navigation = useLocation();
  const [value, setValue] = useState<String>("");
  useEffect(() => {
    setValue(NavigationPagesLabels[navigation.pathname.split("/")[1]]);
  }, [navigation]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar style={{ padding: "0px" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {value}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
