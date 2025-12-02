import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, UserCircle, Globe, Users, RefreshCw, Briefcase, PieChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const FinancialAdvisory = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Virtual CFO",
      description: "Complete financial management support",
      icon: UserCircle,
    },
    {
      title: "M&A Advisory",
      description: "Strategic merger and acquisition guidance",
      icon: Users,
    },
    {
      title: "Portfolio Advisory",
      description: "Investment portfolio management services",
      icon: PieChart,
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
      title: "Virtual CFO",
      icon: UserCircle,
      description: "Comprehensive financial management services without the full-time cost of a CFO.",
      features: [
        "Business projection preparation",
        "Budgetary control through MIS systems",
        "Banking relationship management",
        "Process due diligence and improvement"
      ]
    },
    {
      title: "Internationalization",
      icon: Globe,
      description: "Strategic guidance for expanding your business into international markets.",
      features: [
        "Market entry strategy",
        "Regulatory compliance support",
        "International taxation planning",
        "Cross-border transaction management"
      ]
    },
    {
      title: "Succession Planning",
      icon: Users,
      description: "Ensure smooth business transition to the next generation of leadership.",
      features: [
        "Leadership transition planning",
        "Ownership transfer strategies",
        "Family business governance",
        "Estate planning coordination"
      ]
    },
    {
      title: "Restructuring & Turnaround",
      icon: RefreshCw,
      description: "Strategic solutions to revitalize struggling businesses and optimize operations.",
      features: [
        "Financial restructuring",
        "Operational optimization",
        "Debt restructuring",
        "Performance improvement"
      ]
    },
    {
      title: "Merger & Acquisition",
      icon: Briefcase,
      description: "End-to-end M&A advisory from target identification to post-merger integration.",
      features: [
        "Target screening and valuation",
        "Due diligence coordination",
        "Deal structuring and negotiation",
        "Integration planning"
      ]
    },
    {
      title: "Portfolio Evaluation & Fund Advisory",
      icon: PieChart,
      description: "Expert investment advisory and portfolio management services.",
      features: [
        "Portfolio performance analysis",
        "Asset allocation strategies",
        "Risk assessment and management",
        "Investment recommendations"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
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

      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950 dark:via-amber-950 dark:to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Financial Advisory Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Strategic financial planning with creativity, detailed risk analysis, and comprehensive business support
            </p>

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
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-muted-foreground">{slide.description}</p>
                    </Card>
                  </div>
                );
              })}
            </div>

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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Transform Your Financial Strategy
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us for comprehensive financial advisory services
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

export default FinancialAdvisory;
