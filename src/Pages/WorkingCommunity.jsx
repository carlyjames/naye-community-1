import * as React from "react";
import SideNav from "../components/SideNav";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

// new
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CreateIcon from '@mui/icons-material/Create';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ChatIcon from '@mui/icons-material/Chat';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import WorkIcon from '@mui/icons-material/Work';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Diversity3Icon from '@mui/icons-material/Diversity3';

import DrawerAppBar from "../components/Nav1";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function WorkingCommunity() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <DrawerAppBar />
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-12 mt-4 dark:bg-[#0B2A35]  lg:px-4 px-3">
                <div className="sideNav py-2 lg:col-span-3 col-span-4 w-full rounded-lg flex flex-col items-center h-max lg:sticky top-10">
                    <SideNav />
                </div>{" "}
                <CssBaseline />
                <div className="body lg:col-span-8 col-span-5 lg:border  rounded-lg py-3 px-2  sticky top-3 border-solid  border-[#00CDB0] mt-2" style={{ height : '95vh', border : '2px solid #00CDB0' }}>
                </div>
                <div className="">
                <Drawer
                    variant="permanent"
                    open={open}
                    anchor="right"
                    className="bg-red-900"
                >
                    <DrawerHeader
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className="pointer"
                        sx={{
                            marginRight: 1,
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon />
                    </DrawerHeader>
                    <DrawerHeader
                        sx={{
                            marginRight: 0,
                            ...(open === false && { display: "none" }),
                        }}
                    >
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === "ltr" ? (
                                <ChevronRightIcon />
                            ) : (
                                <ChevronLeftIcon />
                            )}
                        </IconButton>
                    </DrawerHeader>

                    <Divider />
                    <List >
                            <ListItem  disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <KeyboardIcon />
                                    </ListItemIcon>
                                    <ListItemText  sx={{ opacity: open ? 1 : 0 }} >Enter</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem  disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <CreateIcon />
                                    </ListItemIcon>
                                    <ListItemText  sx={{ opacity: open ? 1 : 0 }} >Modify</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem  disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <PersonAddIcon />
                                    </ListItemIcon>
                                    <ListItemText  sx={{ opacity: open ? 1 : 0 }} >Invite</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem  disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <ChatIcon />
                                    </ListItemIcon>
                                    <ListItemText  sx={{ opacity: open ? 1 : 0 }} >Discuss</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem  disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <GroupWorkIcon />
                                    </ListItemIcon>
                                    <ListItemText  sx={{ opacity: open ? 1 : 0 }} >Collaborate</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            
                    </List>
                    <Divider />
                    <List>
                            <ListItem  disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                         <WorkIcon /> 
                                    </ListItemIcon>
                                    <ListItemText  sx={{ opacity: open ? 1 : 0 }} >Work</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem  disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                         <BusinessCenterIcon /> 
                                    </ListItemIcon>
                                    <ListItemText  sx={{ opacity: open ? 1 : 0 }} >Collaborate</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem  disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                         <PsychologyIcon /> 
                                    </ListItemIcon>
                                    <ListItemText  sx={{ opacity: open ? 1 : 0 }} >Create</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem  disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                         <ShoppingCartIcon /> 
                                    </ListItemIcon>
                                    <ListItemText  sx={{ opacity: open ? 1 : 0 }} >Buy</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem  disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                         <Diversity3Icon /> 
                                    </ListItemIcon>
                                    <ListItemText  sx={{ opacity: open ? 1 : 0 }} >Pro Space</ListItemText>
                                </ListItemButton>
                            </ListItem>
                    </List>
                </Drawer>
                </div>

            </div>
        </>
    );
}
