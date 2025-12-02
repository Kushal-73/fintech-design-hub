import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const GstAdvisory = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "GST Registration",
      description: "Seamless GST registration assistance",
      icon: FileText,
    },
    {
      title: "GST Compliance",
      description: "Ongoing compliance and filing support",
      icon: CheckCircle2,
    },
    {
      title: "GST Advisory",
      description: "Expert guidance on GST matters",
      icon: AlertCircle,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

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

      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-pink-950 dark:via-rose-950 dark:to-red-950">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
              GST Advisory
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive GST services for smooth transition and ongoing compliance
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
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-4">
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
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-pink-50/50 to-rose-50/50 dark:from-pink-950/30 dark:to-rose-950/30 mb-12">
              <h2 className="text-3xl font-bold mb-6">Understanding GST</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Goods & Services Tax (GST) is India's most significant tax reform, introducing a unified consumption-based tax system. GST applies to the supply of goods and services from manufacturer to consumer, with input tax credits available at each stage of value addition.
              </p>
              <p className="text-lg text-muted-foreground">
                This makes GST essentially a tax only on value addition at each stage, ensuring the final consumer bears only the GST charged by the last dealer in the supply chain.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our GST Advisory Services</h2>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                Navigate the GST transition smoothly with our expert advisory services. We ensure your business moves seamlessly from the current tax system to GST compliance.
              </p>

              <div className="space-y-4">
                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                    IT System Modifications
                  </h3>
                  <p className="text-muted-foreground ml-10">
                    Assistance with updating EDP and IT systems to accommodate GST requirements
                  </p>
                </div>

                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                    Trade Contract Review
                  </h3>
                  <p className="text-muted-foreground ml-10">
                    Comprehensive review of customer and client contracts aligned with GST guidelines
                  </p>
                </div>

                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                    Tax Credit Transition
                  </h3>
                  <p className="text-muted-foreground ml-10">
                    Smooth carry forward of existing tax credits to the GST regime
                  </p>
                </div>

                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                    GST Internal Audit
                  </h3>
                  <p className="text-muted-foreground ml-10">
                    Regular monitoring and internal audit to ensure ongoing GST compliance
                  </p>
                </div>

                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                    Post-Implementation Support
                  </h3>
                  <p className="text-muted-foreground ml-10">
                    Continuous support after GST implementation to address queries and concerns
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Simplify Your GST Compliance
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance for seamless GST transition and ongoing compliance
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

export default GstAdvisory;
