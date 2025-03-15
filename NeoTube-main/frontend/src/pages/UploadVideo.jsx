import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useNavigate, useLocation } from 'react-router-dom';

const UploadVideo = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const isDirectAccess = location.pathname === '/upload';

  if (!isOpen && !isDirectAccess) return null;

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else if (isDirectAccess) {
      navigate('/');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg mx-4 shadow-lg">
        <div className="flex justify-between items-center p-3 border-b border-gray-300">
          <h2 className="text-lg font-medium text-gray-800">Upload Videos</h2>
          <button onClick={handleClose} className="text-gray-600 p-1">
            <CloseIcon className="border-none focus:ring-0" sx={{ fontSize: 24, color: 'inherit' }} />
          </button>
        </div>

        <div className="py-[68px] px-[53px] flex flex-col items-center justify-center">
          <div
            className={`w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4 ${
              isDragging ? 'border-2 border-blue-500' : ''
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <FileUploadIcon style={{ fontSize: 36, color: '#6b7280' }} />
          </div>

          <p className="text-lg font-medium text-gray-800 mb-2">Drag and drop video files to upload</p>
          <p className="text-gray-500 text-sm mb-4 text-center">Your videos will be private until you publish them.</p>

          <label className="bg-[#7e82bf] hover:bg-[#464a8a] text-white py-2 px-6 rounded-sm font-medium cursor-pointer">
            SELECT FILES
            <input type="file" accept="video/*" className="hidden" onChange={handleFileChange} />
          </label>

          {selectedFile && (
            <p className="mt-4 text-gray-700 text-sm">Selected File: {selectedFile.name}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
