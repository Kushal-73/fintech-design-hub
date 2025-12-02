import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, FileText, Search, Shield, BarChart, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AuditTaxation = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Management Audit",
      description: "Systematic examination of management decisions",
      icon: BarChart,
    },
    {
      title: "System Audit",
      description: "IT and financial reporting system assessments",
      icon: Shield,
    },
    {
      title: "Internal Audit",
      description: "Comprehensive internal control evaluation",
      icon: Search,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const auditServices = [
    {
      title: "Management Audit",
      icon: BarChart,
      description: "Systematic assessment of management controls and their effectiveness in business operations.",
      benefits: [
        "Identify operational inefficiencies",
        "Assess control effectiveness",
        "Evaluate decision-making processes",
        "Risk assessment and mitigation"
      ]
    },
    {
      title: "System Audit",
      icon: Shield,
      description: "Focus on IT systems, financial reporting processes, and information security.",
      benefits: [
        "IT infrastructure evaluation",
        "Data security assessment",
        "System reliability testing",
        "Compliance verification"
      ]
    },
    {
      title: "Revenue & Inspection Audit",
      icon: Search,
      description: "Detailed examination of revenue streams and compliance with regulations.",
      benefits: [
        "Revenue recognition review",
        "Tax compliance verification",
        "Fraud detection",
        "Regulatory adherence"
      ]
    },
    {
      title: "Concurrent Audit",
      icon: CheckCircle2,
      description: "Real-time examination of financial transactions to ensure accuracy and compliance.",
      benefits: [
        "Continuous monitoring",
        "Early error detection",
        "Real-time feedback",
        "Process improvement"
      ]
    },
    {
      title: "Internal Audit",
      icon: FileText,
      description: "Independent examination of operations, controls, and governance processes.",
      benefits: [
        "Risk management",
        "Control evaluation",
        "Process optimization",
        "Compliance assurance"
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

      <section className="relative py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Audit & Taxation
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive audit and tax services with transparent accounting and timely reporting
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
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
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
          <h2 className="text-3xl font-bold text-center mb-12">Audit Services</h2>
          <div className="space-y-12">
            {auditServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <Card
                  key={index}
                  className={`p-8 hover:shadow-xl transition-all ${
                    isEven ? "bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-950/30 dark:to-emerald-950/30" : ""
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={isEven ? "" : "md:order-2"}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="h-2 w-2 rounded-full bg-primary" />
                            </div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={isEven ? "" : "md:order-1"}>
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 flex items-center justify-center">
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

      <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ensure Compliance & Transparency
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Professional audit services for your business needs
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

export default AuditTaxation;
