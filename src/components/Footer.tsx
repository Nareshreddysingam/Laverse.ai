import { Sparkles, Twitter, Linkedin, Github, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="relative border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Laverse.ai
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Build Anything, Anywhere. Empowering the world to create, launch, and monetize instantly with AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Developers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">API Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">SDKs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">AI Model Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Laverse.ai. All rights reserved. Built with AI, for the world.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Status</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Changelog</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Community</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm italic">
            "Where creation meets intelligence"
          </p>
        </div>
      </div>
    </footer>
  );
}
