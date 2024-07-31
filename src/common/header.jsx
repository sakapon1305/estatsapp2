import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            React Sample ver1.0
          </Typography>
          {/* <AccountCircleOutlinedIcon /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
