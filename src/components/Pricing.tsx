import { Check, Sparkles, Zap, Crown, Building } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    icon: Sparkles,
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      '3 AI Projects',
      '1 AI Agent',
      'Free hosting (limited)',
      'Community support',
      'Basic templates',
      '100MB storage'
    ],
    color: 'from-gray-600 to-gray-700',
    popular: false
  },
  {
    name: 'Premium',
    icon: Zap,
    price: '$2',
    period: '/month',
    altPrice: '₹169/month',
    description: 'For serious creators',
    features: [
      'Unlimited Projects',
      'Full AI Access',
      'Custom Domains',
      'Marketplace Access',
      '24/7 AI Support',
      '10GB storage',
      'Priority processing',
      'Advanced analytics'
    ],
    color: 'from-blue-600 to-purple-600',
    popular: true
  },
  {
    name: 'Pro',
    icon: Crown,
    price: '$9',
    period: '/month',
    altPrice: '₹749/month',
    description: 'For professional teams',
    features: [
      'Everything in Premium',
      'Advanced AI Models',
      'API Access',
      'Team Collaboration',
      '5x Faster Generation',
      '100GB storage',
      'White-label options',
      'Custom integrations',
      'Dedicated support'
    ],
    color: 'from-purple-600 to-pink-600',
    popular: false
  },
  {
    name: 'Enterprise',
    icon: Building,
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'AI DevOps',
      'Private Cloud',
      'Security + Compliance',
      'White-label Integration',
      'Unlimited everything',
      'Custom AI training',
      'SLA guarantees',
      'Priority support',
      'Dedicated account manager'
    ],
    color: 'from-orange-600 to-red-600',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-gray-900/50 backdrop-blur-xl border ${
                  plan.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/20' : 'border-gray-800'
                } rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'lg:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-400 ml-2">{plan.period}</span>}
                  </div>
                  {plan.altPrice && (
                    <p className="text-sm text-gray-500 mt-1">{plan.altPrice}</p>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-semibold mb-8 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            All plans include access to our global community and documentation
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-gray-300">No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-gray-300">Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-gray-300">14-day money back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
