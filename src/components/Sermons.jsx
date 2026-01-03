import { Play, Headphones, Download } from 'lucide-react';

const Sermons = () => {
  const sermons = [
    {
      title: 'Walking in Faith',
      speaker: 'Pastor John',
      date: 'December 29, 2025',
      duration: '45 min',
      scripture: 'Hebrews 11:1-6',
    },
    {
      title: 'The Power of Prayer',
      speaker: 'Pastor Mary',
      date: 'December 22, 2025',
      duration: '38 min',
      scripture: 'James 5:13-18',
    },
    {
      title: 'Living with Purpose',
      speaker: 'Pastor John',
      date: 'December 15, 2025',
      duration: '42 min',
      scripture: 'Jeremiah 29:11-13',
    },
    {
      title: 'Grace Upon Grace',
      speaker: 'Pastor Mary',
      date: 'December 8, 2025',
      duration: '40 min',
      scripture: 'John 1:16-17',
    },
  ];

  return (
    <section id="sermons" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Recent Sermons</h2>
        <p className="section-subtitle">
          Missed a service? Catch up on our latest messages and 
          be encouraged by the Word of God.
        </p>

        <div className="space-y-4">
          {sermons.map((sermon, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700">
                  <Play className="h-5 w-5 ml-0.5" />
                </div>
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
                <button className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
                  <Headphones className="h-4 w-4" />
                  Listen
                </button>
                <button className="flex items-center gap-2 border border-gray-200 hover:border-amber-700 hover:text-amber-700 text-gray-600 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
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
