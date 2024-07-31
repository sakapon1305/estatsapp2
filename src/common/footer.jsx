import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

//import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

export default function footer() {
  return (
    <Box sx={{ flexGrow: 0, mt: "auto", width: "100%", position: "" }}>
      <AppBar component="footer" position="static" bottom="10px">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ◼︎参考サイト
        </Typography>
        <Toolbar>
          <List component="nav" sx={{ flexGrow: 1 }}>
            <ListItemText>
              ・<a href="https://reactjs.org">e-statsの公式サイト</a>
            </ListItemText>
            <ListItemText>
              ・<a href="https://reactjs.org">Reactについて</a>
            </ListItemText>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
