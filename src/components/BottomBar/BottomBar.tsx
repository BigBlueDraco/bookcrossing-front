import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  NavigationPages,
  NavigationPagesLabels,
} from "../../utils/navigationPages.enum";

export const BottomBar = () => {
  const navigate = useNavigate();
  const navigation = useLocation();
  const [value, setValue] = useState<String>();
  useEffect(() => {
    setValue(navigation.pathname.split("/")[1]);
  }, [navigation]);
  return (
    <Container sx={{ width: "100vw" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, value) => {
          navigate(value);
        }}
      >
        <BottomNavigationAction
          value={`${NavigationPages["book-list"]}`}
          label={NavigationPagesLabels[`${NavigationPages["book-list"]}`]}
        />
        <BottomNavigationAction
          value={`${NavigationPages["feed"]}`}
          label={NavigationPagesLabels[`${NavigationPages["feed"]}`]}
        />
        <BottomNavigationAction
          value={`${NavigationPages["profile"]}`}
          label={NavigationPagesLabels[`${NavigationPages["profile"]}`]}
        />
      </BottomNavigation>
    </Container>
  );
};
