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
  resume: string;
  status: string;
  applied_at: string;
  updated_at: string;
  job_title: string;
  job_reference_number: string;
  first_name: string;
  last_name: string;
  email: string;
  educational_level: 'HIGH_SCHOOL' | 'ASSOCIATE' | 'BACHELOR' | 'MASTER' | 'PHD';
}

type ApplicationFormData = {
  first_name: string;
  last_name: string;
  email: string;
  educational_level: string;
  resume: File;
}

export const fetchPublishedJobs = async (): Promise<JobPost[]> => {
  const { data } = await axios.get<JobPost[]>(`${API_BASE_URL}jobposts/list_published_posts/`);
  return data;
};

export const fetchJobDetails = async (jobId: number): Promise<JobPost> => {
  const { data } = await axios.get<JobPost>(`${API_BASE_URL}jobposts/${jobId}/get_published_post/`);
  return data;
};

export const applyToJob = async (jobId: number, formData: ApplicationFormData): Promise<JobApplication> => {
  const data = new FormData();
  data.append('job_post', jobId.toString());
  Object.entries(formData).forEach(([key, value]) => data.append(key, value));

  const { data: responseData } = await axios.post<JobApplication>(
    `http://127.0.0.1:8000/api/apply/`,
    data,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return responseData;
};