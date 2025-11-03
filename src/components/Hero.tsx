import { Sparkles, Rocket, Globe, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Laverse.ai
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <button className="px-6 py-2 rounded-full border border-blue-500 hover:bg-blue-500/10 transition-all">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
          <Zap className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300">Your ideas deserve instant reality</span>
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Build Anything,
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Anywhere.
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Turn your ideas into full products, apps, or AI systems — instantly powered by Laverse.ai
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
            <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <span>Start Building Free</span>
          </button>
          <button className="px-8 py-4 border border-gray-600 rounded-full font-semibold text-lg hover:bg-white/5 transition-all duration-300 flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>10,000+ creators building</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>1M+ projects deployed</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span>150+ countries</span>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent z-10 h-32 bottom-0" />
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-sm text-gray-400">laverse.ai/builder</span>
            </div>
            <div className="text-left space-y-2 font-mono text-sm">
              <div className="text-gray-400">
                <span className="text-purple-400">user:</span> "Build me a food delivery app"
              </div>
              <div className="text-gray-400">
                <span className="text-blue-400">laverse:</span> Generating full-stack application...
              </div>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-3/4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
