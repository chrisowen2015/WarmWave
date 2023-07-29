import React from 'react'
import { Box, Divider, Paper, Typography } from '@mui/material'
import Spacer from '@/components/spacer'
import Image from 'next/image';

const services = [
    {
        title: "Audio Recording",
        description: "We offer a wide range of recording services, from single-track vocals to full-band sessions. Our studio is equipped with top-of-the-line microphones, preamps, and converters, and our engineers are experts in capturing the perfect sound.",
        imgSrc: "/images/audio-recording-cropped.jpg",
        id: "audio-recording",
        alt: "Audio Recording Image"
    },
    {
        title: "Audio Mixing & Mastering",
        description: "Our experienced engineers utilize state-of-the-art tools to blend individual tracks seamlessly, achieving a balanced, dynamic, and immersive sound. From there, we take your tracks to the next level with meticulous Audio Mastering, ensuring pristine clarity, optimal loudness, and commercial-grade quality. ",
        imgSrc: "/images/audio-mastering-cropped.jpg",
        id: "audio-mixing-mastering",
        alt: "Audio Mixing & Mastering Image"
    },
    {
        title: "Mixing & Mastering Lessons",
        description: "Our seasoned instructors provide comprehensive guidance on the intricacies of audio mixing and mastering techniques, using industry-standard tools and practices. Whether you're a budding producer or an experienced musician, our tailored lessons empower you to refine your skills, achieve professional-grade sound, and elevate your music to new heights. ",
        imgSrc: "/images/lessons-cropped.jpg",
        id: "mixing-mastering-lessons",
        alt: "Mixing & Mastering Lessons Image"
    },
    {
        title: "Production Session Musicians",
        description: "Whether you need captivating guitar riffs, soulful keyboard melodies, or dynamic drum grooves, our talented team adds a touch of brilliance to every recording. With their extensive experience across genres, they bring versatility and precision to your music, ensuring that every track becomes an extraordinary masterpiece.",
        imgSrc: "/images/session-musicians-cropped.jpg",
        id: "production-session-musicians",
        alt: "Production Session Musicians Image"
    },
];

export default function Services() {

    return (
        <>
            <Spacer height={100} />
            <Spacer height={100} />
            <Box sx={{ width: "100%" }}>
                <Typography variant="h1" component="h1" sx={{ textAlign: "center" }}>
                    Services
                </Typography>
            </Box>

            <Spacer height={50} />

            <Paper sx={{ width: "100%", padding: '2em' }}>
                <Spacer height={25} />
                <Typography variant="h6" component="h6">
                    Our services include hi-fi recording, precise mixing, and masterful mastering.
                    We provide comprehensive support to artists, from songcrafting to sound refinement across genres like indie rock,
                    EDM, and rap. With a dedicated team, top-tier equipment, and an unwavering commitment to excellence,
                    we elevate your artistic vision to new heights. Join us on this transformative journey,
                    where innovation and creativity converge to bring your musical dreams to reality.
                </Typography>

                <Spacer height={50} />
                {
                    services.map((service, index) => (

                        <div id={service.id} key={service.id}>
                            <Box sx={{ display: 'flex', padding: "2em 0 2em 0" }}>
                                <Image src={service.imgSrc} width={600} height={450} alt={service.alt} />
                                <Box sx={{ marginLeft: '2em' }}>
                                    <Typography variant="h4" component="h4">
                                        {service.title}
                                    </Typography>

                                    <Spacer height={25} />

                                    <Typography variant="p" component="p">
                                        {service.description}
                                    </Typography>
                                </Box>
                            </Box>

                            {
                                index !== services.length - 1 && <Divider />
                            }
                        </div>
                    ))
                }

                <Spacer height={25} />
            </Paper>
            <Spacer height={75} />
        </>
    )
}