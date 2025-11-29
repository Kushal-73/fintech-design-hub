import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator as CalcIcon, TrendingUp, PieChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Calculator = () => {
  const navigate = useNavigate();

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(36);

  // Eligibility Calculator State
  const [monthlyIncome, setMonthlyIncome] = useState(50000);
  const [existingEmi, setExistingEmi] = useState(0);
  const [eligibilityTenure, setEligibilityTenure] = useState(36);

  // EMI Calculation
  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const numberOfMonths = tenure;

    const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths)) /
      (Math.pow(1 + ratePerMonth, numberOfMonths) - 1);

    const totalAmount = emi * numberOfMonths;
    const totalInterest = totalAmount - principal;

    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principal: Math.round(principal)
    };
  };

  // Eligibility Calculation
  const calculateEligibility = () => {
    const netIncome = monthlyIncome - existingEmi;
    const maxEmi = netIncome * 0.5; // 50% of net income
    const ratePerMonth = 10.5 / 12 / 100; // Assuming 10.5% interest
    const numberOfMonths = eligibilityTenure;

    const eligibleAmount = (maxEmi * (Math.pow(1 + ratePerMonth, numberOfMonths) - 1)) /
      (ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths));

    return {
      eligibleAmount: Math.round(eligibleAmount),
      maxEmi: Math.round(maxEmi),
      netIncome: Math.round(netIncome)
    };
  };

  const emiResult = calculateEMI();
  const eligibilityResult = calculateEligibility();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            FinLend
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
              <CalcIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold">Loan Calculators</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plan your loan with our smart calculators. Calculate EMI and check your eligibility instantly.
            </p>
          </div>

          {/* Calculators */}
          <Tabs defaultValue="emi" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12">
              <TabsTrigger value="emi" className="text-base">EMI Calculator</TabsTrigger>
              <TabsTrigger value="eligibility" className="text-base">Eligibility Calculator</TabsTrigger>
            </TabsList>

            {/* EMI Calculator */}
            <TabsContent value="emi" className="space-y-8 animate-in fade-in">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <Card className="p-8 shadow-medium space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Calculate Your EMI</h2>
                    <p className="text-muted-foreground">Adjust the values to see your monthly payment</p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Loan Amount</Label>
                        <Input
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="w-32 text-right"
                        />
                      </div>
                      <Slider
                        value={[loanAmount]}
                        onValueChange={([value]) => setLoanAmount(value)}
                        min={50000}
                        max={5000000}
                        step={10000}
                        className="py-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>₹50K</span>
                        <span>₹50L</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Interest Rate (% p.a.)</Label>
                        <Input
                          type="number"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-32 text-right"
                          step="0.1"
                        />
                      </div>
                      <Slider
                        value={[interestRate]}
                        onValueChange={([value]) => setInterestRate(value)}
                        min={6}
                        max={24}
                        step={0.1}
                        className="py-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>6%</span>
                        <span>24%</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Loan Tenure (Months)</Label>
                        <Input
                          type="number"
                          value={tenure}
                          onChange={(e) => setTenure(Number(e.target.value))}
                          className="w-32 text-right"
                        />
                      </div>
                      <Slider
                        value={[tenure]}
                        onValueChange={([value]) => setTenure(value)}
                        min={6}
                        max={360}
                        step={6}
                        className="py-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>6 months</span>
                        <span>30 years</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Result Section */}
                <div className="space-y-6">
                  <Card className="p-8 shadow-medium gradient-primary text-white">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center">
                          <TrendingUp className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm opacity-90">Monthly EMI</p>
                          <h3 className="text-4xl font-bold">{formatCurrency(emiResult.emi)}</h3>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8 shadow-medium space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <PieChart className="h-5 w-5 text-primary" />
                      <h3 className="font-bold text-lg">Payment Breakdown</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-primary/5">
                        <p className="text-sm text-muted-foreground mb-1">Principal Amount</p>
                        <p className="text-xl font-bold text-primary">{formatCurrency(emiResult.principal)}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-secondary/5">
                        <p className="text-sm text-muted-foreground mb-1">Total Interest</p>
                        <p className="text-xl font-bold text-secondary">{formatCurrency(emiResult.totalInterest)}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Payment</span>
                        <span className="text-2xl font-bold">{formatCurrency(emiResult.totalAmount)}</span>
                      </div>
                    </div>

                    {/* Visual Breakdown */}
                    <div className="space-y-2 pt-4">
                      <div className="flex gap-2">
                        <div 
                          className="h-4 rounded-l-full bg-primary"
                          style={{ width: `${(emiResult.principal / emiResult.totalAmount) * 100}%` }}
                        />
                        <div 
                          className="h-4 rounded-r-full bg-secondary"
                          style={{ width: `${(emiResult.totalInterest / emiResult.totalAmount) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Principal ({Math.round((emiResult.principal / emiResult.totalAmount) * 100)}%)</span>
                        <span>Interest ({Math.round((emiResult.totalInterest / emiResult.totalAmount) * 100)}%)</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Eligibility Calculator */}
            <TabsContent value="eligibility" className="space-y-8 animate-in fade-in">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <Card className="p-8 shadow-medium space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Check Your Eligibility</h2>
                    <p className="text-muted-foreground">Find out how much loan you can get</p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Monthly Income</Label>
                        <Input
                          type="number"
                          value={monthlyIncome}
                          onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                          className="w-32 text-right"
                        />
                      </div>
                      <Slider
                        value={[monthlyIncome]}
                        onValueChange={([value]) => setMonthlyIncome(value)}
                        min={10000}
                        max={500000}
                        step={5000}
                        className="py-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>₹10K</span>
                        <span>₹5L</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Existing EMI (if any)</Label>
                        <Input
                          type="number"
                          value={existingEmi}
                          onChange={(e) => setExistingEmi(Number(e.target.value))}
                          className="w-32 text-right"
                        />
                      </div>
                      <Slider
                        value={[existingEmi]}
                        onValueChange={([value]) => setExistingEmi(value)}
                        min={0}
                        max={100000}
                        step={1000}
                        className="py-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>₹0</span>
                        <span>₹1L</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Desired Tenure (Months)</Label>
                        <Input
                          type="number"
                          value={eligibilityTenure}
                          onChange={(e) => setEligibilityTenure(Number(e.target.value))}
                          className="w-32 text-right"
                        />
                      </div>
                      <Slider
                        value={[eligibilityTenure]}
                        onValueChange={([value]) => setEligibilityTenure(value)}
                        min={6}
                        max={360}
                        step={6}
                        className="py-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>6 months</span>
                        <span>30 years</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Result Section */}
                <div className="space-y-6">
                  <Card className="p-8 shadow-medium gradient-secondary text-white">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center">
                          <TrendingUp className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm opacity-90">You're Eligible For</p>
                          <h3 className="text-4xl font-bold">{formatCurrency(eligibilityResult.eligibleAmount)}</h3>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8 shadow-medium space-y-6">
                    <h3 className="font-bold text-lg">Eligibility Details</h3>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 rounded-lg bg-muted">
                        <span className="text-muted-foreground">Monthly Income</span>
                        <span className="font-bold">{formatCurrency(monthlyIncome)}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 rounded-lg bg-muted">
                        <span className="text-muted-foreground">Existing EMI</span>
                        <span className="font-bold text-destructive">- {formatCurrency(existingEmi)}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <span className="text-muted-foreground">Net Monthly Income</span>
                        <span className="font-bold text-primary">{formatCurrency(eligibilityResult.netIncome)}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                        <span className="text-muted-foreground">Max EMI (50% of net income)</span>
                        <span className="font-bold text-secondary">{formatCurrency(eligibilityResult.maxEmi)}</span>
                      </div>
                    </div>

                    <div className="pt-6 border-t space-y-4">
                      <p className="text-sm text-muted-foreground">
                        * Eligibility calculated at 10.5% p.a. for {eligibilityTenure} months tenure
                      </p>
                      <Button onClick={() => navigate("/apply")} className="w-full gradient-primary shadow-glow">
                        Apply for Loan
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Info Card */}
          <Card className="mt-12 p-8 bg-muted/50">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Ready to Apply?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Now that you know your EMI and eligibility, take the next step. Apply now and get instant approval from multiple lenders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => navigate("/apply")} size="lg" className="gradient-primary shadow-glow">
                  Start Application
                </Button>
                <Button onClick={() => navigate("/")} size="lg" variant="outline">
                  Back to Home
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
