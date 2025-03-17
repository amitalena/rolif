import { useEffect, useState } from 'react';
import {
    AppBar, Box, Stack, Toolbar, Typography, Drawer, useTheme, MenuItem,
    IconButton,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Close as CloseIcon, MenuRounded as MenuIcon, LogoutOutlined, AccountCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Rolif_img from '../assets/images/logo/rolif.png'
import TopBar from './TopBar';
import { menuData } from './menuData';
import AccordionMenu from './AccordionMenu';
import DropdownMenu from './DropdownMenu';

const Logo = () => (
    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ height: 40, display: { md: 'block', xs: 'block', sm: 'none', xl: 'none' }, width: 150 }}>
                <img src={Rolif_img} alt="Rolif Logo" style={{ height: '100%', width: '100%' }} />
            </Box>
        </Link>
    </Typography>
);

// eslint-disable-next-line react/prop-types
const MobileMenu = ({ menuOpen, handleDrawerToggle }) => (
    <Drawer anchor="left" open={menuOpen} onClose={handleDrawerToggle}>
        <Box component={motion.div}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            sx={{ py: 1, height: '100%', width: 250, overflowY: 'auto' }}>
            <AccordionMenu menuData={menuData} onClose={handleDrawerToggle} />
        </Box>
        <MenuItem>
            <LogoutOutlined sx={{ fontSize: 18, color: '#717DA4', mr: 1 }} /> Admin
        </MenuItem>
    </Drawer>
);


// eslint-disable-next-line react/prop-types
const PublicAppBar = ({ isVisible }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolling(window.pageYOffset > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <AppBar
            elevation={0}
            position={scrolling ? "fixed" : "sticky"}
            sx={{
                width: '100%',
                backdropFilter: scrolling ? 'blur(10px)' : 'blur(0px)',
                color: scrolling ? theme.palette.info.deep : theme.palette.info.deep,
                background: scrolling ? '#000' : '#000',
                transition: 'background 0.3s ease',
            }}
        >
            <TopBar isVisible={isVisible} />
            <Toolbar disableGutters>
                <Box sx={{ display: 'flex', width: '100%', px: { lg: 5, }, justifyContent: 'space-between', alignItems: 'center', }}>
                    {/* Logo & Desktop Menu */}
                    <Stack direction="row" alignItems="center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: scrolling ? 1 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Logo />
                        </motion.div>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: 'flex', xl: 'flex' } }}>
                            {menuData.map((menuItem, index) => (
                                <DropdownMenu key={index} items={[menuItem]} />
                            ))}
                        </Box>
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={1}>
                        <IconButton
                            sx={{ display: { xs: "none", sm: "none", md: "none", lg: 'flex', xl: 'flex' }, cursor: "pointer", color: "#dfdfdf" }}
                            onClick={handleLogin}
                        >
                            <AccountCircle sx={{ fontSize: '30px' }} />
                        </IconButton>

                        <IconButton
                            variant='none'
                            sx={{
                                display: { xl: "none", lg: "none", md: "flex", sm: 'flex', xs: 'flex' }, // Hidden on sm & below
                                cursor: "pointer",
                            }}
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            {menuOpen ? <CloseIcon sx={{ color: "#FFF" }} /> : <MenuIcon sx={{ color: "#FFF" }} />}
                        </IconButton>
                    </Stack>
                </Box>

            </Toolbar>

            {/* Mobile Menu Drawer */}
            <MobileMenu menuOpen={menuOpen} handleDrawerToggle={() => setMenuOpen(false)} />
        </AppBar >
    );
};

export default PublicAppBar;