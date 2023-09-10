// Will need to be made a client component once functionality is added 
'use client';

import { Box, Button, TextField, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const quoteConstants = [
    {
        subject: 'Audio Recording Quote',
        urlParams: 'audio-recording'
    },
    {
        subject: 'Mixing & Mastering Lessons',
        urlParams: 'mixing-mastering-lessons'
    },
    {
        subject: 'Mixing & Mastering',
        urlParams: 'mixing-mastering'
    },
    {
        subject: 'Production Session Musicians',
        urlParams: 'production-session-musicians'
    }
]




export default function ContactForm() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = React.useState(true);

    const searchParams = useSearchParams();
    const quoteParam = searchParams.get('quote');

    React.useEffect(() => {
        if (quoteParam && quoteParam.length > 0) {
            var subject;

            switch (quoteParam) {
                case quoteConstants[0].urlParams:
                    subject = quoteConstants[0].subject;
                    break;
                case quoteConstants[1].urlParams:
                    subject = quoteConstants[1].subject;
                    break;
                case quoteConstants[2].urlParams:
                    subject = quoteConstants[2].subject;
                    break;
                case quoteConstants[3].urlParams:
                    subject = quoteConstants[3].subject;
                    break;
            }
            setFormData({
                ...formData,
                subject: subject
            })
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [])


    function onChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });

    }

    return (
        <>
            {
                loading ?
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  minHeight: 387 }}>
                        <CircularProgress size={75} />
                    </Box>
                    :
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <TextField label="First Name" value={formData.firstName} onChange={onChange} name="firstName" variant="outlined" sx={{ width: "49%" }} />
                            <TextField label="Last Name" value={formData.lastName} onChange={onChange} name="lastName" variant="outlined" sx={{ width: "49%" }} />
                        </Box>

                        <div style={{ paddingTop: "1em" }}>
                            <TextField label="Email Address" value={formData.emailAddress} onChange={onChange} name="emailAddress" fullWidth variant="outlined" />
                        </div>

                        <div style={{ paddingTop: "1em" }}>
                            <TextField label="Subject" value={formData.subject} onChange={onChange} name="subject" fullWidth variant="outlined" />
                        </div>

                        <div style={{ paddingTop: "1em" }}>
                            <TextField label="Message" value={formData.message} onChange={onChange} name="message" fullWidth variant="outlined" minRows={6} multiline />
                        </div>
                    </Box>
            }
        </>
    );
}