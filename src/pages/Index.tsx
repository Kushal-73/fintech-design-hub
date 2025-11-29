import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Calculator, Shield, TrendingUp, Users, Zap, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [loanType, setLoanType] = useState("");
  const [loanAmount, setLoanAmount] = useState("");

  const loanTypes = [
    { value: "personal", label: "Personal Loan" },
    { value: "home", label: "Home Loan" },
    { value: "business", label: "Business Loan" },
    { value: "car", label: "Car Loan" },
    { value: "education", label: "Education Loan" },
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "Bank-level security with encrypted data"
    },
    {
      icon: Zap,
      title: "Instant Approval",
      description: "Get pre-approved in minutes"
    },
    {
      icon: TrendingUp,
      title: "Best Rates",
      description: "Compare offers from 50+ lenders"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated loan advisors"
    }
  ];

  const benefits = [
    "No hidden charges",
    "Flexible repayment options",
    "Quick disbursal in 24-48 hours",
    "Free credit score check"
  ];

  const handleGetStarted = () => {
    if (loanType) {
      navigate("/apply");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FinLend
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => navigate("/")} className="text-sm font-medium hover:text-primary transition-smooth">
              Home
            </button>
            <button onClick={() => navigate("/aggregator")} className="text-sm font-medium hover:text-primary transition-smooth">
              Compare Loans
            </button>
            <button onClick={() => navigate("/calculator")} className="text-sm font-medium hover:text-primary transition-smooth">
              Calculators
            </button>
            <button onClick={() => navigate("/employer")} className="text-sm font-medium hover:text-primary transition-smooth">
              For Employers
            </button>
            <Button onClick={() => navigate("/apply")} size="sm" className="gradient-primary">
              Apply Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  Trusted by 10,000+ customers
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Journey to
                <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Financial Freedom
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Compare personalized loan offers from 50+ leading banks and NBFCs. 
                Get the best rates with instant approval.
              </p>

              {/* Loan Selector */}
              <Card className="p-6 shadow-medium border-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">What loan are you looking for?</label>
                    <Select value={loanType} onValueChange={setLoanType}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select loan type" />
                      </SelectTrigger>
                      <SelectContent>
                        {loanTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Loan Amount</label>
                    <Input
                      type="number"
                      placeholder="Enter amount (₹)"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <Button 
                    onClick={handleGetStarted} 
                    className="w-full h-12 gradient-primary text-base font-semibold shadow-glow hover:shadow-medium transition-smooth"
                    disabled={!loanType}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>No credit impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>100% free service</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-4 duration-1000 delay-300">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-2 border-border shadow-medium p-8">
                <div className="h-full w-full rounded-xl bg-card/80 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="inline-flex h-20 w-20 rounded-full gradient-secondary items-center justify-center shadow-glow">
                      <Calculator className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Smart Loan Matching</h3>
                    <p className="text-muted-foreground">AI-powered recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose FinLend?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make borrowing simple, transparent, and stress-free
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-medium transition-smooth hover:-translate-y-1 bg-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Benefits You'll Love
              </h2>
              <p className="text-muted-foreground text-lg">
                We've designed our platform to give you the best lending experience possible.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button onClick={() => navigate("/apply")} size="lg" className="gradient-primary shadow-glow">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <Card className="p-8 shadow-medium bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Partner Lenders</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-secondary">₹500Cr+</div>
                    <div className="text-sm text-muted-foreground">Loans Disbursed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-secondary">4.8★</div>
                    <div className="text-sm text-muted-foreground">Customer Rating</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Get Your Loan?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of satisfied customers who found their perfect loan through FinLend
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/aggregator")} 
                size="lg" 
                variant="secondary"
                className="text-base font-semibold"
              >
                Compare Loans
              </Button>
              <Button 
                onClick={() => navigate("/apply")} 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-base font-semibold"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">FinLend</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for all lending needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Personal Loans</li>
                <li>Home Loans</li>
                <li>Business Loans</li>
                <li>Car Loans</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 FinLend. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
