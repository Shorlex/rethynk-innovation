import ServiceTemplate from "@/app/service_page/ServiceTemplate";
import { our_services } from "@/app/data/servicesDB";
import { notFound } from "next/navigation";

// Metadata Contents
// const services = {
//   "business-automation": {
//     title: "AI & Machine Learning Automation in Nigeria | ReThynk Innovation",
//     description:
//       "Automate workflows, deploy AI chatbots, forecast sales, and digitize documents with AI/ML solutions tailored for Nigerian businesses.",
//   },
//   "digital-experience": {
//     title: "Digital Experience Solutions in Nigeria | Websites, CRM & Portals",
//     description:
//       "ReThynk Innovation builds user-friendly websites, booking systems, CRMs, and digital portals to create seamless customer and employee experiences.",
//   },
//   "tech-modernization": {
//     title: "Cloud Migration & Web3 Solutions in Nigeria | ReThynk Innovation",
//     description:
//       "Move to the cloud, adopt Web3, and secure your business with cybersecurity and hybrid cloud solutions for Nigerian startups and enterprises.",
//   },
//   "data-analysis": {
//     title:
//       "Data Analytics & Business Intelligence in Nigeria | ReThynk Innovation",
//     description:
//       "Turn data into decisions with BI dashboards, KPI monitoring, predictive modeling, and blockchain-based data verification for Nigerian businesses.",
//   },
// };

// ✅ Generate metadata dynamically
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = our_services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | ReThynk Innovation",
      description: "This service page does not exist.",
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `https://rethynkinnovation.com/services/${slug}`,
      siteName: "ReThynk Innovation",
      images: [
        {
          url: service.image || "/default-og.png", // ✅ fallback if no custom OG image
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_NG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
      images: [service.image || "/default-og.png"],
    },
  };
}

// ✅ Generate static paths
export async function generateStaticParams() {
  return our_services.map((service) => ({
    slug: service.slug,
  }));
}

// ✅ Main page component
export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = our_services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // ✅ Generate FAQ Schema from service.FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.FAQs?.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Inject JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceTemplate service={service} />
    </>
  );
}
