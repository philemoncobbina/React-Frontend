import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import ChangePasswordPage from './Pages/ChangePasswordPage';
import ForgetPassword from './Pages/ForgetPassword';
import TeamPostPage from './Pages/TeamPostPage';
import AdmissionPage from './Pages/AdmissionPage';
import BlogPage from './Pages/BlogPage';
import BlogPostPage from './Pages/BlogPostPage';
import ContactPage from './Pages/ContactPage';
import ReservationPage from './Pages/ReservationPage';
import Application from './Pages/Application';
import CareerPage from './Pages/CareerPage';
import DashboardPage from './Pages/DashboardPage';
import EditAdmission from './layouts/AdmissionReview/EditAdmission';
import RaiseTicketPage from './Pages/RaiseTicketPage';
import JobDetailspage from './Pages/JobDetailspage';
import JobApplicationpage from './Pages/JobApplicationpage';
import JobVacancyPage from './Pages/JobVacancyPage';

import { RequireAuth, AuthProvider, AuthModalWrapper } from './Services/RequireAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/careers',
    element: <CareerPage />,
  },
  {
    path: '/careers/vacancy',
    element: <JobVacancyPage />,
  },
  {
    path: '/careers/vacancy/:jobId/:jobSlug',
    element: <JobDetailspage />,
  },
  {
    path: '/careers/vacancy/:jobId/:jobSlug/apply',
    element: <JobApplicationpage />,
  },
  {
    path: '/contact/raiseticket',
    element: <RaiseTicketPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/changepassword',
    element: <ChangePasswordPage />,
  },
  {
    path: '/forgetpassword',
    element: <ForgetPassword />,
  },
  {
    path: '/about/:id',
    element: <TeamPostPage />,
  },
  {
    path: '/admission',
    element: <AdmissionPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/:id',
    element: <BlogPostPage />,
  },
  {
    path: '/admission/apply',
    element: (
      <RequireAuth>
        <Application />
      </RequireAuth>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <RequireAuth>
        <DashboardPage />
      </RequireAuth>
    ),
  },
  {
    path: '/admission/edit/:id',
    element: (
      <RequireAuth>
        <EditAdmission />
      </RequireAuth>
    ),
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/contact/reservation',
    element: <ReservationPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* Wrap the app with HelmetProvider */}
      <AuthProvider> {/* Wrap the app with AuthProvider */}
        <RouterProvider router={router} />
        <AuthModalWrapper /> {/* Render the AuthModalWrapper at the root level */}
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
