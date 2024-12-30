import React, { useState, useEffect, useRef } from 'react';
import { FaEllipsisH, FaEdit, FaTrashAlt, FaSearch, FaExclamationCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import admissionService from '../../Services/admissionService';
import ConfirmationModal from './ConfirmationModal';
import { format } from 'date-fns';

const DashboardTable = () => {
  const [admissions, setAdmissions] = useState([]);
  const [filteredAdmissions, setFilteredAdmissions] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApprovedModalOpen, setIsApprovedModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRefs = useRef({});
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown !== null) {
        const currentDropdownRef = dropdownRefs.current[openDropdown];
        if (currentDropdownRef && !currentDropdownRef.contains(event.target)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const fetchAdmissionsData = async () => {
    try {
      setIsLoading(true);
      const data = await admissionService.fetchAdmissions();
      setAdmissions(data);
      setFilteredAdmissions(data);
    } catch (error) {
      console.error('Error fetching admissions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmissionsData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredAdmissions(
        admissions.filter((admission) =>
          `${admission.first_name} ${admission.last_name}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredAdmissions(admissions);
    }
  }, [searchTerm, admissions]);

  const handleToggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleEditAdmission = (admission) => {
    navigate(`/admission/edit/${admission.id}`);
  };

  

  const openDeleteModal = (admission) => {
    if (admission.status === 'approved') {
      setSelectedAdmission(admission);
      setIsApprovedModalOpen(true);
      setOpenDropdown(null);
    } else {
      setSelectedAdmission(admission);
      setIsModalOpen(true);
    }
  };

  const closeDeleteModal = () => {
    setIsModalOpen(false);
    setSelectedAdmission(null);
  };

  const closeApprovedModal = () => {
    setIsApprovedModalOpen(false);
    setSelectedAdmission(null);
  };

  const handleDeleteAdmission = async () => {
    if (selectedAdmission && selectedAdmission.status !== 'approved') {
      try {
        await admissionService.deleteAdmission(selectedAdmission.id);
        setAdmissions((prevAdmissions) =>
          prevAdmissions.filter((admission) => admission.id !== selectedAdmission.id)
        );
        setFilteredAdmissions((prevFiltered) =>
          prevFiltered.filter((admission) => admission.id !== selectedAdmission.id)
        );
      } catch (error) {
        console.error('Error deleting admission:', error);
      } finally {
        closeDeleteModal();
      }
    }
  };

  const formatLastLogin = (dateString) => {
    if (!dateString) {
      return '';
    }
    return format(new Date(dateString), 'MMMM d, yyyy, h:mm a');
  };

  // Approved Action Modal Component
  const ApprovedActionModal = ({ isOpen, onClose, admission }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <FaExclamationCircle className="text-yellow-500 text-5xl" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-4">Action Not Permitted</h3>
          <p className="text-gray-600 text-center mb-6">
            This admission has been approved and cannot be modified or deleted.
          </p>
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-200 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Your Admissions</h1>
        <div className="w-full md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search admissions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 bg-white border border-gray-300 rounded-lg px-4 py-2.5 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-lg font-medium text-gray-700">Loading...</div>
          </div>
        ) : filteredAdmissions.length === 0 ? (
          <div className="text-center text-gray-600 py-12">No admissions found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Admission ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Applicant Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filteredAdmissions.map((admission, index) => (
                  <tr key={admission.id} className="hover:bg-gray-50 transition duration-150">
                    <td 
                      onClick={() => handleEditAdmission(admission)}
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer hover:text-indigo-600"
                    >
                      {admission.admission_number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                      {formatLastLogin(admission.submit_date)}
                    </td>
                    <td 
                      onClick={() => handleEditAdmission(admission)}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer hover:text-indigo-600"
                    >
                      {`${admission.first_name} ${admission.last_name}`}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        admission.status === 'approved' 
                          ? 'bg-green-100 text-green-800' 
                          : admission.status === 'rejected'
                          ? 'bg-red-100 text-red-800'
                          : admission.status === 'in_review'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {admission.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="rlative" ref={(el) => dropdownRefs.current[index] = el}>
                        <button
                          onClick={() => handleToggleDropdown(index)}
                          className="text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                          <FaEllipsisH className="w-5 h-5" />
                        </button>
                        {openDropdown === index && (
                          <div className="absolute mt-2 w-28 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 right-0 md:right-auto ">
                            <div className="py-1">
                              <button
                                onClick={() => handleEditAdmission(admission)}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                              >
                                <FaEdit className="mr-3 text-gray-400" /> Edit
                              </button>
                              <button
                                onClick={() => openDeleteModal(admission)}
                                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                              >
                                <FaTrashAlt className="mr-3 text-red-400" /> Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDeleteAdmission}
        admissionNumber={selectedAdmission?.admission_number}
      />

      <ApprovedActionModal
        isOpen={isApprovedModalOpen}
        onClose={closeApprovedModal}
        admission={selectedAdmission}
      />
    </div>
  );
};

export default DashboardTable;