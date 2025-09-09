import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { our_services } from "../data/servicesDB";

// const services = [
//   {
//     id: 1,
//     tag: "Business Automation",
//     title: "For AI/ML",
//     desc: "Imagine your business running like a self-optimizing machine. We deploy customized AI solutions that automate customer service (24/7 chatbots), predict inventory needs with 95% accuracy, and streamline back-office tasks. Our clients typically see 30-50% cost reductions in operational overhead while improving service quality. From intelligent document processing to predictive sales analytics, we identify where AI can deliver maximum impact for your specific industry—implementing tools that work for you, not the other way around.",
//     image: "/images/landing_page/for-ai.jpg",
//     link: "Discover how AI can transform your workflows →",
//     even: false,
//   },
//   {
//     id: 2,
//     tag: "Digital Experience",
//     title: "For UI/UX",
//     desc: "Your digital presence should be a revenue driver, not just a brochure. We craft websites and apps with cutting-edge interactivity—think 3D product configurators, augmented reality try-ons, and personalized recommendation engines. These aren't just pretty interfaces; they're conversion machines. Our clients average 2-3x higher engagement and 40% shorter sales cycles. Whether you need an e-commerce powerhouse or a immersive brand platform, we build digital experiences that customers remember and return to.",
//     image: "/images/landing_page/for-digital.jpg",
//     link: "See examples of revenue-boosting designs →",
//     even: true,
//   },
//   {
//     id: 3,
//     tag: "Tech Modernization",
//     title: "For Tech",
//     desc: "Legacy systems draining your productivity? We migrate businesses from outdated software to secure, cloud-based platforms that grow with you. Our modernization process includes seamless data transfer, employee training, and ongoing support—ensuring zero downtime. The result? 60% faster operational workflows, ironclad cybersecurity, and the flexibility to access critical systems from anywhere. We specialize in making complex tech transitions painless, with customized roadmaps for businesses at any digital maturity level.",
//     image: "/images/landing_page/for-cloud.avif",
//     link: "Learn about our no-stress migration process →",
//     even: false,
//   },
//   {
//     id: 4,
//     tag: "Data Analysis",
//     title: "For Data",
//     desc: "Your data is a goldmine—we help you extract its full value. Through intuitive dashboards and AI-powered analysis, we transform scattered numbers into clear growth opportunities: Identify your most profitable customer segments, optimize marketing spend in real-time, and forecast demand with 90%+ accuracy. No more gut decisions—just actionable insights updated automatically. Our clients typically achieve 15-25% revenue growth within 12 months of implementing our data strategies",
//     image: "/images/landing_page/for-data.jpg",
//     link: "Turn your data into profits →",
//     even: true,
//   },
// ];

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

// const slug = our_services.map((item) => item.slug);

const Services = () => {
  return (
    <section className="w-full min-h-screen px-5">
      <div>
        {our_services.map((item) => (
          <div
            key={item.id}
            className={`lg:flex block mt-24 ${item.even && "flex-row-reverse"}`}
          >
            <div className="lg:w-1/2 w-[250px] lg:h-[700px] h-[300px] px-5 relative">
              <Image src={item.image} fill alt={item.tag} />
            </div>
            <div className="w-full lg:h-[700px] h-auto flex items-center">
              <div
                className={`lg:p-5  ${
                  item.even ? "xl:pl-24 xl:pr-60" : "xl:pl-60 xl:pr-24"
                }`}
              >
                <p className="italic text-gray-400 tracking-[5px] font-thin uppercase">
                  {item.tag}
                </p>
                <h2
                  className={`${comorant.className} text-5xl lg:text-6xl xl:text-8xl uppercase italic w-24`}
                >
                  {item.title}
                </h2>
                <p className="my-5">{item.desc}</p>
                <Link
                  href={`/services/${item.slug}`}
                  className="text-red-400 relative group"
                >
                  {item.link}
                  <span
                    className="absolute left-0 bottom-0 h-[.5px] text-red-400 bg-current 
                  transform origin-left transition-all duration-300 
                  scale-x-0 group-hover:scale-x-100 w-full"
                  ></span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
