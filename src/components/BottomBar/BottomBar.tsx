import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavigationPages } from "../../utils/navigationPages.enum";

export const BottomBar = () => {
  const navigate = useNavigate();
  const navigation = useLocation();
  const [value, setValue] = useState<String>();
  useEffect(() => {
    setValue(navigation.pathname.split("/")[1]);
  }, [navigation]);
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(_, value) => {
        navigate(value);
      }}
    >
      <BottomNavigationAction
        value={`${NavigationPages["book-list"]}`}
        label="Book list"
      />
      <BottomNavigationAction
        value={`${NavigationPages["feed"]}`}
        label="Feed"
      />
      <BottomNavigationAction
        value={`${NavigationPages["profile"]}`}
        label="Profile"
      />
    </BottomNavigation>
  );
};
