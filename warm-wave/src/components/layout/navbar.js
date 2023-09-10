"use client";
import React from 'react'
import { Box, Typography, Link, Stack, IconButton, Button } from "@mui/material";
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  const [isSticky, setIsSticky] = React.useState(false);
  var prevScrollPos = 0;

  const handleScroll = async () => {
    const currentScrollPos = window.scrollY;
    const isScrolledUp = currentScrollPos < prevScrollPos;

    setIsSticky(isScrolledUp);
    prevScrollPos = currentScrollPos;
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{
      position: isSticky ? "fixed" : "absolute",
      width: "100%",
      padding: "10px 10px 10px 10px",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 1000
    }}>
      <Box sx={{
        display: {
          xs: 'none',
          sm: 'none',
          md: 'block',
          lg: 'block',
          xl: 'block',
        }
      }}>
        <Stack direction="row" spacing={4} style={{ justifyContent: "center", alignItems: "center" }}>
          <Typography>
            <Link color="inherit" underline="hover" href="/" >
              Home
            </Link>
          </Typography>
          <Typography>
            <Link color="inherit" underline="hover" href="/about">
              About
            </Link>
          </Typography>
          <Typography>
            <Link color="inherit" underline="hover" href="/gallery">
              Gallery
            </Link>
          </Typography>
          <Typography>
            <Link color="inherit" underline="hover" href="/team">
              Our Team
            </Link>
          </Typography>

          <Button href="/" sx={{ borderRadius: "50px" }}>
            <Image
              priority
              src="/images/WarmWaveRecords-logo.png"
              height={80}
              width={80}
              alt="Warm Wave"
              title="Warm Wave"
            />
          </Button>

          <Typography>
            <Link color="inherit" underline="hover" href="/gear">
              Gear
            </Link>
          </Typography>
          <Typography>
            <Link color="inherit" underline="hover" href="/services">
              Services
            </Link>
          </Typography>
          <Typography>
            <Link color="inherit" underline="hover" href="/news">
              News
            </Link>
          </Typography>
          <Typography>
            <Link color="inherit" underline="hover" href="/contact">
              Contact
            </Link>
          </Typography>
        </Stack>
      </Box>
      <Box sx={{
        display: {
          xs: 'block',
          sm: 'block',
          md: 'none',
          lg: 'none',
          xl: 'none',
        }
      }}>

      </Box>
    </Box>
  )
}