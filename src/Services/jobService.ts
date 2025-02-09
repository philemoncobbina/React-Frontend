// jobService.ts
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api/api/';

export interface JobPost {
  id: number;
  reference_number: string | null;
  title: string;
  description: string;
  requirements: string;
  location: string;
  salary_range: string;
  status: 'DRAFT' | 'SCHEDULED' | 'PUBLISHED';
  created_by: number | null;
  created_by_email: string | null;
  created_at: string;
  updated_at: string;
  scheduled_date: string | null;
  published_date: string | null;
}

export interface JobApplication {
  id: number; // Unique identifier for the job application
  job_post: number; // ID of the related JobPost
  resume: string; // URL or path to the resume file
  status: string; // Application status (e.g., 'PENDING', 'SHORTLISTED', etc.)
  applied_at: string; // Timestamp when the application was submitted
  updated_at: string; // Timestamp when the application was last updated
  job_title: string; // Title of the related JobPost
  job_reference_number: string; // Reference number of the related JobPost
  first_name: string; // First name of the applicant
  last_name: string; // Last name of the applicant
  email: string; // Email of the applicant
  educational_level: 'HIGH_SCHOOL' | 'ASSOCIATE' | 'BACHELOR' | 'MASTER' | 'PHD'; // Educational level of the applicant
}

export const fetchPublishedJobs = async (): Promise<JobPost[]> => {
  try {
    const response = await axios.get<JobPost[]>(`${API_BASE_URL}jobposts/list_published_posts/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching job posts:', error);
    throw error;
  }
};

export const fetchJobDetails = async (jobId: number): Promise<JobPost> => {
  try {
    const response = await axios.get<JobPost>(`${API_BASE_URL}jobposts/${jobId}/get_published_post/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching job details:', error);
    throw error;
  }
};

export const applyToJob = async (
  jobId: number,
  formData: {
    first_name: string;
    last_name: string;
    email: string;
    educational_level: string;
    resume: File;
  }
): Promise<JobApplication> => {
  const data = new FormData();
  data.append('job_post', jobId.toString()); // ID of the JobPost
  data.append('first_name', formData.first_name); // First name of the applicant
  data.append('last_name', formData.last_name); // Last name of the applicant
  data.append('email', formData.email); // Email of the applicant
  data.append('educational_level', formData.educational_level); // Educational level of the applicant
  data.append('resume', formData.resume); // Resume file

  try {
    const response = await axios.post<JobApplication>(
      `http://127.0.0.1:8000/api/apply/`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data', // Required for file uploads
        },
      }
    );
    return response.data; // Returns the created JobApplication object
  } catch (error) {
    console.error('Error applying to job:', error);
    throw error; // Re-throw the error for handling in the calling component
  }
};