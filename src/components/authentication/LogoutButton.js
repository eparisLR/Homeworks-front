import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button'
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button variant="contained" color="error" onClick={() => logout({ returnTo: window.location.origin })} startIcon={<LogoutIcon />}>
      Déconnexion
    </Button>
  );
};

export default LogoutButton;