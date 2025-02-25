import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Box,
  Alert,
} from "@mui/material";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={6}
        sx={{
          padding: 5,
          marginTop: 5,
          borderRadius: 3,
          background: "linear-gradient(135deg, #ffffff 30%, #f0f4f8 100%)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          color="black"
          fontWeight={600}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Have questions? Fill out the form below and we’ll get back to you!
        </Typography>

        {submitted && (
          <Alert severity="success" sx={{ marginBottom: 2 }}>
            Thank you! We will reach out soon.
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField
            label="Your Name"
            name="name"
            variant="outlined"
            fullWidth
            required
            value={formData.name}
            onChange={handleChange}
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <TextField
            label="Your Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <TextField
            label="Your Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            value={formData.message}
            onChange={handleChange}
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ fontSize: "1rem", padding: "12px", borderRadius: 2 }}
          >
            Send Message
          </Button>
        </Box>

        <Box
          sx={{
            marginTop: 4,
            paddingTop: 3,
            borderTop: "2px solid #ddd",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight={600} color="black">
            For More Enquiries
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 1 }}
          >
            Feel free to contact me via email at{" "}
            <strong>roshan.khadka.u@gmail.com</strong> or call us at
            <strong> +123 456 7890</strong>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
