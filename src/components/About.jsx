import { Heart, Users, BookOpen, HandHeart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Faith & Love',
      description: 'Rooted in the unconditional love of Christ, we nurture faith that transforms lives.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We are a family that supports, encourages, and grows together in our spiritual journey.',
    },
    {
      icon: BookOpen,
      title: 'Scripture',
      description: 'The Word of God guides our path and illuminates our understanding of His purpose.',
    },
    {
      icon: HandHeart,
      title: 'Service',
      description: 'Called to serve others with humility and compassion, reflecting Christ\'s love.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Our Community</h2>
        <p className="section-subtitle">
          The Divine Dozens is a vibrant Christian community dedicated to 
          spreading the Gospel and building meaningful relationships through 
          fellowship, worship, and service.
        </p>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-3xl p-8 md:p-12 mb-16 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            To glorify God by making disciples, nurturing believers in their faith, 
            and reaching out to our community with the transformative message of Jesus Christ. 
            We strive to be a beacon of hope, love, and grace in all we do.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-700 rounded-full mb-4 group-hover:bg-amber-700 group-hover:text-white transition-colors duration-300">
                <value.icon className="h-8 w-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-gray-800 mb-2">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
