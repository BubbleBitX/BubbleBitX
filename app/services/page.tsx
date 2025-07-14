import { Globe, Smartphone, Paintbrush, Cloud, ShoppingCart, BarChart } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      icon: <Globe className="w-10 h-10 text-pink-400" />,
      highlight: true
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      icon: <Smartphone className="w-10 h-10 text-purple-400" />
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed with the end-user in mind.',
      icon: <Paintbrush className="w-10 h-10 text-blue-400" />
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to power your applications.',
      icon: <Cloud className="w-10 h-10 text-pink-400" />
    },
    {
      title: 'E-commerce',
      description: 'Complete e-commerce solutions to help you sell online effectively.',
      icon: <ShoppingCart className="w-10 h-10 text-purple-400" />
    },
    {
      title: 'SEO & Marketing',
      description: 'Increase your online visibility and reach your target audience.',
      icon: <BarChart className="w-10 h-10 text-blue-400" />
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Fast Service
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver high-quality solutions quickly and efficiently, helping you stay ahead of the competition.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
                service.highlight 
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-pink-500/30 transform md:-translate-y-4' 
                  : 'bg-gray-900 border border-gray-800 hover:border-pink-500/30'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  POPULAR CHOICE
                </div>
              )}
              
              <div className="flex flex-col items-center text-center mb-6">
                <div className="bg-gray-800 p-4 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help bring your ideas to life with our fast and reliable services.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all text-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
