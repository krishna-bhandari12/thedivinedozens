import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Sunday Worship Service',
      date: 'Every Sunday',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Sanctuary',
      description: 'Join us for uplifting worship, prayer, and an inspiring message from God\'s Word.',
      featured: true,
    },
    {
      title: 'Bible Study Group',
      date: 'Every Wednesday',
      time: '7:00 PM - 8:30 PM',
      location: 'Fellowship Hall',
      description: 'Deep dive into Scripture with interactive discussions and fellowship.',
      featured: false,
    },
    {
      title: 'Youth Fellowship',
      date: 'Every Friday',
      time: '6:00 PM - 8:00 PM',
      location: 'Youth Center',
      description: 'A fun and faith-filled gathering for young believers to connect and grow.',
      featured: false,
    },
    {
      title: 'Prayer Meeting',
      date: 'First Saturday of Month',
      time: '6:00 AM - 7:00 AM',
      location: 'Prayer Chapel',
      description: 'Start your day in communion with God through corporate prayer.',
      featured: false,
    },
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Upcoming Events</h2>
        <p className="section-subtitle">
          Join us for worship, fellowship, and spiritual growth. 
          There's always something happening in our community.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl ${
                event.featured
                  ? 'bg-gradient-to-br from-amber-700 to-amber-800 text-white'
                  : 'bg-white border border-gray-100'
              }`}
            >
              {event.featured && (
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Featured Event
                </span>
              )}
              
              <h3 className={`font-serif text-xl md:text-2xl font-bold mb-4 ${
                event.featured ? 'text-white' : 'text-gray-800'
              }`}>
                {event.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className={`flex items-center gap-2 ${
                  event.featured ? 'text-amber-100' : 'text-gray-600'
                }`}>
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className={`flex items-center gap-2 ${
                  event.featured ? 'text-amber-100' : 'text-gray-600'
                }`}>
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className={`flex items-center gap-2 ${
                  event.featured ? 'text-amber-100' : 'text-gray-600'
                }`}>
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>
              
              <p className={`leading-relaxed ${
                event.featured ? 'text-amber-100' : 'text-gray-600'
              }`}>
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
