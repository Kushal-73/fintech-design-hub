import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, FileText, Calculator, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CapitalMarket = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "SME Listing",
      description: "Expert guidance for SME exchange listings",
      icon: Building2,
    },
    {
      title: "IPO Management",
      description: "Comprehensive initial public offering services",
      icon: TrendingUp,
    },
    {
      title: "Business Valuation",
      description: "Professional valuation and assessment services",
      icon: Calculator,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const services = [
    {
      id: "sme-listing",
      title: "SME Listing",
      icon: Building2,
      description: "Navigate the SME exchange listing process with our expert guidance. We provide end-to-end support for companies looking to go public on SME platforms.",
      points: [
        "Eligibility assessment and consultation",
        "Documentation and compliance support",
        "Exchange listing coordination",
        "Post-listing advisory services",
      ],
    },
    {
      id: "ipo",
      title: "Initial Public Offer (IPO)",
      icon: TrendingUp,
      description: "Comprehensive IPO services to help your company transition to public markets successfully.",
      points: [
        "IPO readiness assessment",
        "Regulatory compliance guidance",
        "Investor relations support",
        "Pricing and valuation advisory",
      ],
    },
    {
      id: "issue-management",
      title: "Issue Management",
      icon: FileText,
      description: "Professional management of equity and debt issues for optimal market reception.",
      points: [
        "Issue structuring and planning",
        "Documentation and filing",
        "Marketing and roadshows",
        "Post-issue monitoring",
      ],
    },
    {
      id: "valuation",
      title: "Business Valuation",
      icon: Calculator,
      description: "Accurate business valuation services for various corporate purposes.",
      points: [
        "Fair value assessment",
        "Asset and equity valuation",
        "Valuation for M&A transactions",
        "Regulatory compliance valuations",
      ],
    },
    {
      id: "ma",
      title: "Merger & Acquisition",
      icon: Users,
      description: "Strategic advisory for mergers, acquisitions, and corporate restructuring.",
      points: [
        "Target identification and screening",
        "Due diligence coordination",
        "Deal structuring and negotiation",
        "Post-merger integration support",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg gradient-primary flex items-center justify-center">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FinLend
              </span>
            </div>
            <Button onClick={() => navigate("/services")} variant="ghost" size="sm">
              Back to Services
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Slideshow */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Capital Market Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive capital market solutions for your business growth and public market success
            </p>
            
            {/* Slideshow */}
            <div className="relative h-64 mt-12">
              {slides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  >
                    <Card className="h-full p-8 bg-card/80 backdrop-blur flex flex-col items-center justify-center">
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-muted-foreground">{slide.description}</p>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <Card
                  key={service.id}
                  id={service.id}
                  className={`p-8 hover:shadow-xl transition-all duration-300 ${
                    isEven ? "bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/30" : ""
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={isEven ? "" : "md:order-2"}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold">{service.title}</h2>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="h-2 w-2 rounded-full bg-primary" />
                            </div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={isEven ? "" : "md:order-1"}>
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center">
                        <Icon className="h-24 w-24 text-primary/40" />
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Enter Capital Markets?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through the capital market journey
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/apply")}
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 h-auto"
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CapitalMarket;
