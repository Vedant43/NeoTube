import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HdIcon from '@mui/icons-material/Hd';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

const VideoDetailsModal = () => {
  const [visibility, setVisibility] = useState('Public');
  const [thumbnail, setThumbnail] = useState(null);
  const navigate = useNavigate();

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0 rounded-lg bg-black bg-opacity-50 flex items-center justify-center z-50 text-black transition-opacity duration-300 ease-in-out">
      <div className="bg-white w-full max-w-4xl rounded-lg">
        <div className="flex justify-between rounded-sm items-center p-3 border-b border-gray-300">
          <h2 className="text-lg font-medium">Testing video - Krishna</h2>
          <button className="text-gray-900 hover:text-black" onClick={() => navigate(-1)}>
            <CloseIcon />
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-xl mr-4 mb-4">Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gray-100 p-3 rounded">
                <input type="text" className="w-full text-black bg-transparent outline-none border-none focus:ring-0" defaultValue="Testing video - Krishna" />
              </div>
              <div className="bg-gray-100 rounded p-3">
                <textarea className="w-full bg-transparent text-black outline-none border-none focus:ring-0" rows={4} defaultValue="This is a sample video description." />
              </div>
              <div className="bg-gray-100 rounded p-3">
                <input type="text" className="w-full text-black bg-transparent outline-none border-none focus:ring-0" defaultValue="comedy, coding" />
              </div>
              <div className="text-xl ml-2 mb-2">
                <h3 className="text-xl mb-2">Thumbnail</h3>
                <p className="text-gray-700 text-sm mb-2">Select or upload a picture.</p>
                {thumbnail ? (
                  <img src={thumbnail} alt="Thumbnail" className="w-45 h-24 object-cover rounded shadow" />
                ) : (
                  <label htmlFor="thumbnail-upload" className="bg-gray-100 inline-block p-3 rounded cursor-pointer">
                    <p className="text-gray-600 text-sm">Click to select an image</p>
                    <input type="file" accept="image/*" id="thumbnail-upload" className="hidden" onChange={handleThumbnailChange} />
                  </label>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-black rounded relative">
                <div className="aspect-video flex items-center justify-center">
                  <img src="/api/placeholder/640/360" alt="Video preview" className="max-w-full max-h-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayArrowIcon style={{ fontSize: 48, color: 'white' }} />
                  </div>
                </div>
                <div className="p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">0:00 / 3:47</span>
                    <div className="flex space-x-3">
                      <VolumeUpIcon fontSize="small" style={{ color: 'white' }} />
                      <FullscreenIcon fontSize="small" style={{ color: 'white' }} />
                      <MoreVertIcon fontSize="small" style={{ color: 'white' }} />
                    </div>
                  </div>
                  <div className="h-1 bg-gray-300 mt-1">
                    <div className="h-full bg-blue-500 w-0"></div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Filename</p>
                <p>Testing video - Krishna</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Visibility</p>
                <div className="bg-gray-200 p-3 rounded flex justify-between items-center">
                  <span>{visibility}</span>
                  <KeyboardArrowDownIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-300 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon style={{ color: '#3EA6FF' }} />
            <HdIcon style={{ color: '#3EA6FF' }} />
            <span className="text-gray-600">Video uploaded</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-sm">
            NEXT
          </button>
        </div>

      </div>
    </div>
  );
};

export default VideoDetailsModal;