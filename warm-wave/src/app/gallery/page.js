import { Box } from "@mui/material"
import Spacer from "@/components/spacer"
import MobileGallery from "@/components/Mobile/Homepage/gallery"
import Gallery from "@/components/Homepage/gallery"

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
                <MobileGallery />
                <Spacer height={'2em'} />
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
                <Gallery />
            </Box>
        </>
    )
}