import { Lightbulb, Award, Users, Rocket, Shield } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Team Members', value: '15+' },
    { label: 'Years Experience', value: '2+' }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-pink-400" />,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, ensuring quality and reliability.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.'
    }
  ];

  const team = [
    { name: 'John Doe', role: 'CEO & Founder', expertise: 'AI & Machine Learning' },
    { name: 'Jane Smith', role: 'CTO', expertise: 'Blockchain & Web3' },
    { name: 'Alex Johnson', role: 'Lead Developer', expertise: 'Full Stack Development' },
    { name: 'Sarah Williams', role: 'UI/UX Designer', expertise: 'Product Design' }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center pt-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              About Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We&apos;re a passionate team of innovators, creators, and problem-solvers dedicated to building the future of technology.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 mb-4">
              <span className="text-pink-400 text-sm font-medium">Our Journey</span>
            </div>
            <h2 className="text-4xl font-bold">Crafting Digital Excellence Since 2023</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At BubblebitX, we&apos;re passionate about creating innovative solutions that make a difference. 
              Founded in 2023, our team of experts has been at the forefront of digital transformation, 
              helping businesses of all sizes achieve their goals through cutting-edge technology.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our mission is to deliver exceptional value to our clients through creativity, 
              technical excellence, and a deep understanding of their unique needs.
            </p>
            <div className="pt-4">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-full font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Get in Touch
                <Rocket className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-pink-400/30 rounded-2xl z-0"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-1 rounded-2xl z-10">
              <div className="bg-gray-900 rounded-xl p-8 h-full">
                <div className="aspect-video bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg flex items-center justify-center">
                  <Users className="w-20 h-20 text-pink-400 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 mb-4">
            <span className="text-pink-400 text-sm font-medium">Our Values</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">What Drives Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe in building meaningful solutions that create real impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-0.5 rounded-2xl hover:from-pink-500/20 hover:to-purple-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/10"
            >
              <div className="bg-gray-900 p-8 rounded-2xl h-full">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 mb-4">
              <span className="text-pink-400 text-sm font-medium">Our Team</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Meet The Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-square bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-0.5 mb-4 overflow-hidden transition-all duration-300 group-hover:from-pink-500/30 group-hover:to-purple-500/30">
                  <div className="bg-gray-900 w-full h-full rounded-2xl flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-700" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-pink-400 font-medium">{member.role}</p>
                <p className="text-sm text-gray-400">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30 rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s work together to bring your ideas to life with our expertise and innovative solutions.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3.5 rounded-full font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all text-lg"
            >
              Get Started
              <Rocket className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
