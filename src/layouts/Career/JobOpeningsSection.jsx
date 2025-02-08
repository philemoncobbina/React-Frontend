import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPublishedJobs } from '../../Services/jobService';

const JobOpeningsSection = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchPublishedJobs();

        // Sort jobs by published_date (newest first)
        const sortedJobs = data.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));

        setJobs(sortedJobs);
      } catch (err) {
        setError('Failed to load job openings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Remove consecutive hyphens
  };
  
  const handleJobClick = (job) => {
    const slug = generateSlug(job.title);
    navigate(`/vacancy/${job.id}/${slug}`); // URL: /vacancy/14/software-developer
  };
  

  if (loading) {
    return <div className="text-center py-8">Loading job openings...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Current Job Openings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 cursor-pointer"
            onClick={() => handleJobClick(job)}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {job.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {job.location}
            </p>
            <div className="text-sm text-gray-500">
              Published: {new Date(job.published_date).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>

      {jobs.length === 0 && (
        <div className="text-center text-gray-600 py-8">
          No job openings available at the moment.
        </div>
      )}
    </div>
  );
};

export default JobOpeningsSection;
