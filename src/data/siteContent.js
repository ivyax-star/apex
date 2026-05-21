import {
  BookOpenCheck,
  CalendarCheck,
  ChartNoAxesCombined,
  ClipboardCheck,
  Compass,
  GraduationCap,
  MonitorPlay,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'

export const brand = {
  name: 'Apex Edu',
  tagline: 'Modern homeschooling that feels structured, personal, and calm.',
}

export const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Features', id: 'features' },
  { label: 'Results', id: 'results' },
]

export const hero = {
  eyebrow: 'Apex Edu Homeschooling',
  title: 'A complete homeschool week, designed around your child.',
  description:
    'Apex Edu brings accredited curriculum, live teaching, progress coaching, and family-friendly planning into one focused learning experience.',
  primaryAction: { label: 'Start learning', id: 'cta' },
  secondaryAction: { label: 'View programs', id: 'features' },
  image: {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80',
    alt: 'Students collaborating at a bright study table',
  },
  stats: [
    { value: 'K-12', label: 'Core coverage' },
    { value: '1:1', label: 'Learning plans' },
    { value: '24/7', label: 'Course access' },
  ],
}

export const about = {
  eyebrow: 'Built For Families',
  title: 'Structure for parents. Momentum for students.',
  description:
    'Apex Edu gives families a clear academic rhythm without removing the freedom that makes homeschooling work. Students follow guided learning paths while parents keep visibility into every milestone.',
  image: {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Student learning online with a laptop',
  },
  pillars: [
    {
      title: 'Personalized Plans',
      description:
        'Each student gets a weekly path shaped around level, goals, pace, and family schedule.',
    },
    {
      title: 'Expert Guidance',
      description:
        'Certified instructors and academic coaches help students stay confident and accountable.',
    },
    {
      title: 'Parent Visibility',
      description:
        'Dashboards, progress notes, and simple reports keep families aligned without extra admin work.',
    },
  ],
}

export const features = {
  eyebrow: 'Platform System',
  title: 'Everything families need to run school from home.',
  description:
    'The experience is organized around the real homeschool workflow: plan lessons, learn actively, meet instructors, track mastery, and stay secure.',
  items: [
    {
      icon: BookOpenCheck,
      title: 'Accredited Curriculum',
      description:
        'Standards-aligned Math, Science, English, History, and enrichment paths in one place.',
    },
    {
      icon: MonitorPlay,
      title: 'Interactive Lessons',
      description:
        'Video, practice work, quizzes, and feedback loops keep learning active instead of passive.',
    },
    {
      icon: CalendarCheck,
      title: 'Live Weekly Sessions',
      description:
        'Small-group classes and office hours give students regular contact with real educators.',
    },
    {
      icon: ChartNoAxesCombined,
      title: 'Progress Tracking',
      description:
        'Mastery reports show what is complete, what needs review, and where to focus next.',
    },
    {
      icon: UsersRound,
      title: 'Community Projects',
      description:
        'Students connect through workshops, group challenges, and moderated learning events.',
    },
    {
      icon: ShieldCheck,
      title: 'Safe By Design',
      description:
        'Privacy-focused workflows and secure access protect student data and online learning time.',
    },
  ],
}

export const results = {
  eyebrow: 'Learning Flow',
  title: 'A clearer path from planning to progress.',
  description:
    'The weekly structure keeps the experience predictable while still leaving room for curiosity, travel, and family life.',
  steps: [
    {
      icon: Compass,
      title: 'Map the week',
      description: 'Set goals, lesson load, live sessions, and review points before Monday starts.',
    },
    {
      icon: GraduationCap,
      title: 'Learn with support',
      description: 'Students move through guided lessons and get help before confusion compounds.',
    },
    {
      icon: ClipboardCheck,
      title: 'Review mastery',
      description: 'Parents and coaches see progress, missed skills, and the next best action.',
    },
  ],
}

export const cta = {
  eyebrow: 'Start With Clarity',
  title: "Ready to redesign your family's school day?",
  description:
    'Book a guided walkthrough and see how Apex Edu can support your curriculum, schedule, and student goals.',
  primaryAction: { label: 'Start free trial', id: 'hero' },
  secondaryAction: { label: 'Schedule demo', id: 'hero' },
  note: 'No credit card required. Setup guidance included.',
}

export const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Results', href: '#results' },
      { label: 'Programs', href: '#about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Community', href: '#features' },
      { label: 'Contact', href: '#cta' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' },
    ],
  },
]
