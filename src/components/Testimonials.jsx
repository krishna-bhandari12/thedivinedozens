import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Member since 2020',
      quote: 'The Divine Dozens has truly become my second family. The warmth and genuine love I experience here has transformed my spiritual journey.',
    },
    {
      name: 'Michael Chen',
      role: 'Member since 2019',
      quote: 'I found not just a church, but a community that walks with me through every season of life. The teachings here have deepened my faith immensely.',
    },
    {
      name: 'Grace Williams',
      role: 'Member since 2021',
      quote: 'The youth programs have been a blessing for my teenagers. They\'ve grown so much in their faith and found lifelong friends here.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">What Our Community Says</h2>
        <p className="section-subtitle">
          Hear from members of our community about their experiences 
          and spiritual growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-amber-200" />
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-serif font-bold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-amber-700 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
