import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Scissors, Truck, Users, Award, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import { ServiceCard } from '../components/ui/Cards';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Custom Sports Kits',
      description: 'Complete team uniforms designed and manufactured to your specifications',
      features: [
        'Full sublimation printing',
        'Custom team colors and designs',
        'Player names and numbers',
        'School and sponsor logos',
        'Bulk order discounts'
      ],
      ctaText: 'Get Sports Kit Quote',
      ctaLink: '/contact',
      image: 'https://images.pexels.com/photos/8007515/pexels-photo-8007515.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2'
    },
    {
      title: 'Corporate Uniforms',
      description: 'Professional staff uniforms that represent your brand with pride',
      features: [
        'Brand-consistent designs',
        'Embroidered company logos',
        'Durable work-ready fabrics',
        'Multiple style options',
        'Fast turnaround times'
      ],
      ctaText: 'Get Corporate Quote',
      ctaLink: '/contact',
      image: 'https://images.pexels.com/photos/8112200/pexels-photo-8112200.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2'
    },
    {
      title: 'Fitness & Gym Wear',
      description: 'High-performance activewear designed for serious athletes and fitness enthusiasts',
      features: [
        'Moisture-wicking fabrics',
        'Flexible performance fits',
        'Custom gym branding',
        'Individual and bulk orders',
        'Latest athletic technology'
      ],
      ctaText: 'Get Fitness Quote',
      ctaLink: '/contact',
      image: 'https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2'
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: 'Consultation',
      description: 'We discuss your needs, timeline, and design preferences'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Our team creates custom mockups for your approval'
    },
    {
      icon: Scissors,
      title: 'Production',
      description: 'Manufacturing begins with quality control at every step'
    },
    {
      icon: Truck,
      title: 'Delivery',
      description: 'Fast, reliable delivery or convenient pickup options'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-rb-black texture-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-b from-rb-black to-transparent opacity-80"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bebas mb-6">Our Services</h1>
            <p className="text-lg text-rb-gray-300">
              From concept to creation — we deliver premium custom sportswear solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-rb-gray-900">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bebas mb-6">What We Offer</h2>
            <p className="text-rb-gray-400 max-w-2xl mx-auto">
              Comprehensive sportswear solutions tailored to your team's unique needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-rb-black">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bebas mb-6">Our Process</h2>
            <p className="text-rb-gray-400 max-w-2xl mx-auto">
              Simple, streamlined steps from initial consultation to final delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-rb-gray-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon size={32} className="text-rb-red" />
                </div>
                <h3 className="text-2xl font-bebas mb-4">{step.title}</h3>
                <p className="text-rb-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-rb-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bebas mb-8">Why Choose RecklessBear?</h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: 'Premium Quality',
                    description: 'Only the finest materials and craftsmanship go into every piece we create'
                  },
                  {
                    icon: Clock,
                    title: 'Fast Turnaround',
                    description: 'Quick production times without compromising on quality or attention to detail'
                  },
                  {
                    icon: Users,
                    title: 'Expert Team',
                    description: 'Experienced designers and manufacturers who understand sportswear inside and out'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-rb-red p-3 rounded-full mr-4 mt-1">
                      <feature.icon size={24} className="text-rb-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bebas mb-2">{feature.title}</h3>
                      <p className="text-rb-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8007515/pexels-photo-8007515.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2"
                  alt="RecklessBear Quality"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rb-red">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bebas mb-6 text-rb-white">
              Ready to Get Started?
            </h2>
            <p className="text-white text-lg mb-8 opacity-90">
              Let's discuss your custom sportswear needs and bring your vision to life
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Get Your Quote Today
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;