import { Download, Sparkles, Zap, Gamepad2, Bot, Check } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      name: 'GameCre8',
      tagline: 'Create Games from Text',
      description: 'A revolutionary platform where anyone can create games from simple text descriptions. Currently in lite version, completely free to use.',
      icon: <Gamepad2 className="w-12 h-12 text-pink-400" />,
      features: [
        'No coding required',
        'Instant game generation',
        'User-friendly interface',
        'Lite version available now'
      ],
      cta: {
        text: 'Download Now',
        icon: <Download className="w-5 h-5 ml-2" />,
        link: '#download'
      },
      highlight: true
    },
    {
      name: 'Forhumans',
      tagline: 'AI Platform for Everyone',
      description: 'An Indian-based AI platform designed for users of all ages, offering comprehensive AI assistance for various needs.',
      icon: <Bot className="w-12 h-12 text-purple-400" />,
      features: [
        'AI-powered Q&A',
        'Text to image generation',
        'Document Q&A system',
        'Text to games conversion'
      ],
      cta: {
        text: 'Try Now',
        icon: <Zap className="w-5 h-5 ml-2" />,
        link: '#try-now'
      },
      highlight: false
    },
    {
      name: 'Coming Soon',
      tagline: 'More Exciting Products',
      description: 'Our team is working on innovative solutions to bring you more amazing products.',
      icon: <Sparkles className="w-12 h-12 text-blue-400" />,
      features: [
        'Innovative solutions',
        'Cutting-edge technology',
        'User-focused design',
        'Coming your way soon!'
      ],
      cta: {
        text: 'Stay Tuned',
        icon: <Zap className="w-5 h-5 ml-2" />,
        link: '#subscribe'
      },
      highlight: false
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              BubblebitX Products
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions crafted with passion and cutting-edge technology
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
                product.highlight 
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-pink-500/30 transform md:-translate-y-4' 
                  : 'bg-gray-900 border border-gray-800 hover:border-pink-500/30'
              }`}
            >
              {product.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  FEATURED PRODUCT
                </div>
              )}
              
              <div className="flex flex-col items-center text-center mb-6">
                <div className="bg-gray-800 p-4 rounded-full mb-4">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                <p className="text-pink-400 font-medium mt-1">{product.tagline}</p>
              </div>
              
              <p className="text-gray-300 mb-6 text-center">
                {product.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-pink-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={product.cta.link}
                className={`mt-auto w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-medium transition-all ${
                  product.highlight 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' 
                    : 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {product.cta.text}
                {product.cta.icon}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get updates on new products and features.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            Made with ❤️ by BubblebitX team<br />
            <span className="text-sm">All rights reserved, Copyright {new Date().getFullYear()}</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
