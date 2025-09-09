
import { our_work } from "@/app/data/portfolioDB";
import PortfolioTemplate from "@/app/portfolio_page/PortfolioTemplate";
import { notFound } from "next/navigation";

//Generate Static Page

export async function generateStaticParams() {
  return our_work.map((portfolio) => ({
    slug: portfolio.slug,
  }));
}

//main page component

export default async function PortfolioPage({ params }) {
  const { slug } = await params;
  const portfolio = our_work.find((s) => s.slug === slug);
  if (!portfolio) {
    notFound();
  }

  return <PortfolioTemplate portfolio={portfolio} />;
}
