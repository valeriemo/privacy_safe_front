'use client';
import { css } from '@emotion/react';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import Logo from 'components/ui-component/Logo'; // Votre logo personnalisé

export default function LoginPage() {
  // Style
  const LoginFormStyle = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto'
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '100vh'
      }}
    >
      {/* Left Section - Login Form */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Logo />
        </Box>

        {/* Login Form */}
        <Box
          css={LoginFormStyle}
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = {
              email: formData.get('email'),
              password: formData.get('password'),
              remember: formData.get('remember') === 'on'
            };
            console.log(data);
          }}
        >
          <Typography level="h1" variant="h2" mb={2}>
            Sign In
          </Typography>
          <Typography level="body1" variant="h5" mb={4}>
            Sign in to stay connected.
          </Typography>

          <FormControl required sx={{ display: 'flex', flexDirection: 'column' }}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl required sx={{ mt: 2 }}>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" placeholder="Enter your password" />
          </FormControl>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 2
            }}
          >
            <Checkbox name="remember" label="Remember me" />
            <Link href="#" level="body2">
              Forgot password?
            </Link>
          </Box>
          <Button type="submit" sx={{ mt: 3 }}>
            Login
          </Button>
        </Box>

        {/* Footer */}
        <Divider sx={{ my: 4 }} />
        <Typography textAlign="center">
          Don’t have an account?{' '}
          <Link href="/register" level="body2">
            Click here to sign up
          </Link>
        </Typography>
      </Box>

      {/* Right Section - Background */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: { xs: 'none', md: 'block' },
          backgroundImage: 'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </Box>
  );
}
