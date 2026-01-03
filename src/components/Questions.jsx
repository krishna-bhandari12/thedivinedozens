import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What time are your Sunday services?',
      answer: 'We have two Sunday services: 9:00 AM (Traditional) and 11:00 AM (Contemporary). Both services include worship, prayer, and a message from God\'s Word. Children\'s ministry is available during both services.',
    },
    {
      question: 'What should I expect on my first visit?',
      answer: 'We want your first visit to feel welcoming! When you arrive, our greeters will help you find your way. The service lasts about 75 minutes and includes worship songs, prayer, and a relevant message. Dress is casual - come as you are! We also have a visitor\'s center where you can learn more about our church.',
    },
    {
      question: 'Do you have programs for children and youth?',
      answer: 'Absolutely! We have age-appropriate programs for children from nursery through high school. Our children\'s ministry (birth-5th grade) meets during both Sunday services. Youth group (6th-12th grade) meets every Wednesday evening at 6:30 PM. All our volunteers are background-checked and trained.',
    },
    {
      question: 'How can I get connected with a small group?',
      answer: 'Small groups are the best way to build meaningful relationships! We have groups that meet throughout the week in various locations. You can sign up at our Welcome Center on Sunday, fill out our online connection card, or contact our church office. We\'ll help match you with a group that fits your schedule and interests.',
    },
    {
      question: 'Do I need to be a member to participate?',
      answer: 'Not at all! Everyone is welcome to attend our services, join small groups, and participate in most activities. Membership is available for those who want to make a deeper commitment to our church family and includes the opportunity to serve in leadership roles and vote in church matters.',
    },
    {
      question: 'How can I serve or volunteer?',
      answer: 'We believe everyone has gifts to share! There are many ways to serve: greeting, children\'s ministry, worship team, tech team, outreach, and more. Visit our Serve page or stop by the Welcome Center to learn about current opportunities. We\'ll help you find a place that matches your gifts and passions.',
    },
    {
      question: 'Is there parking available?',
      answer: 'Yes! We have a large parking lot with plenty of spaces. Handicap-accessible parking is available near the main entrance. Our parking team is available to help direct traffic and assist with any needs. Overflow parking is available in the adjacent lot on busy Sundays.',
    },
    {
      question: 'How do I request prayer?',
      answer: 'We\'d be honored to pray for you! You can submit prayer requests through our website, fill out a prayer card during service, or speak with one of our pastors or prayer team members after the service. Our prayer team meets weekly to pray over all requests. Everything shared is kept confidential.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="questions" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
            <HelpCircle className="h-8 w-8 text-amber-700" />
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Have questions? We've got answers! If you don't find what 
            you're looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-gray-50 to-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-amber-500 shadow-lg' : 'border-gray-100 hover:border-amber-200'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-serif text-lg font-bold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-amber-700 text-white rotate-180'
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-amber-50 to-amber-100 rounded-3xl p-8">
          <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Reach out to us anytime.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Questions;
