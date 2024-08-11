"use client";

import {
  Collections,
  DesignServices,
  Home,
  Info,
  PeopleAlt,
  Piano,
  Email,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  IconButton,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Headphones from "@mui/icons-material/Headphones";

import { useRouter } from "next/navigation";

const drawerItems = [
  {
    name: "Home",
    icon: <Home />,
    url: "/",
  },
  {
    name: "Gallery",
    icon: <Collections />,
    url: "/gallery",
    id: "gallery-mobile",
  },
  {
    name: "Gear",
    icon: <Piano />,
    url: "/gear",
  },
  {
    name: "Services",
    icon: <DesignServices />,
    url: "/services",
  },
  {
    name: "Our Team",
    icon: <PeopleAlt />,
    url: "/team",
  },
  {
    name: "Listen",
    icon: <Headphones />,
    url: "https://open.spotify.com/playlist/58keIOTiefU8JgKFLtKEcb?si=jCEk9WOIRXecZd3y9yYcmA",
  },
  {
    name: "About",
    icon: <Info />,
    url: "/about",
    id: "about-mobile",
  },
  {
    name: "Contact Us",
    icon: <Email />,
    url: "/contact",
    id: "contact-mobile",
  },
];

export default function MobileLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  var prevScrollPos = 0;

  const handleScroll = async () => {
    const currentScrollPos = window.scrollY;
    const isScrolledUp = currentScrollPos < prevScrollPos;

    setIsSticky(isScrolledUp);
    prevScrollPos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  const onNavClick = (event, id, url) => {
    event.preventDefault();

    if (id) {
      router.replace(url);
      router.refresh();
      setOpen(false);
    } else {
      router.push(url);
      setOpen(false);
    }
  };

  const Logo = ({ size }) => {
    return (
      <Image
        priority
        src="/images/WarmWaveRecords-logo.png"
        height={size}
        width={size}
        alt="Warm Wave"
        title="Warm Wave"
      />
    );
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <>
      {/* This is the Mobile AppBar which displays the Menu button to control the side drawer state, logo, & site title */}
      <Box
        sx={{
          position: isSticky ? "fixed" : "absolute",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          padding: "10px 10px 10px 10px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1000,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(!open)}
        >
          <MenuIcon sx={{fontSize: "32px"}}/>
        </IconButton>

        <IconButton href="/" disableRipple>
          <Logo size={50} />

          <Typography
            color="textPrimary"
            fontWeight={600}
            component="h4"
            variant="h4"
            sx={{ flexGrow: 1, marginLeft: 2 }}
          >
            Warm Wave Studio
          </Typography>
        </IconButton>
      </Box>

      {/* This is the side drawer which displays the navigation links */}

      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={true}
        disableDiscovery={true}
      >
        <DrawerHeader sx={{ width: "100%", height: "76px" }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ width: "100%" }}>
            <Logo size={40} />
            <Typography fontWeight={600} sx={{ flexGrow: 1 }} color="primary">
              Warm Wave Studio
            </Typography>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Box sx={{ width: 250 }} onKeyDown={toggleDrawer(false)}>
          <List>
            {drawerItems.map((drawerItem, index) => (
              <Paper key={drawerItem.name} id={drawerItem.name}>
                <ListItem key={drawerItem.name} disablePadding>
                  <ListItemButton
                    onClick={(event) =>
                      onNavClick(event, drawerItem.id, drawerItem.url)
                    }
                  >
                    <ListItemIcon>{drawerItem.icon}</ListItemIcon>
                    <ListItemText
                      primary={drawerItem.name}
                      primaryTypographyProps={{
                        fontWeight: 600,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                {index === 3 && <Divider />}
              </Paper>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
      {children}
    </>
  );
}
