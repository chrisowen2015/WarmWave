import {Box, Drawer} from '@mui/material';

export default function MobileLayout(){
    const drawerItems = [
        {
            name: "Home",
            icon: "",
            url: "/",
            
        },
        {
            name: "About",
            icon: "",
            url: "/#about",
            
        },
        {
            name: "Gallery",
            icon: "",
            url: "/#gallery",
            
        },
        {
            name: "Our Team",
            icon: "",
            url: "/team",
            
        },
        {
            name: "Gear",
            icon: "",
            url: "/#gear",
            
        },
        {
            name: "Services",
            icon: "",
            url: "/services",
            
        },
        {
            name: "Contact Us",
            icon: "",
            url: "/#contact",
            
        },
    ]
    
    
    return (
        <>
            <Drawer>

            </Drawer>
        
        </>
    )
}