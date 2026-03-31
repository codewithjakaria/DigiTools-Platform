import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bannerImg from '../assets/banner.png';
import {
  ShoppingCart,
  Play,
  Menu,
  X,
  Check,
  Trash2,
  User,
  Package,
  Rocket,
} from 'lucide-react';

import designIcon from '../assets/products/design-tool.png';
import operationIcon from '../assets/products/operation.png';
import portfolioIcon from '../assets/products/portfolio.png';
import socialIcon from '../assets/products/social-media.png';
import writingIcon from '../assets/products/writing_2327400 1.png';

const products = [
  {
    id: 1,
    name: 'AI Writing Pro',
    description:
      'Generate high-quality content, blogs, and marketing copy in seconds.',
    price: 29,
    period: 'Mo',
    tag: 'Best Seller',
    features: [
      'Unlimited AI generations',
      '50+ writing templates',
      'Grammar checker',
    ],
    icon: writingIcon,
  },
  {
    id: 2,
    name: 'Design Templates Pack',
    description:
      '2000+ premium templates for social media and marketing materials.',
    price: 49,
    period: 'One-Time',
    tag: 'Popular',
    features: ['2000+ templates', 'Monthly updates', 'Commercial license'],
    icon: designIcon,
  },
  {
    id: 3,
    name: 'Premium Stock Assets',
    description:
      'Access millions of royalty-free photos, videos, and graphics.',
    price: 19,
    period: 'Mo',
    tag: 'New',
    features: ['10M+ assets', 'Commercial use', 'No attribution'],
    icon: portfolioIcon,
  },
  {
    id: 4,
    name: 'Automation Toolkit',
    description: 'Automate repetitive tasks and streamline your workflow.',
    price: 79,
    period: 'Mo',
    tag: 'Popular',
    features: ['50+ automations', 'API access', 'Custom workflows'],
    icon: operationIcon,
  },
  {
    id: 5,
    name: 'Resume Builder Pro',
    description:
      'Create professional resumes and cover letters that land interviews.',
    price: 15,
    period: 'One-Time',
    tag: 'New',
    features: ['100+ templates', 'ATS optimization', 'Export to PDF'],
    icon: portfolioIcon,
  },
  {
    id: 6,
    name: 'Social Media Content Kit',
    description: 'Complete toolkit for creating engaging social media content.',
    price: 39,
    period: 'Mo',
    tag: 'Best Seller',
    features: ['5000+ assets', 'Scheduler included', 'Analytics dashboard'],
    icon: socialIcon,
  },
];

