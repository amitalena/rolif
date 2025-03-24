import { useState } from "react";
import { Remove, Add } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "../assets/images/logo/rolif.png";
import { menuData } from "./menuData";



// eslint-disable-next-line react/prop-types
const AccordionMenu = ({ onClose }) => {
    const theme = useTheme();
    const [openMenus, setOpenMenus] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = (index) => {
        setOpenMenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const handleNavigation = (route) => {
        if (route) {
            navigate(route);
            onClose?.();
        }
    };

    const renderMenu = (menu, index) => (
        <Box key={index}>
            {/* Top-Level Menu Item */}
            <Box
                sx={{ py: 1, px: 2 }}
                onClick={() => {
                    if (!menu.subMenu) handleNavigation(menu.route); // Navigate if no subMenu
                }}
            >
                <Stack
                    direction="row"
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                    onClick={() => menu && toggleMenu(index)}
                >
                    {/* Icon and Menu Name */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {menu.icon && (
                            <span style={{ marginRight: "8px" }}>{menu.icon}</span>
                        )}
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {menu.name}
                        </Typography>
                    </Box>

                    {/* Expand/Collapse Icon */}
                    {menu.subMenu && (
                        openMenus[index] ? (
                            <Remove style={{ fontSize: "16px", color: "#555" }} />
                        ) : (
                            <Add style={{ fontSize: "16px", color: "#555" }} />
                        )
                    )}
                </Stack>

                {/* Submenu Items */}
                {menu.subMenu && openMenus[index] && (
                    <Box sx={{ width: "100%", pl: 1 }} onClick={() => {
                        handleNavigation(menu.subMenu.route); // Navigate if no subMenu
                    }}>
                        {menu.subMenu.map((subMenu, subIndex) =>
                            renderMenu(subMenu, `${index}-${subIndex}`)
                        )}
                    </Box>
                )}
            </Box>
        </Box>
    );

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",

                flexDirection: "column",
                height: "100%",
            }}
        >
            {/* Header Section with Logo  */}
            <Box
                sx={{

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,
                    borderBottom: "1px solid #ddd",
                }}
            >
                {/* Logo */}
                <Box sx={{ m: 1, height: '50px' }}>
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{ height: "100%", width: "auto" }}
                    />
                </Box>
            </Box>

            {/* Menu Items */}
            <Box sx={{ flexGrow: 1, background: theme.palette.primary.main, overflowY: "auto", }}>
                {menuData.map((menu, index) => renderMenu(menu, index))}
            </Box>
        </Box>
    );
};

export default AccordionMenu;