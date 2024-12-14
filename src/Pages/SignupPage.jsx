import React from 'react'
import SignupForm from '@/layouts/Signup/SignupForm'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const SignupPage = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <SignupForm />
    </GoogleOAuthProvider>
  )
}

export default SignupPage