const steps = [
  {
    id: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required.',
    icon: <User size={36} className="text-[#6344F5]" />,
  },
  {
    id: '02',
    title: 'Choose Products',
    description: 'Browse our catalog and select tools that fit your needs.',
    icon: <Package size={36} className="text-[#6344F5]" />,
  },
  {
    id: '03',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: <Rocket size={36} className="text-[#6344F5]" />,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  const bgGradient = 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA]';

  const addToCart = product => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`, {
      position: 'bottom-right',
      theme: 'colored',
    });
  };

  const removeFromCart = (index, name) => {
    setCart(cart.filter((_, i) => i !== index));
    toast.error(`${name} removed from cart.`, { position: 'bottom-right' });
  };

  const handleCheckout = () => {
    toast.info('Processing payment...');
    setTimeout(() => {
      setCart([]);
      setActiveTab('products');
      toast.success('Purchase successful!', {
        position: 'top-center',
        icon: '🚀',
      });
    }, 1500);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="font-sans min-h-screen bg-white text-[#1A1A1A]">
      <ToastContainer />

      <header className="bg-white sticky top-0 z-50 border-b border-gray-50">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#4F39F6]">
            DigiTools
          </h2>

          <ul
            className={`md:flex items-center hidden md:space-x-8 text-[13px] font-medium text-gray-600`}
          >
            {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map(
              item => (
                <li key={item} className="hover:text-[#4F39F6] cursor-pointer">
                  {item}
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center space-x-4 md:space-x-6">
            <div
              className="relative cursor-pointer"
              onClick={() => setActiveTab('cart')}
            >
              <ShoppingCart
                size={20}
                className="text-gray-700 hover:text-[#4F39F6]"
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#4F39F6] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
            <button className="hidden md:block text-sm font-bold text-gray-600 hover:text-[#4F39F6] transition-colors">
              Login
            </button>

            <button
              className={`px-4 md:px-5 py-2 ${bgGradient} text-white rounded-full font-bold text-[12px] md:text-[13px] hidden sm:block`}
            >
              Get Started
            </button>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white border-b transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0'}`}
        >
          <ul className="flex flex-col space-y-4 px-6 text-sm font-medium text-gray-600">
            {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map(
              item => (
                <li
                  key={item}
                  className="hover:text-[#4F39F6] cursor-pointer py-2 border-b border-gray-50 last:border-0"
                >
                  {item}
                </li>
              ),
            )}
            <li className="pt-2">
              <button
                className={`w-full py-3 ${bgGradient} text-white rounded-xl font-bold`}
              >
                Get Started
              </button>
            </li>
          </ul>
          <button>Login</button>
        </div>
      </header>

      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-[#F3F0FF] text-[#6344F5] px-3 py-1 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-wide">
            <span className="w-1.5 h-1.5 bg-[#6344F5] rounded-full animate-pulse"></span>{' '}
            New: AI Tools Available
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-[1.2] md:leading-[1.15]">
            Supercharge Your <br className="hidden md:block" /> Digital Workflow
          </h1>
          <p className="mt-5 text-gray-500 text-sm md:text-base max-w-md mx-auto md:mx-0">
            Access premium assets and software—all in one place. Start creating
            faster today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button
              className={`px-7 py-3.5 ${bgGradient} text-white rounded-full font-bold text-sm shadow-lg`}
            >
              Explore Products
            </button>
            <button className="px-7 py-3.5 border-2 border-[#6344F5] text-[#6344F5] rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#F3F0FF] transition">
              <Play size={18} fill="currentColor" /> Watch Demo
            </button>
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          <img
            src={bannerImg}
            alt="banner"
            className="w-full h-auto drop-shadow-2xl rounded-2xl"
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 items-center text-white gap-8 md:gap-0">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-1">50K+</h2>
              <p className="text-purple-100 text-xs md:text-sm font-medium opacity-80 uppercase tracking-wider">
                Active Users
              </p>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-[1px] h-14 bg-white/20"></div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-1">200+</h2>
              <p className="text-purple-100 text-xs md:text-sm font-medium opacity-80 uppercase tracking-wider">
                Premium Tools
              </p>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-[1px] h-14 bg-white/20"></div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-1">4.9</h2>
              <p className="text-purple-100 text-xs md:text-sm font-medium opacity-80 uppercase tracking-wider">
                Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 mb-10 text-xs md:text-sm">
            Choose from our curated collection of premium products.
          </p>

          <div className="inline-flex bg-[#F8F9FB] p-1 rounded-full mb-12 border border-gray-100">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[10px] md:text-[11px] font-bold transition-all ${activeTab === 'products' ? `${bgGradient} text-white shadow-md` : 'text-gray-500'}`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[10px] md:text-[11px] font-bold transition-all ${activeTab === 'cart' ? `${bgGradient} text-white shadow-md` : 'text-gray-500'}`}
            >
              Cart ({cart.length})
            </button>
          </div>

          {activeTab === 'products' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
              {products.map(product => (
                <div
                  key={product.id}
                  className="group bg-white border border-gray-100 rounded-[24px] md:rounded-[28px] p-6 md:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative overflow-hidden"
                >
                  <div className="absolute top-5 right-6 md:right-7">
                    <span className="text-[9px] font-bold uppercase px-2.5 py-1 rounded-full border bg-orange-50 text-orange-500 border-orange-100">
                      {product.tag}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-[#F3F0FF] rounded-xl flex items-center justify-center mb-5">
                    <img
                      src={product.icon}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-[13px] mb-5 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-2.5 mb-7 pt-4 border-t border-gray-50">
                    {product.features.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-[10px] md:text-[11px] text-gray-600 font-medium"
                      >
                        <Check
                          size={12}
                          className="text-green-500"
                          strokeWidth={3}
                        />{' '}
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-baseline gap-1 mb-5 mt-auto">
                    <span className="text-xl md:text-2xl font-extrabold">
                      ${product.price}
                    </span>
                    <span className="text-gray-400 text-xs">
                      /{product.period}
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className={`w-full py-3.5 ${bgGradient} text-white rounded-full font-bold text-[12px] md:text-[13px] shadow-lg`}
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-white border border-gray-100 rounded-[28px] p-6 md:p-8 shadow-xl text-left">
              <h3 className="text-lg md:text-xl font-bold mb-6 border-b pb-4">
                Your Cart
              </h3>
              {cart.length === 0 ? (
                <p className="py-16 text-center text-sm opacity-40">
                  Your cart is empty
                </p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100"
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <img src={item.icon} className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-sm md:text-md">
                            {item.name}
                          </p>
                          <p className="text-xs text-[#4F39F6] font-bold">
                            ${item.price}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(index, item.name)}
                        className="p-2 text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-6 border-t mt-6">
                    <span className="text-md md:text-lg font-bold text-gray-500">
                      Total:
                    </span>
                    <span className="text-2xl md:text-3xl font-extrabold">
                      ${totalPrice}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className={`w-full py-4 mt-6 ${bgGradient} text-white rounded-full font-bold text-sm md:text-md shadow-xl`}
                  >
                    Proceed to Payment
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F9FAFC]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 mb-12 md:mb-16 text-xs md:text-sm">
            Start using premium tools in minutes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {steps.map(step => (
              <div
                key={step.id}
                className="bg-white p-8 md:p-10 rounded-[30px] md:rounded-[35px] shadow-sm relative flex flex-col items-center border border-gray-50 group"
              >
                <div className="absolute top-6 right-6 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#6344F5] flex items-center justify-center text-white text-[10px] md:text-[12px] font-bold">
                  {step.id}
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F3F0FF] rounded-[24px] md:rounded-[30px] flex items-center justify-center mb-6 md:mb-7 group-hover:scale-105 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-[13px] leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#101727] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#627382] mb-12 md:mb-16 text-sm md:text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {/* Starter Card */}
            <div className="p-8 md:p-10 rounded-[20px] border border-[#E5E7EB] bg-white flex flex-col hover:shadow-lg transition-all">
              <h3 className="text-lg md:text-xl font-bold text-[#101727] mb-2 text-left">
                Starter
              </h3>
              <p className="text-[#627382] text-xs md:text-sm mb-6 text-left">
                Perfect for getting started
              </p>
              <div className="text-3xl md:text-4xl font-bold text-[#101727] mb-8 text-left">
                $0
                <span className="text-sm font-medium text-[#627382] ml-1">
                  /Month
                </span>
              </div>
              <div className="space-y-4 mb-10 flex-grow text-left">
                {[
                  'Access to 10 free tools',
                  'Basic templates',
                  'Community support',
                  '1 project per month',
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-xs md:text-sm text-[#627382]"
                  >
                    <Check size={16} className="text-[#10B981]" /> {f}
                  </div>
                ))}
              </div>
              <button className="w-full py-3.5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-[12px] font-bold text-sm">
                Get Started Free
              </button>
            </div>

            {/* Pro Card */}
            <div className="p-8 md:p-10 rounded-[24px] bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white shadow-2xl relative flex flex-col border-none lg:-translate-y-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD700] text-[#101727] text-[10px] font-bold px-4 py-1 rounded-full uppercase">
                Most Popular
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-left">
                Pro
              </h3>
              <p className="text-white/80 text-xs md:text-sm mb-6 text-left">
                Best for professionals
              </p>
              <div className="text-3xl md:text-4xl font-bold mb-8 text-left">
                $29
                <span className="text-sm font-medium text-white/70 ml-1">
                  /Month
                </span>
              </div>
              <div className="space-y-4 mb-10 flex-grow text-left">
                {[
                  'Access to all premium tools',
                  'Unlimited templates',
                  'Priority support',
                  'Unlimited projects',
                  'Cloud sync',
                  'Advanced analytics',
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-xs md:text-sm"
                  >
                    <Check size={16} className="text-white" /> {f}
                  </div>
                ))}
              </div>
              <button className="w-full py-3.5 bg-white text-[#4F39F6] rounded-[12px] font-bold text-sm shadow-xl">
                Start Pro Trial
              </button>
            </div>

            <div className="p-8 md:p-10 rounded-[20px] border border-[#E5E7EB] bg-white flex flex-col hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1 max-w-sm sm:max-w-none mx-auto lg:mx-0 w-full">
              <h3 className="text-lg md:text-xl font-bold text-[#101727] mb-2 text-left">
                Enterprise
              </h3>
              <p className="text-[#627382] text-xs md:text-sm mb-6 text-left">
                For teams and businesses
              </p>
              <div className="text-3xl md:text-4xl font-bold text-[#101727] mb-8 text-left">
                $99
                <span className="text-sm font-medium text-[#627382] ml-1">
                  /Month
                </span>
              </div>
              <div className="space-y-4 mb-10 flex-grow text-left">
                {[
                  'Everything in Pro',
                  'Team collaboration',
                  'Custom integrations',
                  'Dedicated support',
                  'SLA guarantee',
                  'Custom branding',
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-xs md:text-sm text-[#627382]"
                  >
                    <Check size={16} className="text-[#10B981]" /> {f}
                  </div>
                ))}
              </div>
              <button className="w-full py-3.5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-[12px] font-bold text-sm">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${bgGradient} py-12 md:py-24 px-4 md:px-6 text-center text-white relative overflow-hidden`}
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-[26px] md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-[1.25] md:leading-tight px-2">
            Ready To Transform Your <br className="hidden sm:block" /> Workflow?
          </h2>

          <p className="text-purple-100 mb-8 md:mb-10 text-[15px] md:text-lg opacity-95 max-w-2xl mx-auto px-4 leading-relaxed">
            Join thousands of professionals working smarter with DigiTools.
            Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5">
            <button className="w-full sm:w-auto max-w-[280px] sm:max-w-none px-8 md:px-10 py-3.5 md:py-4 bg-white text-[#4F39F6] rounded-full font-bold text-sm md:text-base shadow-xl transition-all hover:bg-gray-50 active:scale-95">
              Explore Products
            </button>
            <button className="w-full sm:w-auto max-w-[280px] sm:max-w-none px-8 md:px-10 py-3.5 md:py-4 border-2 border-white/40 text-white rounded-full font-bold text-sm md:text-base hover:bg-white/10 transition-all active:scale-95">
              View Pricing
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[10px] md:text-xs text-purple-200 font-medium">
            <span className="flex items-center gap-1.5">
              <Check size={12} className="text-white" /> 14-day free trial
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={12} className="text-white" /> No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={12} className="text-white" /> Cancel anytime
            </span>
          </div>
        </div>
      </section>

      <footer className="bg-[#0B0D17] pt-16 md:pt-24 pb-8 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 border-b border-gray-800/60 pb-16">
            <div className="col-span-2 lg:col-span-2">
              <h2 className="text-2xl font-bold mb-5 text-[#4F39F6]">
                DigiTools
              </h2>
              <p className="text-gray-400 text-[14px] leading-relaxed max-w-sm">
                Premium tools for professionals. Building the future of digital
                workflows with precision and speed.
              </p>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold mb-6 text-[15px] text-white">Product</h4>
              <ul className="text-gray-400 text-[13px] space-y-4">
                <li className="hover:text-[#4F39F6] cursor-pointer transition-colors">
                  Features
                </li>
                <li className="hover:text-[#4F39F6] cursor-pointer transition-colors">
                  Pricing
                </li>
                <li className="hover:text-[#4F39F6] cursor-pointer transition-colors">
                  Templates
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-bold mb-6 text-[15px] text-white">Company</h4>
              <ul className="text-gray-400 text-[13px] space-y-4">
                <li className="hover:text-[#4F39F6] cursor-pointer transition-colors">
                  About
                </li>
                <li className="hover:text-[#4F39F6] cursor-pointer transition-colors">
                  Blog
                </li>
                <li className="hover:text-[#4F39F6] cursor-pointer transition-colors">
                  Careers
                </li>
              </ul>
            </div>

            <div className="col-span-1 md:pt-0">
              <h4 className="font-bold mb-6 text-[15px] text-white">
                Resources
              </h4>
              <ul className="text-gray-400 text-[13px] space-y-4">
                <li className="hover:text-[#4F39F6] cursor-pointer transition-colors">
                  Help Center
                </li>
                <li className="hover:text-[#4F39F6] cursor-pointer transition-colors">
                  Privacy
                </li>
                <li className="hover:text-[#4F39F6] cursor-pointer transition-colors">
                  Terms
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-[12px] text-center md:text-left order-2 md:order-1">
              © 2026 Digitools. All rights reserved.
            </p>
            <div className="flex items-center gap-8 text-gray-500 text-[12px] order-1 md:order-2">
              <span className="hover:text-white cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
