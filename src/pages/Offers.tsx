import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingDown, Clock, FileText, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const navigate = useNavigate();

  const offers = [
    {
      id: 1,
      bank: "HDFC Bank",
      logo: "🏦",
      rate: 10.5,
      amount: "₹5,00,000",
      tenure: "36 months",
      emi: "₹16,134",
      processingFee: "₹5,000",
      recommended: true,
      features: ["Pre-approved", "Instant disbursal", "No prepayment charges"]
    },
    {
      id: 2,
      bank: "ICICI Bank",
      logo: "🏛️",
      rate: 11.0,
      amount: "₹4,50,000",
      tenure: "36 months",
      emi: "₹14,762",
      processingFee: "₹4,500",
      recommended: false,
      features: ["Quick approval", "Flexible EMI", "Online processing"]
    },
    {
      id: 3,
      bank: "Axis Bank",
      logo: "🏢",
      rate: 10.75,
      amount: "₹5,00,000",
      tenure: "36 months",
      emi: "₹16,268",
      processingFee: "₹5,500",
      recommended: false,
      features: ["Low interest", "Easy documentation", "Fast disbursal"]
    },
    {
      id: 4,
      bank: "Kotak Mahindra",
      logo: "🏪",
      rate: 11.25,
      amount: "₹4,00,000",
      tenure: "36 months",
      emi: "₹13,158",
      processingFee: "₹4,000",
      recommended: false,
      features: ["Paperless process", "Competitive rates", "Quick approval"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <button onClick={() => navigate("/")} className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            FinLend
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Success Message */}
          <Card className="p-8 mb-8 shadow-medium bg-success/5 border-success/20 animate-in fade-in slide-in-from-top-4">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-success flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Congratulations! You're Pre-Approved</h2>
                <p className="text-muted-foreground">
                  We found {offers.length} personalized loan offers for you. Compare and choose the best one.
                </p>
              </div>
            </div>
          </Card>

          {/* Eligibility Check Panel */}
          <Card className="p-6 mb-8 shadow-medium border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-xl font-bold mb-4">Eligibility Check Panel</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-card">
                <p className="text-sm text-muted-foreground mb-1">Eligible Amount</p>
                <p className="text-2xl font-bold text-primary">₹5,00,000</p>
              </div>
              <div className="p-4 rounded-lg bg-card">
                <p className="text-sm text-muted-foreground mb-1">Best Rate</p>
                <p className="text-2xl font-bold text-primary">10.5% p.a.</p>
              </div>
              <div className="p-4 rounded-lg bg-card">
                <p className="text-sm text-muted-foreground mb-1">Fastest Disbursal</p>
                <p className="text-2xl font-bold text-secondary">24 hours</p>
              </div>
              <div className="p-4 rounded-lg bg-card">
                <p className="text-sm text-muted-foreground mb-1">Offers Available</p>
                <p className="text-2xl font-bold text-primary">{offers.length}</p>
              </div>
            </div>
          </Card>

          {/* Offers List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Your Loan Offers</h2>
            
            {offers.map((offer, index) => (
              <Card 
                key={offer.id} 
                className={`p-6 shadow-medium hover:shadow-lg transition-smooth ${
                  offer.recommended ? "border-2 border-primary" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {offer.recommended && (
                  <Badge className="mb-4 gradient-primary text-white">
                    ⭐ Recommended for You
                  </Badge>
                )}
                
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Bank Info */}
                  <div className="flex items-center gap-4 lg:w-1/4">
                    <div className="text-4xl">{offer.logo}</div>
                    <div>
                      <h3 className="font-bold text-lg">{offer.bank}</h3>
                      <p className="text-sm text-muted-foreground">Pre-approved</p>
                    </div>
                  </div>

                  {/* Offer Details */}
                  <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Interest Rate</p>
                      <p className="text-xl font-bold text-primary">{offer.rate}%</p>
                      <p className="text-xs text-muted-foreground">per annum</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Loan Amount</p>
                      <p className="text-xl font-bold">{offer.amount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Monthly EMI</p>
                      <p className="text-xl font-bold text-secondary">{offer.emi}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Tenure</p>
                      <p className="text-xl font-bold">{offer.tenure}</p>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="flex flex-col gap-2 lg:w-1/6">
                    <Button className="w-full gradient-primary shadow-glow">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full text-xs" size="sm">
                      Compare
                    </Button>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-6 pt-6 border-t">
                  <div className="flex flex-wrap gap-3">
                    {offer.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Processing fee: {offer.processingFee} + GST
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Save & Continue Later
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Talk to Expert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
