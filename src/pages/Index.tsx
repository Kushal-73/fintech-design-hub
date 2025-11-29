import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Calculator, Shield, TrendingUp, Users, Zap, CheckCircle2, Coins, DollarSign, Wallet, Banknote } from "lucide-react";
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
      if (loanType === "home") {
        navigate("/apply/home-loan");
      } else {
        navigate("/apply");
      }
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
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate("/calculator")} className="text-xs font-semibold tracking-wide text-foreground/80 hover:text-primary hover:scale-105 transition-all duration-300 uppercase">
              Calculators
            </button>
            <button onClick={() => navigate("/aggregator")} className="text-xs font-semibold tracking-wide text-foreground/80 hover:text-primary hover:scale-105 transition-all duration-300 uppercase">
              For Aggregator
            </button>
            <Button onClick={() => navigate("/apply")} size="sm" className="gradient-primary font-bold tracking-wide shadow-md hover:shadow-lg transition-all duration-300">
              Apply Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-8 pb-0 lg:pt-12 mb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-950 dark:via-purple-950 dark:to-indigo-950">
        {/* Decorative Icons - Randomly spread without overlap */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Row */}
          <Coins className="absolute top-[5%] left-[8%] h-10 w-10 text-primary/10 animate-pulse" style={{ animationDelay: '0s' }} />
          <DollarSign className="absolute top-[8%] left-[25%] h-9 w-9 text-secondary/10 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <Wallet className="absolute top-[6%] left-[45%] h-11 w-11 text-primary/10 animate-pulse" style={{ animationDelay: '0.6s' }} />
          <Banknote className="absolute top-[9%] left-[65%] h-8 w-8 text-secondary/10 animate-pulse" style={{ animationDelay: '0.9s' }} />
          <Coins className="absolute top-[7%] left-[82%] h-12 w-12 text-primary/10 animate-pulse" style={{ animationDelay: '1.2s' }} />
          <DollarSign className="absolute top-[4%] left-[92%] h-9 w-9 text-secondary/10 animate-pulse" style={{ animationDelay: '1.5s' }} />
          
          {/* Upper Middle Row */}
          <Wallet className="absolute top-[18%] left-[5%] h-10 w-10 text-primary/10 animate-pulse" style={{ animationDelay: '1.8s' }} />
          <Banknote className="absolute top-[20%] left-[18%] h-11 w-11 text-secondary/10 animate-pulse" style={{ animationDelay: '2.1s' }} />
          <Coins className="absolute top-[16%] left-[35%] h-8 w-8 text-primary/10 animate-pulse" style={{ animationDelay: '0.2s' }} />
          <DollarSign className="absolute top-[19%] left-[55%] h-12 w-12 text-secondary/10 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <Wallet className="absolute top-[17%] left-[75%] h-9 w-9 text-primary/10 animate-pulse" style={{ animationDelay: '0.8s' }} />
          <Banknote className="absolute top-[21%] left-[88%] h-10 w-10 text-secondary/10 animate-pulse" style={{ animationDelay: '1.1s' }} />
          
          {/* Middle Row */}
          <Coins className="absolute top-[32%] left-[12%] h-11 w-11 text-primary/10 animate-pulse" style={{ animationDelay: '1.4s' }} />
          <DollarSign className="absolute top-[35%] left-[28%] h-9 w-9 text-secondary/10 animate-pulse" style={{ animationDelay: '1.7s' }} />
          <Wallet className="absolute top-[33%] left-[50%] h-10 w-10 text-primary/10 animate-pulse" style={{ animationDelay: '2.0s' }} />
          <Banknote className="absolute top-[36%] left-[68%] h-8 w-8 text-secondary/10 animate-pulse" style={{ animationDelay: '0.1s' }} />
          <Coins className="absolute top-[34%] left-[85%] h-13 w-13 text-primary/10 animate-pulse" style={{ animationDelay: '0.4s' }} />
          <DollarSign className="absolute top-[31%] left-[95%] h-9 w-9 text-secondary/10 animate-pulse" style={{ animationDelay: '0.7s' }} />
          
          {/* Lower Middle Row */}
          <Wallet className="absolute top-[48%] left-[3%] h-10 w-10 text-primary/10 animate-pulse" style={{ animationDelay: '1.0s' }} />
          <Banknote className="absolute top-[51%] left-[22%] h-11 w-11 text-secondary/10 animate-pulse" style={{ animationDelay: '1.3s' }} />
          <Coins className="absolute top-[49%] left-[42%] h-9 w-9 text-primary/10 animate-pulse" style={{ animationDelay: '1.6s' }} />
          <DollarSign className="absolute top-[52%] left-[60%] h-8 w-8 text-secondary/10 animate-pulse" style={{ animationDelay: '1.9s' }} />
          <Wallet className="absolute top-[50%] left-[78%] h-12 w-12 text-primary/10 animate-pulse" style={{ animationDelay: '2.2s' }} />
          <Banknote className="absolute top-[47%] left-[90%] h-10 w-10 text-secondary/10 animate-pulse" style={{ animationDelay: '0.3s' }} />
          
          {/* Bottom Row */}
          <Coins className="absolute top-[65%] left-[10%] h-9 w-9 text-primary/10 animate-pulse" style={{ animationDelay: '0.6s' }} />
          <DollarSign className="absolute top-[68%] left-[30%] h-11 w-11 text-secondary/10 animate-pulse" style={{ animationDelay: '0.9s' }} />
          <Wallet className="absolute top-[66%] left-[48%] h-8 w-8 text-primary/10 animate-pulse" style={{ animationDelay: '1.2s' }} />
          <Banknote className="absolute top-[69%] left-[70%] h-10 w-10 text-secondary/10 animate-pulse" style={{ animationDelay: '1.5s' }} />
          <Coins className="absolute top-[67%] left-[88%] h-12 w-12 text-primary/10 animate-pulse" style={{ animationDelay: '1.8s' }} />
          <DollarSign className="absolute top-[64%] left-[5%] h-9 w-9 text-secondary/10 animate-pulse" style={{ animationDelay: '2.1s' }} />
          
          {/* Very Bottom Row */}
          <Wallet className="absolute top-[82%] left-[15%] h-10 w-10 text-primary/10 animate-pulse" style={{ animationDelay: '0.2s' }} />
          <Banknote className="absolute top-[85%] left-[38%] h-9 w-9 text-secondary/10 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <Coins className="absolute top-[83%] left-[58%] h-11 w-11 text-primary/10 animate-pulse" style={{ animationDelay: '0.8s' }} />
          <DollarSign className="absolute top-[86%] left-[80%] h-8 w-8 text-secondary/10 animate-pulse" style={{ animationDelay: '1.1s' }} />
          <Wallet className="absolute top-[84%] left-[92%] h-13 w-13 text-primary/10 animate-pulse" style={{ animationDelay: '1.4s' }} />
          <Banknote className="absolute top-[81%] left-[72%] h-10 w-10 text-secondary/10 animate-pulse" style={{ animationDelay: '1.7s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Your Journey to
                </span>
                <span className="block mt-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Financial Freedom
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-light">
                Compare personalized loan offers from 50+ leading banks and NBFCs. 
                Get the best rates with instant approval.
              </p>

              {/* Loan Selector */}
              <Card className="p-10 shadow-xl border-2 max-w-3xl mx-auto mt-12 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 backdrop-blur-sm border-blue-200/50">
                <div className="space-y-7">
                  <div className="space-y-3">
                    <label className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <Wallet className="h-5 w-5 text-white" />
                      </div>
                      What loan are you looking for?
                    </label>
                    <Select value={loanType} onValueChange={setLoanType}>
                      <SelectTrigger className="h-16 text-lg">
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
                  <div className="space-y-3">
                    <label className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-white" />
                      </div>
                      Loan Amount
                    </label>
                    <Input
                      type="number"
                      placeholder="Enter amount (₹)"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="h-16 text-lg"
                    />
                  </div>
                  <Button 
                    onClick={handleGetStarted} 
                    className="w-full h-16 gradient-primary text-xl font-semibold shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
                    disabled={!loanType}
                  >
                    Start Application
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </div>
              </Card>

              <div className="flex items-center justify-center gap-10 text-base pt-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-green-800">No credit impact</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  <span className="font-semibold text-blue-800">100% free service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-50 dark:from-indigo-950 dark:via-purple-950 dark:to-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Why Choose FinLend?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We make borrowing simple, transparent, and stress-free
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = [
                "from-blue-500 to-cyan-500",
                "from-purple-500 to-indigo-500",
                "from-green-500 to-emerald-500",
                "from-orange-500 to-red-500"
              ];
              const bgColors = [
                "from-blue-50 to-cyan-50 border-blue-200",
                "from-purple-50 to-indigo-50 border-purple-200",
                "from-green-50 to-emerald-50 border-green-200",
                "from-orange-50 to-red-50 border-orange-200"
              ];
              return (
                <Card 
                  key={index} 
                  className={`p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${bgColors[index]} border-2`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 via-yellow-50 to-green-50 dark:from-orange-950 dark:via-yellow-950 dark:to-green-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                Benefits You'll Love
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                We've designed our platform to give you the best lending experience possible.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const colors = ["text-green-600", "text-blue-600", "text-purple-600", "text-orange-600"];
                  const bgColors = ["bg-green-100", "bg-blue-100", "bg-purple-100", "bg-orange-100"];
                  return (
                    <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${bgColors[index]} border border-current/20`}>
                      <CheckCircle2 className={`h-6 w-6 ${colors[index]} shrink-0 mt-0.5`} />
                      <span className="text-lg text-gray-800">{benefit}</span>
                    </div>
                  );
                })}
              </div>
              <Button onClick={() => navigate("/apply")} size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <Card className="p-8 shadow-xl bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 border-2 border-indigo-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2 p-4 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">50+</div>
                    <div className="text-sm text-gray-700 font-medium">Partner Lenders</div>
                  </div>
                  <div className="space-y-2 p-4 rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100 border border-purple-200">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">₹500Cr+</div>
                    <div className="text-sm text-gray-700 font-medium">Loans Disbursed</div>
                  </div>
                  <div className="space-y-2 p-4 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200">
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">10K+</div>
                    <div className="text-sm text-gray-700 font-medium">Happy Customers</div>
                  </div>
                  <div className="space-y-2 p-4 rounded-lg bg-gradient-to-br from-orange-100 to-yellow-100 border border-orange-200">
                    <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">4.8★</div>
                    <div className="text-sm text-gray-700 font-medium">Customer Rating</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
              Ready to Get Your Loan?
            </h2>
            <p className="text-xl text-white/95 drop-shadow-md">
              Join thousands of satisfied customers who found their perfect loan through FinLend
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={() => navigate("/apply")} 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 text-base font-semibold shadow-xl hover:shadow-2xl transition-all"
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
