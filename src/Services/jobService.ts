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
  id: number;
  job_post: number;
  applicant: number;
  cover_letter: string;
  resume: string;
  status: string;
  applied_at: string;
  updated_at: string;
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

export const applyToJob = async (jobId: number, coverLetter: string, resume: File): Promise<JobApplication> => {
  const formData = new FormData();
  formData.append('job_post', jobId.toString());
  formData.append('cover_letter', coverLetter);
  formData.append('resume', resume);

  try {
    const response = await axios.post<JobApplication>(`${API_BASE_URL}apply/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error applying to job:', error);
    throw error;
  }
};