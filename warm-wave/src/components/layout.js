import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Typography, Box, Stack } from '@mui/material';
import React from 'react';

export const siteTitle = 'Warm Wave Studios';

export default function Layout({ children, home }) {
    const [darkMode, setDarkMode] = React.useState(false);
    return (
        <div>
            <Head>
                <meta name="og:title" content={siteTitle} />
                <title>Warmer Wave Studios</title>
            </Head>
            <header>
                <Box sx={{
                    position: "fixed",
                    width: "100%",
                    padding: "10px 10px 10px 10px",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    zIndex: 1000
                }}>
                    <div>
                        <Stack direction="row" spacing={4} style={{ justifyContent: "center", alignItems: "center" }}>
                            <Typography style={{ fontFamily: "Oswald, Arial, Helvetica, sans-serif; !important" }}>
                                <Link color="inherit" href="/" >
                                    Home
                                </Link>
                            </Typography>
                            <Typography>
                                <Link href="#about">
                                    About
                                </Link>
                            </Typography>
                            <Typography>
                                <Link href="#gallery">
                                    Gallery
                                </Link>
                            </Typography>
                            <Typography>
                                <Link href="/team">
                                    Our Team
                                </Link>
                            </Typography>

                            <Image
                                priority
                                src="/images/WarmWaveRecords-logo.png"
                                height={80}
                                width={80}
                                alt="FMC"
                                title="FMC"
                            />
                            <Typography>
                                <Link href="#gear">
                                    Gear
                                </Link>
                            </Typography>
                            <Typography>
                                <Link href="/news">
                                    News
                                </Link>
                            </Typography>
                            <Typography>
                                <Link href="#contact">
                                    Contact
                                </Link>
                            </Typography>
                        </Stack>
                    </div>
                </Box>
            </header>
            <main>{children}</main>
        </div>
    );
}