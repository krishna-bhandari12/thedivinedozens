import { useState, useRef } from 'react';
import { Play, Pause, Download, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';

// Cloudinary Configuration
// Replace 'YOUR_CLOUD_NAME' with your Cloudinary cloud name
const CLOUDINARY_CLOUD_NAME = 'drgunwb17';
const publicId = 'v1767412288';

// Helper function to get Cloudinary audio URL
const getCloudinaryUrl = (publicId) => {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/${publicId}`;
};

const Sermons = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Sermons with Cloudinary URLs
  // Upload your audio files to Cloudinary and use the public ID
  // Example: If you upload "faith-walks.mp3", the public ID might be "sermons/faith-walks"
  const sermons = [
    {
      id: 1,
      title: 'Faith Walks With God',
      speaker: 'Pastor John',
      date: 'March 14, 2021',
      duration: '45 min',
      scripture: 'Hebrews 11:1-6',
      // Replace with your Cloudinary public ID (e.g., "sermons/faith-walks-with-god")
      audioUrl: getCloudinaryUrl('/behzmyxj5j3hmu15dqm2.mp3'),
    },
    {
      id: 2,
      title: 'The Power of Prayer',
      speaker: 'Pastor Mary',
      date: 'December 22, 2025',
      duration: '38 min',
      scripture: 'James 5:13-18',
      audioUrl: getCloudinaryUrl('/fcacjx5x6aj4njarp3to.mp3'),
    },
    {
      id: 3,
      title: 'Living with Purpose',
      speaker: 'Pastor John',
      date: 'December 15, 2025',
      duration: '42 min',
      scripture: 'Jeremiah 29:11-13',
      audioUrl: getCloudinaryUrl('/fcacjx5x6aj4njarp3to.mp3'),
    },
    {
      id: 4,
      title: 'Grace Upon Grace',
      speaker: 'Pastor Mary',
      date: 'December 8, 2025',
      duration: '40 min',
      scripture: 'John 1:16-17',
      audioUrl: getCloudinaryUrl('/fcacjx5x6aj4njarp3to.mp3'),
    },
  ];

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = (sermon) => {
    if (currentPlaying?.id === sermon.id) {
      // Toggle play/pause for current sermon
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      // Play new sermon
      setCurrentPlaying(sermon);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    if (audioRef.current) {
      audioRef.current.currentTime = percent * audioRef.current.duration;
    }
  };

  const handleDownload = (sermon) => {
    const link = document.createElement('a');
    link.href = sermon.audioUrl;
    link.download = `${sermon.title.replace(/\s+/g, '-').toLowerCase()}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skipTime = (seconds) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="sermons" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Recent Sermons</h2>
        <p className="section-subtitle">
          Missed a service? Catch up on our latest messages and 
          be encouraged by the Word of God.
        </p>

        {/* Hidden Audio Element */}
        {currentPlaying && (
          <audio
            ref={audioRef}
            src={currentPlaying.audioUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            autoPlay
          />
        )}

        {/* Now Playing Bar */}
        {currentPlaying && (
          <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-2xl p-4 md:p-6 mb-8 text-white shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <p className="text-amber-200 text-xs uppercase tracking-wider mb-1">Now Playing</p>
                <h3 className="font-serif text-lg md:text-xl font-bold">{currentPlaying.title}</h3>
                <p className="text-amber-200 text-sm">{currentPlaying.speaker} • {currentPlaying.scripture}</p>
              </div>
              
              {/* Player Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => skipTime(-10)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  title="Rewind 10s"
                >
                  <SkipBack className="h-5 w-5" />
                </button>
                
                <button
                  onClick={() => handlePlayPause(currentPlaying)}
                  className="w-12 h-12 bg-white text-amber-700 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5 ml-0.5" />
                  )}
                </button>
                
                <button
                  onClick={() => skipTime(10)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  title="Forward 10s"
                >
                  <SkipForward className="h-5 w-5" />
                </button>
                
                <button
                  onClick={toggleMute}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div
                className="h-2 bg-white/20 rounded-full cursor-pointer overflow-hidden"
                onClick={handleSeek}
              >
                <div
                  className="h-full bg-white rounded-full transition-all duration-100"
                  style={{ width: `${(progress / duration) * 100 || 0}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-amber-200 mt-1">
                <span>{formatTime(progress)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Sermon List */}
        <div className="space-y-4">
          {sermons.map((sermon) => (
            <div
              key={sermon.id}
              className={`bg-gradient-to-r from-gray-50 to-white border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-lg transition-all duration-300 ${
                currentPlaying?.id === sermon.id ? 'border-amber-500 shadow-lg' : 'border-gray-100'
              }`}
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => handlePlayPause(sermon)}
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                    currentPlaying?.id === sermon.id && isPlaying
                      ? 'bg-amber-700 text-white'
                      : 'bg-amber-100 text-amber-700 hover:bg-amber-700 hover:text-white'
                  }`}
                >
                  {currentPlaying?.id === sermon.id && isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5 ml-0.5" />
                  )}
                </button>
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-gray-800">
                    {sermon.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {sermon.speaker} • {sermon.date} • {sermon.duration}
                  </p>
                  <p className="text-amber-700 text-sm mt-1 font-medium">
                    {sermon.scripture}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 ml-16 md:ml-0">
                <button
                  onClick={() => handlePlayPause(sermon)}
                  className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  {currentPlaying?.id === sermon.id && isPlaying ? (
                    <>
                      <Pause className="h-4 w-4" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      Listen
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleDownload(sermon)}
                  className="flex items-center gap-2 border border-gray-200 hover:border-amber-700 hover:text-amber-700 text-gray-600 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Sermons
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sermons;
