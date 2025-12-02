import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Home, Briefcase, Building, CreditCard, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const DebtSyndication = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Business Loans",
      description: "Quick and competitive business financing solutions",
      icon: Briefcase,
    },
    {
      title: "Home Loans",
      description: "Affordable home loan options with best rates",
      icon: Home,
    },
    {
      title: "Term Loans",
      description: "Long-term financing for business expansion",
      icon: Building,
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

      {/* Hero with Slideshow */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Debt Syndication
            </h1>
            <p className="text-xl text-muted-foreground">
              Customized debt solutions with 360-degree support at every step
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
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
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

      {/* Retail Loans Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Retail Loans</h2>
          
          <div className="space-y-16">
            {/* Business Loans */}
            <Card className="p-8 bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-950/30 dark:to-blue-950/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <Briefcase className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">Business Loans</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Fast and flexible unsecured business loans for urgent requirements. Get funds within a week with the lowest market rates.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span>Quick approval and disbursal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span>Competitive interest rates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span>Customizable repayment schedules</span>
                    </li>
                  </ul>
                </div>
                <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center">
                  <Briefcase className="h-24 w-24 text-primary/40" />
                </div>
              </div>
            </Card>

            {/* Home Loans */}
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                      <Home className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">Home Loans</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Realize your dream of owning a home with our affordable home loan solutions and attractive interest rates.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span>Up to 90% financing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span>Flexible tenure options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span>Tax benefits available</span>
                    </li>
                  </ul>
                  <Button size="lg" className="mt-6" onClick={() => navigate("/apply/home-loan")}>
                    Apply for Home Loan
                  </Button>
                </div>
                <div className="md:order-1 aspect-video rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center">
                  <Home className="h-24 w-24 text-primary/40" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Loans Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Corporate Loans</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Term Loans</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Long-term financing for business expansion, machinery purchase, and working capital requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                  <span>Flexible repayment options</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                  <span>Competitive interest rates</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Working Capital</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Maintain smooth business operations with adequate working capital financing solutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                  <span>Cash credit facilities</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                  <span>Overdraft facilities</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Project Finance</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Comprehensive financing solutions for large-scale projects and infrastructure development.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                  <span>Structured financing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                  <span>Long-term support</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Construction Finance</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Specialized financing for real estate and construction projects with flexible disbursement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                  <span>Stage-wise disbursement</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                  <span>Project monitoring</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Get Customized Debt Solutions
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you find the most cost-effective financing option
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/apply")}
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 h-auto"
          >
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DebtSyndication;
