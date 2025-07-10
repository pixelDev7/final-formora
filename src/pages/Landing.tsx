import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  Users, 
  Shield, 
  Zap, 
  Star,
  Brain,
  ClipboardList,
  Award,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react';

const Landing: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Interactive Quizzes",
      description: "Create engaging quizzes with automatic scoring, detailed analytics, and instant feedback."
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-green-600" />,
      title: "Smart Surveys",
      description: "Build comprehensive surveys with conditional logic and advanced question types."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Real-time Analytics",
      description: "Get instant insights with beautiful charts, response tracking, and performance metrics."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Digital Certificates",
      description: "Generate and customize certificates for quiz completions and achievements."
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Team Collaboration",
      description: "Work together with role-based permissions and shared form libraries."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with data encryption and privacy protection."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Education Director",
      company: "TechEdu Institute",
      content: "Formora has revolutionized how we conduct assessments. The analytics are incredible!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "HR Manager",
      company: "InnovateCorp",
      content: "Perfect for employee surveys and feedback collection. Easy to use and powerful.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Coordinator",
      company: "University Research Lab",
      content: "The conditional logic and bulk tools save us hours of work every week.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50K+", label: "Forms Created" },
    { number: "2M+", label: "Responses Collected" },
    { number: "99.9%", label: "Uptime" },
    { number: "150+", label: "Countries" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ClipboardList className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Formora</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <Link
                to="/dashboard"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Link
                to="/dashboard"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Create Stunning
                <span className="text-blue-600 block">Quizzes & Surveys</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Build engaging forms with advanced analytics, real-time insights, and beautiful design. 
                Perfect for education, business, and research.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/create"
                  className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                >
                  <span>Start Creating</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors font-semibold text-lg"
                >
                  <span>View Demo</span>
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Brain className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold text-gray-900">Sample Quiz</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium text-gray-900 mb-2">What is the capital of France?</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="radio" className="text-blue-600" />
                          <span className="text-gray-700">Paris</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" className="text-blue-600" />
                          <span className="text-gray-700">London</span>
                        </label>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
                      Submit Answer
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-full shadow-lg">
                <Users className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to create amazing forms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple surveys to complex quizzes, Formora provides all the tools you need 
              to collect, analyze, and act on your data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Design Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Works perfectly on any device
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Your forms look great and work flawlessly on desktop, tablet, and mobile devices.
            </p>
            
            <div className="flex justify-center items-center space-x-8 lg:space-x-16">
              <div className="text-center">
                <Monitor className="h-16 w-16 text-blue-200 mx-auto mb-4" />
                <div className="text-blue-100">Desktop</div>
              </div>
              <div className="text-center">
                <Smartphone className="h-16 w-16 text-blue-200 mx-auto mb-4" />
                <div className="text-blue-100">Mobile</div>
              </div>
              <div className="text-center">
                <Globe className="h-16 w-16 text-blue-200 mx-auto mb-4" />
                <div className="text-blue-100">Anywhere</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Loved by thousands of users
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about Formora
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who trust Formora for their form creation needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/create"
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              <span>Create Your First Form</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center space-x-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-lg"
            >
              <span>Explore Dashboard</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <ClipboardList className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Formora</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The most powerful and intuitive form builder for creating quizzes, surveys, 
                and collecting responses with beautiful analytics.
              </p>
              <div className="text-sm text-gray-500">
                Created with ❤️ by <span className="text-blue-400 font-medium">Aftab Alam</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/create" className="hover:text-white transition-colors">Create Forms</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link to="/library" className="hover:text-white transition-colors">Templates</Link></li>
                <li><Link to="/settings" className="hover:text-white transition-colors">Settings</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Formora. All rights reserved. Built by Aftab Alam.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;