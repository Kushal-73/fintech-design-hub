import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, FileText, Briefcase, Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "CAPITAL MARKET",
      description: "IPO, SME Listing & Capital Market Solutions",
      icon: TrendingUp,
      link: "/services/capital-market"
    },
    {
      title: "DEBT SYNDICATION",
      description: "Business & Home Loans, Term Loans & Working Capital",
      icon: Briefcase,
      link: "/services/debt-syndication"
    },
    {
      title: "AUDIT & TAXATION",
      description: "Comprehensive Audit & Tax Advisory Services",
      icon: FileText,
      link: "/services/audit-taxation"
    },
    {
      title: "FINANCIAL ADVISORY",
      description: "Strategic Financial Planning & Advisory",
      icon: Calculator,
      link: "/services/financial-advisory"
    },
    {
      title: "GST ADVISORY",
      description: "GST Compliance & Advisory Services",
      icon: CheckCircle2,
      link: "/services/gst-advisory"
    }
  ];

  const benefits = [
    "Cost-efficient and timely solutions",
    "On-time advisory",
    "Detailed analysis of interest vs cost plan",
    "360-degree support",
    "In-depth analysis of financial options",
    "Detailed technical support"
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
            <Button 
              onClick={() => navigate("/")} 
              variant="outline"
              size="sm"
              className="border-primary/20 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-950 dark:via-purple-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our Expertise
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              our services
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colors = [
                "from-blue-500 to-cyan-500",
                "from-purple-500 to-indigo-500",
                "from-green-500 to-emerald-500",
                "from-orange-500 to-red-500",
                "from-pink-500 to-rose-500"
              ];
              const bgColors = [
                "from-blue-50 to-cyan-50 border-blue-200",
                "from-purple-50 to-indigo-50 border-purple-200",
                "from-green-50 to-emerald-50 border-green-200",
                "from-orange-50 to-red-50 border-orange-200",
                "from-pink-50 to-rose-50 border-pink-200"
              ];
              return (
                <Card 
                  key={index}
                  className={`p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${bgColors[index]} dark:from-card dark:to-card border-2 cursor-pointer group`}
                  onClick={() => navigate(service.link)}
                >
                  <div className="space-y-4 text-center">
                    <div className={`h-16 w-16 mx-auto rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{service.description}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-medium hover:bg-transparent hover:text-primary border border-transparent hover:border-primary/20`}
                    >
                      Learn more →
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value & Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 via-yellow-50 to-green-50 dark:from-orange-950 dark:via-yellow-950 dark:to-green-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
                VALUE & BENEFITS
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:border-primary/20 hover:border"
                >
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you achieve your financial goals with our expert services
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/apply")}
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;