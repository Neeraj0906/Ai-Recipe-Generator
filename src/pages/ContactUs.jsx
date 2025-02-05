import React from 'react';
import { motion } from 'framer-motion';
import { Container, Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import { Mail, Phone, GitHub, LinkedIn } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  const contactInfo = [
    { icon: <Mail />, label: 'Email', value: 'eng20cs0301.neeraj@gmail.com', link: 'mailto:eng20cs0301.neeraj@gmail.com' },
    { icon: <Phone />, label: 'Phone', value: '6382561931', link: 'tel:6382561931' },
    { icon: <LinkedIn />, label: 'LinkedIn', value: 'Neeraj Subramani', link: 'https://www.linkedin.com/in/neeraj-s-a06151203' },
    { icon: <GitHub />, label: 'GitHub', value: 'Neeraj0906', link: 'https://github.com/Neeraj0906' },
  ];

  return (
    <div className="content-wrapper" style={{ padding: '30px' }}>
      <Container>
        {/* Animated Header with Gradient Effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: '3rem',
              fontWeight: '700',
              background: 'linear-gradient(45deg, #FF6F61, #1976D2)', // Gradient from Coral to Blue
              WebkitBackgroundClip: 'text', // Clip the gradient to text
              color: 'transparent', // Make the text color transparent to show the gradient
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            Get in Touch
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Card elevation={5} className="p-4" sx={{ backgroundColor: '#f3f4f6', borderRadius: '10px' }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
                    Contact Information
                  </Typography>

                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center mb-3 text-decoration-none text-dark"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <IconButton
                        color="primary"
                        sx={{
                          backgroundColor: '#1976d2',
                          color: 'white',
                          '&:hover': { backgroundColor: '#1565c0' },
                          marginRight: '15px',
                          borderRadius: '50%',
                          padding: '10px',
                        }}
                      >
                        {info.icon}
                      </IconButton>
                      <div>
                        <Typography variant="body2" color="textSecondary" sx={{ fontWeight: '500' }}>
                          {info.label}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                          {info.value}
                        </Typography>
                      </div>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactUs;
