import * as React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SVG_DRAWER from "../../assets/svg/drawer";

export default function Drawers() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navItems: { [key: string]: string } = {
    Home: "/",
    About_Me: "/about",
    Notes: "/notes",
    Album: "/album",
    Visitors_Book: "/visitors",
  };

  const navigate = useNavigate();

  const DrawerList = (
    <Box sx={{ width: 150 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {Object.keys(navItems).map((key, _index) => (
          <ListItem key={key} disablePadding>
            <ListItemButton onClick={() => navigate(navItems[key], {})}>
              <ListItemText primary={key.replaceAll("_", " ")} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="drawer">
      <IconButton sx={{ marginLeft: "0.2em" }} onClick={toggleDrawer(true)}>
        <SVG_DRAWER />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
