/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Modal, TextField, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const EnquiryForm = ({ onSubmit, onClose, open }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Pass form data to parent component
        setFormData({ name: "", email: "", mobile: "", message: "" }); // Reset form
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "90%", sm: "400px" },
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                {/* Modal Header */}

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                    <Typography variant="h6" sx={{ background: '#f1fdfd', p: 2, width: '100%' }}>Product Enquiry</Typography>
                    <IconButton size="small" onClick={onClose} aria-placeholder="close">
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box >
                    <Typography variant="body2">We are happy to see your interest in our product. Please fill the form below & our team will reach out to you shortly.</Typography>
                </Box>
                {/* Enquiry Form */}
                <form onSubmit={handleSubmit}>
                    <TextField
                        sx={{ border: '1px solid #9e9e9e' }}
                        fullWidth
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        sx={{ border: '1px solid #9e9e9e' }}
                        fullWidth
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        sx={{ border: '1px solid #9e9e9e' }}
                        fullWidth
                        placeholder="Mobile Number"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        sx={{ border: '1px solid #9e9e9e' }}
                        fullWidth
                        placeholder="Enquiry Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        margin="normal"
                        multiline
                        rows={4}
                        required
                    />
                    <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                        <Button type="submit" variant="contained" color="primary">
                            Send
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default EnquiryForm;