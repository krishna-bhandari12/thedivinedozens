import { Cross, Facebook, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Sermons', href: '#sermons' },
    { name: 'Contact', href: '#contact' },
  ];

  const resources = [
    { name: 'Prayer Requests', href: '#' },
    { name: 'Bible Study', href: '#' },
    { name: 'Youth Ministry', href: '#' },
    { name: 'Volunteer', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Cross className="h-8 w-8 text-amber-500" />
              <span className="font-serif text-xl font-bold">
                The Divine Dozens
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              A community of believers united in faith, hope, and love. 
              Growing together in Christ.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Stay Connected</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates, devotionals, and community news.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-gray-800 rounded-xl border border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-900 outline-none transition-all duration-200 text-white placeholder-gray-500"
              />
              <button className="bg-amber-700 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p className="flex items-center justify-center gap-1">
            © 2026 The Divine Dozens. Made with 
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> 
            for God's glory.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
