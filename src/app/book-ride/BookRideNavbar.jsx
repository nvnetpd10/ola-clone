"use client";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { useState } from "react";
import { deepOrange } from "@mui/material/colors";
import { drawerList } from "./DrawerList";

const BookRideNavbar = () => {
    const [sidebarOpen , setSidebarOpen]=useState(false);
    const handleSidebarClose =()=>setSidebarOpen(false);
    const handleSideBarOpen =()=>setSidebarOpen(true);
    /*const router = useRouter();
    const dispatch = useDispatch();
    const {auth} = useSelector((store) => store);
    const jwt =localStorage.getItem('jwt');
    */
  return (
    <Box className="">
      <AppBar
        sx={{ backgroundColor: "#120E43" }}
        className=""
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSideBarOpen}
          >
            <MenuIcon /*onClick={handleSideBarOpen}*/ />
          </IconButton>
          <Typography varient="h6" component="div" sx={{ flexGrow: 1 }}>
            Zosh Cab
          </Typography>
          {true ? (
            <Avatar
              className="cursor-pointer"
              onClick={() => router.push("/profile")}
              sx={{ bgcolor: deepOrange[500] }}
            >
              A
            </Avatar>
          ) : (
            <Button onClick={() => router.push("login")} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={sidebarOpen} onClose={handleSidebarClose}>
            {drawerList('left')}
        </Drawer>
    </Box>
  );
};

export default BookRideNavbar;
/* {auth.user?.fullName? auth.user?.fullName[0] : auth.user?.name? auth.user?.name[0] : ''}
auth.user?.fullName || auth.user?.name?

*/
