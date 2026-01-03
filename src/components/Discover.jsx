import { useState } from 'react';
import { X, Users, Heart, BookOpen, Music, Baby, HandHeart, Globe, Sparkles } from 'lucide-react';

const Discover = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const discoverItems = [
    {
      id: 1,
      icon: Users,
      title: 'Small Groups',
      shortDesc: 'Connect with others in intimate community settings.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
      fullDesc: 'Our small groups meet weekly in homes across the city. These intimate gatherings provide a space for deeper connection, Bible study, prayer, and mutual support. Whether you\'re new to faith or have been walking with Christ for years, there\'s a group for you.',
      details: [
        'Weekly meetings in various locations',
        'Groups for all ages and life stages',
        'Bible study and prayer focus',
        'Lasting friendships and support'
      ]
    },
    {
      id: 2,
      icon: Heart,
      title: 'Marriage & Family',
      shortDesc: 'Strengthen your relationships through biblical principles.',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80',
      fullDesc: 'We believe strong families are the foundation of a strong community. Our marriage and family ministry offers counseling, workshops, retreats, and resources to help you build a Christ-centered home.',
      details: [
        'Pre-marital counseling',
        'Marriage enrichment retreats',
        'Parenting workshops',
        'Family devotional resources'
      ]
    },
    {
      id: 3,
      icon: BookOpen,
      title: 'Bible Study',
      shortDesc: 'Dive deep into Scripture with guided studies.',
      image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80',
      fullDesc: 'Discover the richness of God\'s Word through our various Bible study options. From beginner-friendly overviews to in-depth theological explorations, we have something for everyone seeking to grow in their understanding of Scripture.',
      details: [
        'Wednesday night Bible studies',
        'Men\'s and Women\'s studies',
        'Book-by-book explorations',
        'Topical study series'
      ]
    },
    {
      id: 4,
      icon: Music,
      title: 'Worship Ministry',
      shortDesc: 'Use your musical gifts to glorify God.',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&q=80',
      fullDesc: 'Our worship ministry is dedicated to creating an atmosphere where people can encounter God\'s presence. We welcome singers, musicians, and tech volunteers who want to use their talents for His glory.',
      details: [
        'Choir and vocal teams',
        'Instrumental ensembles',
        'Audio/Visual team',
        'Worship training sessions'
      ]
    },
    {
      id: 5,
      icon: Baby,
      title: 'Children\'s Ministry',
      shortDesc: 'Nurturing faith in the next generation.',
      image: 'https://images.unsplash.com/photo-1602030638412-bb8dcc0bc8b0?w=600&q=80',
      fullDesc: 'We believe children are a gift from God and deserve quality spiritual education. Our children\'s ministry provides age-appropriate teaching, fun activities, and a safe environment where kids can learn about Jesus.',
      details: [
        'Sunday School classes',
        'Vacation Bible School',
        'Kids\' worship services',
        'Safe and secure environment'
      ]
    },
    {
      id: 6,
      icon: HandHeart,
      title: 'Outreach & Missions',
      shortDesc: 'Serving our community and the world.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
      fullDesc: 'Jesus calls us to be His hands and feet in the world. Our outreach ministry coordinates local community service projects and supports missionaries around the globe.',
      details: [
        'Local food bank support',
        'Homeless ministry',
        'International mission trips',
        'Community service projects'
      ]
    },
    {
      id: 7,
      icon: Globe,
      title: 'Young Adults',
      shortDesc: 'Faith community for ages 18-30.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
      fullDesc: 'Navigating life as a young adult comes with unique challenges. Our young adults ministry provides a space for college students and young professionals to grow in faith, build friendships, and find their purpose.',
      details: [
        'Weekly gatherings',
        'Career and life guidance',
        'Social events and retreats',
        'Mentorship opportunities'
      ]
    },
    {
      id: 8,
      icon: Sparkles,
      title: 'Prayer Ministry',
      shortDesc: 'Experience the power of corporate prayer.',
      image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=600&q=80',
      fullDesc: 'Prayer is the foundation of everything we do. Our prayer ministry offers multiple opportunities to pray together, receive prayer, and grow in your personal prayer life.',
      details: [
        'Early morning prayer meetings',
        'Prayer chain network',
        'Healing prayer services',
        'Prayer partner matching'
      ]
    },
  ];

  const openModal = (item) => {
    setSelectedCard(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCard(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="discover" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Discover Our Ministries</h2>
        <p className="section-subtitle">
          Explore the many ways you can connect, grow, and serve 
          within our church community.
        </p>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {discoverItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-colors duration-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.shortDesc}
                </p>
                <span className="inline-block mt-3 text-amber-700 text-sm font-medium group-hover:underline">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCard && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                      <selectedCard.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">
                      {selectedCard.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[50vh]">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedCard.fullDesc}
                </p>
                
                <h4 className="font-serif text-lg font-bold text-gray-800 mb-4">
                  What We Offer
                </h4>
                <ul className="space-y-3 mb-6">
                  {selectedCard.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={closeModal}
                  className="w-full btn-primary"
                >
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Discover;
