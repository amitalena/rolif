import { useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowDropDown, ArrowDropUp, KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

// Styled Components
const Dropdown = styled("div")({ position: "relative", display: "block" });
const DropdownContent = styled(motion.div)({
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "#222",
    zIndex: 10,
    minWidth: "170px",
});
const StyledButton = styled('div')(({ active }) => ({
    textTransform: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottom: active ? "3px solid #ff6d00" : "#FFFFFF",
    color: active ? "#ff6d00" : "#FFFFFF",
    "&:hover": { color: "#ff6d00", borderBottom: "3px solid #ff6d00" },
}));

// Framer Motion Variants
const variants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 } };
const nestedVariants = { hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 10 } };

const DropdownMenu = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [nestedIndex, setNestedIndex] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Handle menu item click
    const handleMenuItemClick = (route) => {
        if (route) {
            navigate(route);
        }
        setOpenIndex(null); // Close the dropdown
        setNestedIndex(null); // Close the nested dropdown
    };

    return items?.map((item, index) => (
        <Dropdown
            key={index}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
        >
            <StyledButton
                sx={{ display: "flex", alignItems: "center" }}
                onClick={() => handleMenuItemClick(item.route)}
                active={location.pathname === item.route}
            >
                <Button variant="none">{item.name}</Button>
                {item.subMenu && (openIndex === index ? <ArrowDropUp /> : <ArrowDropDown />)}
            </StyledButton>
            <AnimatePresence>
                {openIndex === index && item.subMenu && (
                    <DropdownContent
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        sx={{ mt: 1 }}
                    >
                        {item.subMenu.map((subItem, subIndex) => (
                            <Dropdown
                                key={subIndex}
                                onMouseEnter={() => setNestedIndex(subIndex)}
                                onMouseLeave={() => setNestedIndex(null)}
                            >
                                <StyledButton
                                    onClick={() => handleMenuItemClick(subItem.route)}
                                    active={location.pathname === subItem.route}
                                >
                                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <Button variant="none">{subItem.name}</Button>
                                    </motion.div>
                                    {subItem.subMenu && (nestedIndex === subIndex ? <KeyboardArrowDown /> : <KeyboardArrowRight />)}
                                </StyledButton>
                                <AnimatePresence>
                                    {nestedIndex === subIndex && subItem.subMenu && (
                                        <DropdownContent
                                            variants={nestedVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            transition={{ duration: 0.3 }}
                                            sx={{ left: "100%", top: 3 }}
                                        >
                                            {subItem.subMenu.map((nestedItem, nestedIndex) => (
                                                <StyledButton
                                                    key={nestedIndex}
                                                    active={location.pathname === nestedItem.route}
                                                    onClick={() => handleMenuItemClick(nestedItem.route)}
                                                >
                                                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                                        <Button variant="none">{nestedItem.name}</Button>
                                                    </motion.div>
                                                </StyledButton>
                                            ))}
                                        </DropdownContent>
                                    )}
                                </AnimatePresence>
                            </Dropdown>
                        ))}
                    </DropdownContent>
                )}
            </AnimatePresence>
        </Dropdown>
    ));
};

export default DropdownMenu;