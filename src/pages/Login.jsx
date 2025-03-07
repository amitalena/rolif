import { useState } from "react";
import {
    Box, Button, Card, CardContent, InputAdornment, IconButton,
    Grid, TextField, Typography, useTheme, Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EmailOutlined, LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
    const theme = useTheme();
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
            <Box sx={{ background: theme.palette.primary.main, width: '100%' }}>
                <Grid container justifyContent="center" alignItems="center" height="100vh" width="100vw">
                    <Grid item xs={12} sm={8} md={4} lg={3} xl={3}>
                        <Card sx={{ borderRadius: 2, p: 3, textAlign: "center" }}>
                            <CardContent>
                                <Box component="form" onSubmit={formik.handleSubmit}>
                                    <Typography variant="h6" my={2} textAlign={'center'}>Admin Login</Typography>
                                    <TextField
                                        {...formik.getFieldProps("email")}
                                        sx={{ border: '1px solid #E96300' }}
                                        placeholder="Email"
                                        fullWidth
                                        margin="normal"
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        InputProps={{ startAdornment: <InputAdornment position="start"><EmailOutlined /></InputAdornment> }}
                                    />

                                    <TextField
                                        {...formik.getFieldProps("password")}
                                        placeholder="Password"
                                        sx={{ border: '1px solid #E96300' }}
                                        fullWidth
                                        margin="normal"
                                        type={showPassword ? "text" : "password"}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><LockOutlined /></InputAdornment>,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton size="small" onClick={togglePasswordVisibility}>
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <Divider sx={{ my: 1 }} />
                                    <Box sx={{ float: 'left' }}>
                                        <Button type="submit" variant="contained">Log In</Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Login;
