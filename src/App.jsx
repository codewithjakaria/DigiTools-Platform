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
