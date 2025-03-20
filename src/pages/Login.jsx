import { useState } from "react";
import {
    Box, Button, Card, CardContent, InputAdornment, IconButton,
    Grid, TextField, Typography, Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EmailOutlined, LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import Img1 from '../assets/images/banners/banner/quality.avif';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState("");

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
        }),
        onSubmit: (values) => {
            if (role !== "Admin") return toast.error("Only Admins can log in!");

            const response = { success: true, data: { role: "Admin", email: values.email, token: "dummy_token" } };

            if (response.success) {
                localStorage.setItem("adminData", JSON.stringify(response.data));
                toast.success("Login successful!");
                navigate("/");
            } else toast.error("Invalid Credentials");
        },
    });

    return (
        <>
            <ToastContainer position="top-center" autoClose={3000} />
            <Box
                sx={{
                    width: "99.9vw",
                    height: "97.5vh",
                    backgroundImage: `url(${Img1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        backdropFilter: 'blur(7px)',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
                            <Card sx={{ borderRadius: '10px', p: 3, textAlign: "center", background: 'transparent', boxShadow: 6, backdropFilter: 'blur(25px)', width: '100%', maxWidth: 400 }}>
                                <CardContent>
                                    <Box component="form" onSubmit={formik.handleSubmit}>
                                        <Typography variant="h5" my={2} textAlign="center" fontWeight="bold">
                                            Admin Login
                                        </Typography>
                                        <TextField
                                            {...formik.getFieldProps("email")}
                                            placeholder="Email"
                                            fullWidth
                                            autoComplete="off"
                                            margin="normal"
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <EmailOutlined />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            sx={{ mb: 2, border: '1px solid #Efefef' }}
                                        />

                                        <TextField
                                            {...formik.getFieldProps("password")}
                                            placeholder="Password"
                                            fullWidth
                                            autoComplete="off"
                                            margin="normal"
                                            type={showPassword ? "text" : "password"}
                                            error={formik.touched.password && Boolean(formik.errors.password)}
                                            helperText={formik.touched.password && formik.errors.password}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LockOutlined />
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton size="small" onClick={togglePasswordVisibility}>
                                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            sx={{ mb: 2, border: '1px solid #Efefef' }}
                                        />
                                        <Divider sx={{ my: 2 }} />
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            sx={{ py: 1, fontWeight: 'bold' }}
                                        >
                                            Log In
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default Login;