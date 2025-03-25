import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageCircle, Mail, PhoneCall, CheckCircle2, AlertCircle, Shield, Zap, HeadphonesIcon } from 'lucide-react';
import { trackEvent, trackClick } from '../utils/analytics';
import SupportSEO from '../components/PageSEO/SupportSEO';

const SupportPage = () => {
  const handleSupportHoursView = (schedule) => {
    trackEvent('support_hours_viewed', {
      day: schedule.day,
      hours: schedule.hours
    });
  };

  const handleResponseTimeView = (card) => {
    trackEvent('response_time_viewed', {
      priority: card.title,
      response_time: card.response,
      resolution_time: card.resolution
    });
  };

  const handleContactMethodClick = (method) => {
    trackClick('contact_method_clicked', 'support_page', {
      method: method.title,
      action: method.action
    });
  };

  const supportHours = [
    { day: 'Monday - Friday', hours: '07:00 - 23:00' },
    { day: 'Saturday', hours: '08:00 - 17:00' },
    { day: 'Sunday & Public Holidays', hours: '08:00 - 17:00' }
  ];

  const responseTimeCards = [
    {
      icon: AlertCircle,
      title: 'Critical Issues',
      description: 'Connection down, severe degradation, FNO outage',
      response: '15 minutes',
      resolution: '4 hours if ISP related (FNO dependent for FNO outages)'
    },
    {
      icon: Zap,
      title: 'High Priority',
      description: 'Intermittent connectivity, speed issues',
      response: '30 minutes',
      resolution: 'within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Medium Priority',
      description: 'Configuration changes, general queries, billing queries',
      response: '2 hours',
      resolution: 'within 24 hours'
    },
    {
      icon: CheckCircle2,
      title: 'Low Priority',
      description: 'Information requests, future changes',
      response: '4 hours',
      resolution: '48 hours'
    }
  ];

  return (
    <>
      <SupportSEO />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <div className="relative bg-black overflow-hidden min-h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-absa-900/20 to-black">
            {/* Animated Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-absa-500/50 rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0 
                }}
                animate={{
                  y: [null, -20, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* Hero Content */}
          <div className="relative max-w-7xl mx-auto px-6 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                <HeadphonesIcon className="w-5 h-5 text-absa-500 mr-2" />
                <span className="text-white font-medium">Expert Support Team</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                World-Class Support
                <div className="relative">
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-absa-400 to-absa-600">
                    At Your Fingertips
                  </span>
                </div>
              </h1>

              <p className="text-white/80 text-xl mb-12 max-w-xl">
                Our award-winning support team is here to ensure you get the most out of your ABSA Connect connection.
              </p>

              {/* Support Stats */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { value: '15min', label: 'Average Response Time' },
                  { value: '24/7', label: 'Network Monitoring' },
                  { value: '98.5%', label: 'First Contact Resolution' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-absa-500/10 to-absa-700/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                      <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                      <p className="text-white/70">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Support Hours */}
        <div className="relative bg-black py-24">
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Support Hours
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Our team is available 7 days a week to assist you with any queries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {supportHours.map((schedule, index) => (
                <motion.div
                  key={schedule.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-absa-500/10 to-absa-700/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">{schedule.day}</h3>
                    <p className="text-absa-500 text-lg">{schedule.hours}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Response Times */}
        <div className="relative bg-black py-24">
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Response & Resolution Times
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                We prioritize issues based on severity to ensure the fastest possible resolution.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {responseTimeCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-absa-500/10 to-absa-700/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full">
                    <card.icon className="w-12 h-12 text-absa-500 mb-6" />
                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-white/70 mb-6">{card.description}</p>
                    <div className="space-y-4">
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3">
                        <span className="text-sm font-medium text-white/70">Response:</span>
                        <span className="block text-absa-500 font-semibold">{card.response}</span>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3">
                        <span className="text-sm font-medium text-white/70">Resolution:</span>
                        <span className="block text-absa-500 font-semibold">{card.resolution}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="relative bg-black py-24">
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Choose your preferred way to reach our support team.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageCircle,
                  title: 'WhatsApp Support',
                  description: 'Fast responses via WhatsApp',
                  action: 'https://wa.me/27600672028',
                  color: 'from-[#25D366] to-[#128C7E]'
                },
                {
                  icon: PhoneCall,
                  title: 'Live Chat',
                  description: 'Chat with our experts',
                  action: 'YOUR_LIVE_CHAT_URL',
                  color: 'from-absa-600 to-absa-700'
                },
                {
                  icon: Mail,
                  title: 'Email Support',
                  description: 'support@absaconnect.co.za',
                  action: 'mailto:support@absaconnect.co.za',
                  color: 'from-absa-500 to-absa-600'
                }
              ].map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-absa-500/10 to-absa-700/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className={`relative bg-gradient-to-br ${method.color} rounded-xl p-8 shadow-lg group-hover:scale-105 transition-all duration-300`}>
                    <method.icon className="w-12 h-12 text-white mb-6" />
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-white/90">{method.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;