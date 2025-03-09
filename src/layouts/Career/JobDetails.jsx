import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchJobDetails } from '../../Services/jobService';
import { Share2, MapPin, Calendar, Building, History, ExternalLink } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to generate a slug from the job title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Remove consecutive hyphens
  };

  // Function to handle job application click
  const handleJobClick = (job) => {
    const slug = generateSlug(job.title);
    navigate(`/careers/vacancy/${job.id}/${slug}/apply`); // Navigate to the job application page
  };

  // Fetch job details on component mount
  useEffect(() => {
    if (!jobId || isNaN(jobId)) {
      setError('Invalid job ID');
      setLoading(false);
      return;
    }

    const loadJobDetails = async () => {
      try {
        const data = await fetchJobDetails(Number(jobId));
        setJob(data);
      } catch (err) {
        setError('Failed to load job details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadJobDetails();
  }, [jobId]);

  // Function to handle sharing on social media platforms
  const handleShare = (platform) => {
    const url = window.location.href;
    const title = job?.title;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  // Job not found state
  if (!job) {
    return <div className="text-center py-8">Job not found.</div>;
  }

  // Share options for the popover
  const shareOptions = [
    { platform: 'linkedin', label: 'LinkedIn' },
    { platform: 'twitter', label: 'Twitter' },
    { platform: 'facebook', label: 'Facebook' },
    { platform: 'whatsapp', label: 'WhatsApp' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Left Column - 75% */}
        <div className="md:w-3/5">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{job.title}</h1>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>{job.published_date ? new Date(job.published_date).toLocaleDateString() : 'Not published'}</span>
            </div>
          </div>

          <button
            onClick={() => handleJobClick(job)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2 mb-8"
          >
            Apply Now
            <ExternalLink className="w-4 h-4" />
          </button>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Description</h2>
              <div className="text-gray-700 whitespace-pre-line">{job.description}</div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Requirements</h2>
              <div className="text-gray-700 whitespace-pre-line">{job.requirements}</div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Salary Range</h2>
              <p className="text-gray-700">{job.salary_range}</p>
            </div>
          </div>
        </div>

        {/* Right Column - 25% */}
        <div className="md:w-2/5">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-end mb-6">
              <Popover>
                <PopoverTrigger className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Share2 className="w-5 h-5" />
                  Share
                </PopoverTrigger>
                <PopoverContent className="w-44 p-1.5">
                  <div className="flex flex-col">
                    {shareOptions.map(({ platform, label }) => (
                      <button
                        key={platform}
                        onClick={() => handleShare(platform)}
                        className="w-full px-3 py-2 text-sm text-gray-700 text-left hover:bg-gray-50 rounded-md transition-colors duration-150"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div style={{ marginTop: '9rem' }} className="space-y-6 ">
              <div className="border border-gray-300  rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Additional Info</h3>
                <div className="text-gray-600">
                  <p className="mb-1">Ref.{job.reference_number}</p>
                  
                </div>
              </div>

              <div className="border border-gray-300   rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">About the School</h3>
                <div className=" items-start gap-2 text-gray-600 mb-2">
                  <p>
                  A.P. Moller - Maersk is an integrated container logistics company working to connect and simplify its customer's supply chains. As the global leader in shipping services, the company operates in 130 countries and employs roughly 70,000 people. With simple end-to-end offering of products and digital services, seamless customer engagement and a superior end-to-end delivery network, Maersk enables its customers to trade and grow by transporting goods anywhere - all over the world.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;