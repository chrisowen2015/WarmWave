'use client';

import { Collections, DesignServices, Home, Info, PeopleAlt, Piano, Email } from '@mui/icons-material';
import {
    Box,
    Stack,
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
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useState, useEffect, Fragment } from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { useRouter } from 'next/navigation';


const drawerItems = [
    {
        name: "Home",
        icon: <Home />,
        url: "/",

    },
    {
        name: "Gallery",
        icon: <Collections />,
        url: "/#gallery",

    },
    {
        name: "Gear",
        icon: <Piano />,
        url: "/#gear",

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
        name: "About",
        icon: <Info />,
        url: "/#about",

    },
    {
        name: "Contact Us",
        icon: <Email />,
        url: "/#contact",

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
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDrawer = (open) => (event) => {
        setOpen(open);
    };

    const closeDrawerAndNavigate = (route) => {
        //setOpen(false);
        
        router.replace(route);
    }

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
        )
    }

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)} >
            <List>
                {drawerItems.map((drawerItem, index) => (
                    <Paper key={drawerItem.name} id={drawerItem.name}>
                        <ListItem key={drawerItem.name} disablePadding>
                            <ListItemButton href={drawerItem.url}>
                                <ListItemIcon>
                                    {drawerItem.icon}
                                </ListItemIcon>
                                <ListItemText primary={drawerItem.name} />
                            </ListItemButton>
                        </ListItem>
                        {
                            index === 3 && <Divider />
                        }
                    </Paper>
                ))}
            </List>
        </Box>
    );

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    return (
        <>
            {/* This is the Mobile AppBar which displays the Menu button to control the side drawer state, logo, & site title */}
            <Box sx={{
                position: isSticky ? "fixed" : "absolute",
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: "100%",
                padding: "10px 10px 10px 10px",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                zIndex: 1000
            }}>

                <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer(!open)}
                    sx={{ marginRight: 1, }}>
                    <MenuIcon />
                </IconButton >

                <Logo size={50} />

                <Typography sx={{ flexGrow: 1, marginLeft: 1 }} component="h5" variant="h5">
                    Warm Wave Studio
                </Typography>
            </Box>

            {/* This is the side drawer which displays the navigation links */}

            <SwipeableDrawer
                anchor={'left'}
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <DrawerHeader sx={{ width: '100%' }}>
                    <IconButton onClick={toggleDrawer(false)} sx={{ width: '100%' }} >
                        <Logo size={40} />
                        <Typography sx={{ flexGrow: 1 }} color="primary">
                            Warm Wave Studio
                        </Typography>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {list('left')}
            </SwipeableDrawer>
            {children}
        </>
    )
}