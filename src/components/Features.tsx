import { Code, Globe, Bot, Zap, ShoppingCart, Box, Cloud, BookOpen, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI Builder Studio',
    description: 'Generate full-stack apps instantly from text. Build websites, mobile apps, APIs, chatbots, and more.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Code,
    title: 'AI Code Engine',
    description: 'Natural language to real-time code generation. Auto-debug, explain, and deploy with voice-to-code.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'AI Website Creator',
    description: '100+ prebuilt templates. Live preview editing. One-click publish to custom domains.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Bot,
    title: 'AI Agent Factory',
    description: 'Build & train custom AI assistants for support, coding, marketing, sales, and writing.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Zap,
    title: 'AI Automation Hub',
    description: 'Automate workflows smarter than Zapier. Integrate with 100+ services seamlessly.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: ShoppingCart,
    title: 'AI Marketplace',
    description: 'Publish, sell, or share your AI apps, bots, and templates. Earn globally in USD or crypto.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Box,
    title: 'AI 3D & Game Studio',
    description: 'Generate 3D environments, models, and Unity/Unreal-ready scenes using text prompts.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Cloud,
    title: 'Global Cloud Deployment',
    description: 'One-click deploy to global servers. Auto-scaling with real-time analytics dashboard.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: BookOpen,
    title: 'Laverse Learn',
    description: 'Interactive AI tutors teach coding, business, and design through hands-on projects.',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time multiplayer building with voice, chat, and AI co-builder suggestions.',
    color: 'from-violet-500 to-purple-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A complete AI-powered ecosystem to build, launch, and scale your ideas from zero to production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
            <p className="text-2xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dream → Type → Deploy
              </span>
            </p>
            <p className="text-gray-400">
              Where creation meets intelligence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
