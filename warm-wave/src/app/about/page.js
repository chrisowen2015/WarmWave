import { Box } from "@mui/material"
import About from "@/components/Homepage/about"
import MobileAbout from "@/components/Mobile/Homepage/about"
import Spacer from "@/components/spacer"

export default function AboutPage() {
    return (
        <>
            <Box sx={{
                display: {
                    xs: 'block',
                    sm: 'block',
                    md: 'none',
                    lg: 'none',
                    xl: 'none',
                }
            }}>
                <Spacer height={100} />
                <MobileAbout />
            </Box>
            <Box sx={{
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block',
                    lg: 'block',
                    xl: 'block',
                }
            }}>
                <Spacer height={200} />
                <About />
            </Box>
        </>
    )
}