import ServiceTemplate from "@/app/service_page/ServiceTemplate";
import { our_services } from "@/app/data/servicesDB";
import { notFound } from "next/navigation";

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

  const canonicalUrl = `https://rethynkinnovation.com/services/${slug}`;

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: [
      "digital transformation Nigeria",
      "AI automation Nigeria",
      service.tag,
      "business automation",
      "ReThynk Innovation",
    ],
    authors: [{ name: "ReThynk Innovation" }],
    creator: "ReThynk Innovation",
    publisher: "ReThynk Innovation",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: canonicalUrl,
      siteName: "ReThynk Innovation",
      images: [
        {
          url: service.image || "/default-og.png", // Use service.image instead of API route
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
      creator: "@rethynkinnovation", // Add your Twitter handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// ✅ Generate static paths for all services
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

  const canonicalUrl = `https://rethynkinnovation.com/services/${slug}`;

  // ✅ Service Schema (LocalBusiness + Service)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.desc,
    provider: {
      "@type": "Organization",
      name: "ReThynk Innovation",
      url: "https://rethynkinnovation.com",
      logo: "https://rethynkinnovation.com/logo.png", // Add your logo URL
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+234-XXX-XXX-XXXX", // Add your phone
        contactType: "Customer Service",
        areaServed: "NG",
        availableLanguage: "en",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    url: canonicalUrl,
    image: service.image,
  };

  // ✅ FAQ Schema
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

  // ✅ Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rethynkinnovation.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://rethynkinnovation.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      {/* Inject JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ServiceTemplate service={service} />
    </>
  );
}
