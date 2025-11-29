import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Home, 
  Briefcase, 
  Car, 
  GraduationCap, 
  Wallet, 
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const Aggregator = () => {
  const navigate = useNavigate();
  const [selectedLoan, setSelectedLoan] = useState<string | null>(null);

  const loanTypes = [
    {
      id: "personal",
      title: "Personal Loan",
      icon: Wallet,
      description: "Flexible loans for your personal needs",
      features: ["Quick approval", "No collateral", "Flexible tenure"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "home",
      title: "Home Loan",
      icon: Home,
      description: "Make your dream home a reality",
      features: ["Low interest rates", "Long tenure", "Tax benefits"],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "business",
      title: "Business Loan",
      icon: Briefcase,
      description: "Fuel your business growth",
      features: ["High loan amount", "Quick disbursal", "Flexible repayment"],
      color: "from-green-500 to-green-600"
    },
    {
      id: "car",
      title: "Car Loan",
      icon: Car,
      description: "Drive away with your dream car",
      features: ["Competitive rates", "Fast processing", "Minimal documentation"],
      color: "from-orange-500 to-orange-600"
    },
    {
      id: "education",
      title: "Education Loan",
      icon: GraduationCap,
      description: "Invest in your future",
      features: ["Study abroad options", "Moratorium period", "Tax benefits"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const handleLoanSelect = (loanId: string) => {
    setSelectedLoan(loanId);
    // Navigate to apply page with selected loan type
    if (loanId) {
      if (loanId === "home") {
        navigate("/apply/home-loan");
      } else {
        navigate("/apply");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate("/")} 
            className="flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FinLend
            </span>
          </button>
          <Button onClick={() => navigate("/apply")} className="gradient-primary">
            Apply for Loan
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12 space-y-4 animate-in fade-in slide-in-from-top-4">
            <div className="inline-flex h-16 w-16 rounded-2xl gradient-primary items-center justify-center shadow-glow">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Select Your Loan Type
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of loan products. Compare offers from 50+ leading banks and NBFCs.
            </p>
          </div>

          {/* Check Eligibility Button */}
          <div className="mb-8 text-center">
            <Button
              onClick={() => navigate("/calculator")}
              size="lg"
              className="gradient-primary shadow-glow hover:shadow-xl text-lg font-semibold px-8 py-6 h-auto"
            >
              Check Eligibility
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Loan Type Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {loanTypes.map((loan) => {
              const Icon = loan.icon;
              const isSelected = selectedLoan === loan.id;
              
              return (
                <Card
                  key={loan.id}
                  className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 ${
                    isSelected 
                      ? "border-primary shadow-lg scale-105" 
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => handleLoanSelect(loan.id)}
                >
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${loan.color} flex items-center justify-center shadow-md`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{loan.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {loan.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {loan.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Select Button */}
                    <Button
                      className={`w-full mt-4 ${
                        isSelected 
                          ? "gradient-primary" 
                          : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLoanSelect(loan.id);
                      }}
                    >
                      {isSelected ? "Selected" : "Select"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Info Section */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Partner Lenders</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary">₹500Cr+</div>
                <div className="text-sm text-muted-foreground">Loans Disbursed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          {selectedLoan && (
            <div className="mt-8 text-center animate-in fade-in slide-in-from-bottom-4">
              <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">
                    Ready to proceed with {loanTypes.find(l => l.id === selectedLoan)?.title}?
                  </h3>
                  <p className="text-muted-foreground">
                    Click below to compare offers and apply
                  </p>
                  <Button
                    onClick={() => navigate(`/apply?type=${selectedLoan}`)}
                    size="lg"
                    className="gradient-primary shadow-glow"
                  >
                    Compare & Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Aggregator;

