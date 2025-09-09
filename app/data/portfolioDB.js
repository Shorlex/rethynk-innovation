import {
  Monitor,
  Database,
  Calendar,
  Cloud,
  Compass,
  PenTool,
  Code2,
  Rocket,
  Palette
} from "lucide-react";

export const our_work = [
  // SmartInteriors
  {
    id: 1,
    name: "Smart Interiors",
    slug: "smart-interiors",
    tag: "Transforming design inspiration into a digital-first client experience.",
    image: "/images/portfolio/SmartInteriors/SmartInteriors.png",
    bgVideo: "/images/portfolio/SmartInteriors/hero-video-2.webm",
    middle: false,
    delay: 0.6,
    //Inner Page for Portfolio
    about:
      "SmartInteriors is a creative interior décor design agency specializing in residential and commercial spaces. They focus on modern, luxury, and functional design solutions for clients across different industries.",
    challenge:
      "Despite their reputation offline, SmartInteriors lacked a strong digital presence. They needed:",
    challengeList: [
      "A professional website to showcase their portfolio.",
      "A booking system for client consultations.",
      "A seamless, mobile-friendly experience for design inspiration browsing.",
      "Better visibility to attract high-value clients online.",
    ],
    tools: [
      {
        icon: <Monitor />,
        text: "Frontend: Next.js, Tailwind CSS, Framer Motion (animations)",
      },
      {
        icon: <Database />,
        text: "CMS: Sanity CMS for portfolio & blog updates",
      },
      {
        icon: <Calendar />,
        text: "Booking Integration: Calendly API + Google Calendar",
      },
      {
        icon: <Cloud />,
        text: "Hosting & Deployment: Vercel (scalable + fast performance)",
      },
    ],
    methodology: [
      {
        icon: <Compass />,
        text: "Discovery & Strategy: Workshops with SmartInteriors to understand brand identity, target audience, and service goals.",
      },
      {
        icon: <PenTool />,
        text: "Design & Prototyping: Created Figma wireframes + mockups emphasizing luxury, clean layouts, and portfolio visuals.",
      },
      {
        icon: <Code2 />,
        text: "Development & Integration: Built a responsive website with CMS-powered portfolio, appointment booking, and animated transitions.",
      },
      {
        icon: <Rocket />,
        text: "Testing & Launch: Multi-device QA testing, SEO optimization, and performance checks.",
      },
    ],
    hilight:
      "We created an intuitive project gallery with smart filtering capabilities, enabling clients to quickly find work that matches their preferred aesthetic style.",
    images: [
      "/images/portfolio/SmartInteriors/desktop-view.png",
      "/images/portfolio/SmartInteriors/laptop-view.png",
      "/images/portfolio/SmartInteriors/tablet-view.png",
      "/images/portfolio/SmartInteriors/mobile-view.png",
    ],
    impacts: [
      {
        id: 1,
        icon: "📈",
        body: "Increased client inquiries by 65% in the first 3 months.",
      },
      {
        id: 2,
        icon: "🕒",
        body: "Reduced booking time through instant online scheduling.",
      },
      {
        id: 3,
        icon: "🌍",
        body: "Expanded reach with clients discovering SmartInteriors online.",
      },
      {
        id: 4,
        icon: "💡",
        body: "Enhanced brand perception through a digital identity.",
      },
    ],
    feedback:
      "The website completely transformed how clients see us. The portfolio showcase and online booking make us look professional and approachable...",
    clientName: "Rebecca Tiden",
    clientRole: "President, SmartInteriors",
  },
  // Lumenave International
  {
    id: 2,
    name: "Lumenave",
    slug: "lumenave",
    tag: "From complex clutter to clarity — a professional digital identity for a global cybersecurity leader.",
    image: "/images/portfolio/lumenave/LUMENAVE_International.png",
    bgVideo: "/images/portfolio/lumenave/hero-video.webm",
    middle: true,
    delay: 1.2,
    //Inner Page for Portfolio
    about:
      "Lumenave International Limited is a leading information technology and cybersecurity company. They deliver enterprise-grade IT solutions, security services, and digital transformation support for organizations across multiple industries.",
    challenge:
      "Lumenave needed a professional, simplified, and modern website that would reflect their authority in cybersecurity while staying approachable for clients. They had a digital presence, but their website was:",
    challengeList: [
      "Overly congested and confusing with too much technical jargon.",
      "Difficult for potential clients to navigate and find key services.",
      "Not optimized for mobile and tablet experiences.",
      "Missing a clear value-driven structure to position them as an industry leader.",
    ],
    tools: [
      {
        icon: <Monitor />,
        text: "Frontend: HTML, Bootstrap, SCSS, JavaSript",
      },
      {
        icon: <Database />,
        text: "CMS: Sanity CMS for portfolio & blog updates",
      },
      {
        icon: <Calendar />,
        text: "Booking Integration: Zoho Desk",
      },
      {
        icon: <Cloud />,
        text: "Hosting & Deployment: Custom Hosing",
      },
    ],
    methodology: [
      {
        icon: <Compass />,
        text: "Discovery & Strategy: Workshops with Lumenave’s leadership to streamline their messaging and prioritize services.",
      },
      {
        icon: <PenTool />,
        text: "Design & Prototyping: Created Figma wireframes + mockups emphasizing luxury, clean layouts, and portfolio visuals.",
      },
      {
        icon: <Code2 />,
        text: "Development & Integration: Built a mobile-first website with structured service pages, resources, and easy navigation.",
      },
      {
        icon: <Rocket />,
        text: "Testing & Launch: Multi-device QA testing, SEO optimization, and performance checks.",
      },
    ],
    hilight:
      "We introduced a Services Hub — a clean, categorized section that helps visitors quickly understand Lumenave’s cybersecurity offerings without being overwhelmed by technical terms.",
    images: [
      "/images/portfolio/lumenave/desktop-view.png",
      "/images/portfolio/lumenave/laptop-view.png",
      "/images/portfolio/lumenave/tablet-view.png",
      "/images/portfolio/lumenave/mobile-view.png",
    ],
    impacts: [
      {
        id: 1,
        icon: "📈",
        body: "Increased client inquiries by 65% in the first 3 months.",
      },
      {
        id: 2,
        icon: "🕒",
        body: "Reduced booking time through instant online scheduling.",
      },
      {
        id: 3,
        icon: "🌍",
        body: "Expanded reach with clients discovering SmartInteriors online.",
      },
      {
        id: 4,
        icon: "💡",
        body: "Enhanced brand perception through a digital identity.",
      },
    ],
    feedback:
      "The transformation was night and day. Our website now feels professional, easy to navigate, and reflects the quality of service we deliver...",
    clientName: "Executive Director",
    clientRole: "Lumenave International Limited",
  },
  // Zahl
  {
    id: 3,
    name: "Fibrance",
    slug: "fibrance",
    tag: "Designing trust, speed, and simplicity into every transaction.",
    image: "/images/portfolio/zahls/Fibrance.png",
    bgVideo: "/images/portfolio/zahls/hero-video.webm",
    middle: false,
    delay: 1.8,
    //Inner Page for Portfolio
    about:
      "Fibrance is a modern fintech platform that enables individuals and businesses to send and receive money digitally. Their goal is to make financial transactions simple, fast, and secure for users across different regions.",
    challenge: "As a new fintech startup, Fibrance needed:",
    challengeList: [
      "A clean and professional landing page to showcase their value proposition.",
      "A design that builds trust and credibility in financial services.",
      "A mobile-first experience since most users access fintech apps on phones.",
      "A clear way to highlight features like instant transfers, low fees, and security.",
    ],
    tools: [
      {
        icon: <Monitor />,
        text: "Frontend: Next.js, Tailwind CSS, Framer Motion (animations)",
      },
      {
        icon: <Database />,
        text: "CMS: Sanity CMS for portfolio & blog updates",
      },
      {
        icon: <Calendar />,
        text: "Booking Integration: Calendly API + Google Calendar",
      },
      {
        icon: <Cloud />,
        text: "Hosting & Deployment: Vercel (scalable + fast performance)",
      },
    ],
    methodology: [
      {
        icon: <Compass />,
        text: "Discovery & Strategy: Identified Fibrance’ target users and designed around trust, simplicity, and speed.",
      },
      {
        icon: <PenTool />,
        text: "Design & Prototyping: Built Figma mockups with a fintech feel – modern typography, bold CTAs, and trust elements.",
      },
      {
        icon: <Code2 />,
        text: "Development & Integration: Implemented responsive landing page with animated hero section, feature highlights, and CTA buttons.",
      },
      {
        icon: <Rocket />,
        text: "Testing & Launch: Multi-device QA testing, SEO optimization, and performance checks.",
      },
    ],
    hilight:
      "We designed an interactive hero section showing a live “transaction flow” animation, making users instantly understand the platform’s purpose.",
    images: [
      "/images/portfolio/zahls/desktop-view.png",
      "/images/portfolio/zahls/laptop-view.png",
      "/images/portfolio/zahls/tablet-view.png",
      "/images/portfolio/zahls/mobile-view.png",
    ],
    impacts: [
      {
        id: 1,
        icon: "📈",
        body: "Increased early sign-ups by 70% with a compelling landing page.",
      },
      {
        id: 2,
        icon: "🔒",
        body: "Built user trust with strong security-focused visuals and copy.",
      },
      {
        id: 3,
        icon: "📱",
        body: "Delivered a mobile-first design that worked seamlessly across devices.",
      },
      {
        id: 4,
        icon: "🚀",
        body: "Positioned Fibrance as a serious fintech contender in a competitive market.",
      },
    ],
    feedback:
      "The landing page captured our vision perfectly. It helped us communicate trust and simplicity to users right from day one...",
    clientName: "",
    clientRole: "Founder, Fibrance",
  },
  // InteriorByKaffy
  {
    id: 4,
    name: "Palette & Pattern",
    slug: "palette_pattern",
    tag: "Designing a digital presence as elegant as the spaces they create.",
    image: "/images/portfolio/interiorsbykaffy/palette&pattern.png",
    bgVideo: "/images/portfolio/interiorsbykaffy/hero-video.webm",
    middle: false,
    delay: 2.4,
    //Inner Page for Portfolio
    about:
      "Palette & Pattern is a creative interior décor and lifestyle brand offering modern, stylish, and personalized design solutions for homes and offices. They blend creativity and functionality to transform living and working spaces.",
    challenge:
      "Although Palette & Pattern had a strong offline reputation, their digital presence was minimal. They needed:",
    challengeList: [
      "A professional website to showcase their design projects.",
      "A portfolio section that could visually highlight past works.",
      "A mobile-first experience, since many clients search on smartphones.",
      "A site that communicates style, creativity, and trust in their brand.",
    ],
    tools: [
      {
        icon: <Monitor />,
        text: "Frontend: Next.js, Tailwind CSS, Framer Motion (animations)",
      },
      {
        icon: <Database />,
        text: "CMS: Sanity CMS for portfolio & blog updates",
      },
      {
        icon: <Calendar />,
        text: "Booking Integration: Calendly API + Google Calendar",
      },
      {
        icon: <Cloud />,
        text: "Hosting & Deployment: Vercel (scalable + fast performance)",
      },
    ],
    methodology: [
      {
        icon: <Compass />,
        text: "Discovery & Strategy: Understood the InteriorByKaffy’s design philosophy and ideal customer profile.",
      },
      {
        icon: <PenTool />,
        text: "Design & Prototyping: Built Figma mockups with a fintech feel – modern typography, bold CTAs, and trust elements.",
      },
      {
        icon: <Code2 />,
        text: "Development & Integration: Implemented responsive landing page with animated hero section, feature highlights, and CTA buttons.",
      },
      {
        icon: <Rocket />,
        text: "Testing & Launch: Multi-device QA testing, SEO optimization, and performance checks.",
      },
    ],
    hilight:
      "We included a “Before & After” gallery slider so visitors can instantly see the transformation Palette & Pattern delivers.",
    images: [
      "/images/portfolio/interiorsbykaffy/desktop-view.png",
      "/images/portfolio/interiorsbykaffy/laptop-view.png",
      "/images/portfolio/interiorsbykaffy/tablet-view.png",
      "/images/portfolio/interiorsbykaffy/mobile-view.png",
    ],
    impacts: [
      {
        id: 1,
        icon: "📈",
        body: "Increased client inquiries by 65% in the first 3 months.",
      },
      {
        id: 2,
        icon: "🕒",
        body: "Reduced booking time through instant online scheduling.",
      },
      {
        id: 3,
        icon: "🌍",
        body: "Expanded reach with clients discovering SmartInteriors online.",
      },
      {
        id: 4,
        icon: "💡",
        body: "Enhanced brand perception through a digital identity.",
      },
    ],
    feedback:
      "The website feels like an extension of our design philosophy. It’s elegant, professional, and finally gives us the online presence we’ve been missing...",
    clientName: "CEO",
    clientRole: "Palette & Pattern",
  },
  // Echoes of Africa
  {
    id: 5,
    name: "Echoes of Africa",
    slug: "echoes-of-africa",
    tag: "Preserving the stories of Africa’s legends through a digital platform.",
    image: "/images/portfolio/echoes-of-africa/Echoes-of-Africa.png",
    bgVideo: "/images/portfolio/echoes-of-africa/hero-video.webm",
    middle: true,
    delay: 3,
    //Inner Page for Portfolio
    about:
      "Echoes of Africa is a passion project dedicated to celebrating African heroes, leaders, and changemakers. The platform highlights inspiring figures in African history, culture, and innovation.",
    challenge: "The project needed:",
    challengeList: [
      "A functional blog platform with CRUD features for posts.",
      "A lightweight backend to handle content management.",
      "A simple but elegant frontend design with African-inspired aesthetics.",
      "A solution that was cost-effective and easy to maintain.",
    ],
    tools: [
      {
        icon: <Monitor />,
        text: "Frontend: HTML, JavaScript and CSS for custom styling",
      },
      {
        icon: <Database />,
        text: "Database: SQLite (lightweight, easy setup for small blogs)",
      },
      {
        icon: <Calendar />,
        text: "Backend: Django (Python framework)",
      },
      {
        icon: <Cloud />,
        text: "Hosting & Deployment: PythonAnywhere (affordable Django hosting)",
      },
    ],
    methodology: [
      {
        icon: <Compass />,
        text: "Discovery & Strategy: Defined the blog’s categories (History, Culture, Leaders, Innovators).",
      },
      {
        icon: <PenTool />,
        text: "Design & Prototyping: Built a clean layout with strong typography and earthy tones to reflect African heritage.",
      },
      {
        icon: <Code2 />,
        text: "Development & Integration: Implemented Django models for blog posts, categories, and authors.",
      },
      {
        icon: <Rocket />,
        text: "Testing & Launch: Ensured SEO-friendly URLs, responsive design, and database functionality.",
      },
    ],
    hilight:
      "We included a “Hero of the Week” spotlight section, automatically updated from the database to keep content fresh.",
    images: [
      "/images/portfolio/echoes-of-africa/desktop-view.png",
      "/images/portfolio/echoes-of-africa/laptop-view.png",
      "/images/portfolio/echoes-of-africa/tablet-view.png",
      "/images/portfolio/echoes-of-africa/mobile-view.png",
    ],
    impacts: [
      {
        id: 1,
        icon: "📚",
        body: "Created a platform to educate and inspire about African heroes.",
      },
      {
        id: 2,
        icon: "📱",
        body: "Increased engagement with a mobile-friendly reading experience.",
      },
      {
        id: 3,
        icon: "🌍",
        body: "Built a foundation for future expansion, such as podcasts or videos.",
      },
      {
        id: 4,
        icon: "🖋",
        body: "Empowered non-technical users to add content via Django admin.",
      },
    ],
    feedback:
      "Echoes of Africa finally gave us a voice to share our heroes’ stories online. The platform is simple, beautiful, and easy to manage...",
    clientName: "Founder",
    clientRole: "Echoes of Africa",
  },
  // Home Hive
  {
    id: 6,
    name: "Home Hive",
    slug: "home-hive",
    tag: "Bringing dream homes closer with a modern, user-friendly digital experience.",
    image: "/images/portfolio/home-hive/HomeHive.png",
    bgVideo: "/images/portfolio/home-hive/hero-video.webm",
    middle: false,
    delay: 3.6,
    //Inner Page for Portfolio
    about:
      "Home Hive is a real estate agency focused on connecting buyers, renters, and property investors with premium housing solutions.",
    challenge: "Home Hive’s challenge was:",
    challengeList: [
      "To stand out in a competitive real estate market with a professional website.",
      "To provide easy property browsing and search filters.",
      "To ensure a mobile-first experience for users on the go.",
      "To enable quick lead capture from prospective buyers and renters.",
    ],
    tools: [
      {
        icon: <Monitor />,
        text: "Frontend: Webflow (for fast development and design flexibility)",
      },
      {
        icon: <Database />,
        text: "Integrations: Webflow CMS (to manage property listings)",
      },
      {
        icon: <Palette />,
        text: "Design Tools: Figma (wireframes and mockups before build)",
      },
      {
        icon: <Cloud />,
        text: "Deployment: Webflow Hosting (reliable and scalable)",
      },
    ],
    methodology: [
      {
        icon: <Compass />,
        text: "Discovery & Strategy: Understood Home Hive’s brand identity, target audience, and property types.",
      },
      {
        icon: <PenTool />,
        text: "Design & Prototyping: Created clean UI layouts with emphasis on visuals and intuitive navigation.",
      },
      {
        icon: <Code2 />,
        text: "Development & Integration: Built a responsive website with property listings, filters, and contact forms using Webflow CMS.",
      },
      {
        icon: <Rocket />,
        text: "Testing & Launch: Cross-browser and mobile testing to ensure smooth UX across devices.",
      },
    ],
    hilight:
      "We implemented a dynamic property catalog with filters for location, price range, and property type — all powered by Webflow CMS.",
    images: [
      "/images/portfolio/home-hive/desktop-view.png",
      "/images/portfolio/home-hive/laptop-view.png",
      "/images/portfolio/home-hive/tablet-view.png",
      "/images/portfolio/home-hive/mobile-view.png",
    ],
    impacts: [
      {
        id: 1,
        icon: "📈",
        body: "Increased property inquiries by 55% in the first quarter.",
      },
      {
        id: 2,
        icon: "📱",
        body: "Increased engagement with a mobile-friendly reading experience.",
      },
      {
        id: 3,
        icon: "💡",
        body: "Enhanced brand credibility with a modern digital presence.",
      },
      {
        id: 4,
        icon: "🚀",
        body: "Faster time-to-market thanks to Webflow’s no-code flexibility.",
      },
    ],
    feedback:
      "The new website made a huge difference for us. It’s professional, easy to update, and clients love how simple it is to browse our properties...",
    clientName: "CEO",
    clientRole: "Home Hive",
  },
];
