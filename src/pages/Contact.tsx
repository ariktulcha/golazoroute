import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import SimpleHeader from '../components/SimpleHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SimpleHeader />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg">
            Have a question or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-700 rounded-lg text-green-400">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership/Sponsorship</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">info@worldcupplanner.com</p>
                    <p className="text-gray-400">support@worldcupplanner.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-gray-400">
                      123 Soccer Street<br />
                      Sports District, SD 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-blue-800/30">
              <h3 className="text-xl font-semibold mb-3">Looking for sponsorship opportunities?</h3>
              <p className="text-gray-400 mb-4">
                Partner with us to reach passionate World Cup fans worldwide.
              </p>
              <a
                href="/sponsor"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
              >
                Learn more about sponsorship
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

