import React from 'react';
import LoginForm from '@/layouts/Login/LoginForm';
import { GoogleOAuthProvider } from '@react-oauth/google';

const LoginPage = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <LoginForm />
    </GoogleOAuthProvider>
  );
}

export default LoginPage;
