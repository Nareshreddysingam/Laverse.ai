import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Indie Developer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Laverse.ai turned my idea into a working app in under 10 minutes. This is the future of development.',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Startup Founder',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'We built our entire MVP using Laverse. Saved us 6 months and $50k in development costs.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Freelancer',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'The AI automation hub alone has saved me 20 hours per week. Absolutely game-changing.',
    rating: 5
  },
  {
    name: 'Alex Kim',
    role: 'Student',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'As a student learning to code, Laverse Learn helped me understand concepts by building real projects.',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'Product Manager',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Prototype to production in days, not months. Our team velocity increased by 10x.',
    rating: 5
  },
  {
    name: 'David Park',
    role: 'Agency Owner',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'We deliver client projects faster and at higher quality. Laverse is our secret weapon.',
    rating: 5
  }
];

const trustedBy = [
  'YCombinator', 'Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix'
];

export default function Testimonials() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trusted by Creators Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of developers, entrepreneurs, and teams building the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:scale-105"
            >
              <Quote className="w-8 h-8 text-blue-500 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-12">
          <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wider">
            Powering innovation at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {trustedBy.map((company, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              10,000+
            </div>
            <p className="text-gray-400">Active Creators</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              1M+
            </div>
            <p className="text-gray-400">Projects Deployed</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              150+
            </div>
            <p className="text-gray-400">Countries Reached</p>
          </div>
        </div>
      </div>
    </section>
  );
}
