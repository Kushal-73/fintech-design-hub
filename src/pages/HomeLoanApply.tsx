import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, Home, MapPin, Building2, User, Banknote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir", "Ladakh"
];

const HomeLoanApply = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  const [loadingPAN, setLoadingPAN] = useState(false);

  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    pan: "",
    firstName: "",
    lastName: "",
    dob: "",
    propertyIdentified: "",
    propertyType: "",
    propertyState: "",
    propertyCity: "",
    propertyLocality: "",
    constructionStatus: "",
    builderType: "",
    builderName: "",
    expectedPossession: "",
    loanAmount: "",
    loanPurpose: "",
    employmentType: "",
    monthlyIncome: "",
    financier: "",
  });

  const handlePANChange = async (pan: string) => {
    updateFormData("pan", pan.toUpperCase());
    if (pan.length === 10) {
      setLoadingPAN(true);
      setTimeout(() => {
        updateFormData("firstName", "John");
        updateFormData("lastName", "Doe");
        updateFormData("dob", "1990-01-15");
        setLoadingPAN(false);
        toast({
          title: "Details Fetched",
          description: "Personal details have been auto-filled from PAN.",
        });
      }, 1500);
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      toast({
        title: "Application Submitted!",
        description: "We're processing your home loan application. You'll hear from us soon.",
      });
      navigate("/offers");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const progress = (step / totalSteps) * 100;

  const stepLabels = ["Contact", "Property", "Builder", "Income", "Financier"];
  const stepIcons = [User, MapPin, Building2, Banknote, Home];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-950 dark:via-purple-950 dark:to-indigo-950">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate("/")} className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            FinLend
          </button>
          <span className="text-muted-foreground">|</span>
          <span className="text-sm font-medium text-muted-foreground">Home Loan Application</span>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-6 mb-6 shadow-lg border-2 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-primary">Step {step} of {totalSteps}</span>
                <span className="text-muted-foreground">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between">
                {stepLabels.map((label, idx) => {
                  const Icon = stepIcons[idx];
                  const isCompleted = step > idx + 1;
                  const isCurrent = step === idx + 1;
                  return (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-all ${
                        isCompleted ? "bg-green-500 text-white" :
                        isCurrent ? "bg-primary text-white" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                      </div>
                      <span className={`text-xs ${isCurrent ? "text-primary font-medium" : "text-muted-foreground"}`}>
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {step === 1 && (
            <Card className="p-8 shadow-xl animate-in fade-in slide-in-from-bottom-4 border-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Contact & Personal Details</h2>
                      <p className="text-muted-foreground">Let's start with your basic information</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" data-testid="label-phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="h-12"
                        data-testid="input-phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" data-testid="label-email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="h-12"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pan" data-testid="label-pan">PAN Number *</Label>
                    <div className="relative">
                      <Input
                        id="pan"
                        type="text"
                        placeholder="ABCDE1234F"
                        value={formData.pan}
                        onChange={(e) => handlePANChange(e.target.value)}
                        className="h-12 uppercase"
                        maxLength={10}
                        data-testid="input-pan"
                      />
                      {loadingPAN && (
                        <Loader2 className="absolute right-3 top-3.5 h-5 w-5 animate-spin text-primary" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">Details will be auto-filled from PAN</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" data-testid="label-firstname">First Name *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => updateFormData("firstName", e.target.value)}
                        className="h-12"
                        data-testid="input-firstname"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" data-testid="label-lastname">Last Name *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        className="h-12"
                        data-testid="input-lastname"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob" data-testid="label-dob">Date of Birth *</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={formData.dob}
                      onChange={(e) => updateFormData("dob", e.target.value)}
                      className="h-12"
                      data-testid="input-dob"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 p-4 rounded-lg bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 text-sm border border-green-200 dark:border-green-800">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>Your information is encrypted and secure</span>
                </div>
              </div>
            </Card>
          )}

          {step === 2 && (
            <Card className="p-8 shadow-xl animate-in fade-in slide-in-from-bottom-4 border-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Property Information</h2>
                      <p className="text-muted-foreground">Tell us about the property you're purchasing</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="space-y-3">
                    <Label data-testid="label-property-identified">Have you identified the property? *</Label>
                    <RadioGroup
                      value={formData.propertyIdentified}
                      onValueChange={(val) => updateFormData("propertyIdentified", val)}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg flex-1 cursor-pointer hover:border-primary transition-colors">
                        <RadioGroupItem value="yes" id="prop-yes" data-testid="radio-property-yes" />
                        <Label htmlFor="prop-yes" className="cursor-pointer flex-1">Yes, I have</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg flex-1 cursor-pointer hover:border-primary transition-colors">
                        <RadioGroupItem value="no" id="prop-no" data-testid="radio-property-no" />
                        <Label htmlFor="prop-no" className="cursor-pointer flex-1">Not yet</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyType" data-testid="label-property-type">Property Type *</Label>
                    <Select value={formData.propertyType} onValueChange={(val) => updateFormData("propertyType", val)}>
                      <SelectTrigger className="h-12" data-testid="select-property-type">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="flat">Flat / Apartment</SelectItem>
                        <SelectItem value="house">Independent House</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="plot">Plot / Land</SelectItem>
                        <SelectItem value="builder-floor">Builder Floor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="propertyState" data-testid="label-property-state">State *</Label>
                      <Select value={formData.propertyState} onValueChange={(val) => updateFormData("propertyState", val)}>
                        <SelectTrigger className="h-12" data-testid="select-property-state">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          {indianStates.map((state) => (
                            <SelectItem key={state} value={state.toLowerCase().replace(/\s+/g, '-')}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="propertyCity" data-testid="label-property-city">City *</Label>
                      <Input
                        id="propertyCity"
                        type="text"
                        placeholder="Enter city name"
                        value={formData.propertyCity}
                        onChange={(e) => updateFormData("propertyCity", e.target.value)}
                        className="h-12"
                        data-testid="input-property-city"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyLocality" data-testid="label-property-locality">Locality / Area</Label>
                    <Input
                      id="propertyLocality"
                      type="text"
                      placeholder="Enter locality or area name"
                      value={formData.propertyLocality}
                      onChange={(e) => updateFormData("propertyLocality", e.target.value)}
                      className="h-12"
                      data-testid="input-property-locality"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loanPurpose" data-testid="label-loan-purpose">Purpose of Loan *</Label>
                    <Select value={formData.loanPurpose} onValueChange={(val) => updateFormData("loanPurpose", val)}>
                      <SelectTrigger className="h-12" data-testid="select-loan-purpose">
                        <SelectValue placeholder="Select purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="purchase">Purchase New Property</SelectItem>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="renovation">Renovation / Extension</SelectItem>
                        <SelectItem value="transfer">Balance Transfer</SelectItem>
                        <SelectItem value="top-up">Top-up on Existing Loan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {step === 3 && (
            <Card className="p-8 shadow-xl animate-in fade-in slide-in-from-bottom-4 border-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Builder & Construction Details</h2>
                      <p className="text-muted-foreground">Information about the property construction</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="constructionStatus" data-testid="label-construction-status">Construction Status *</Label>
                    <Select value={formData.constructionStatus} onValueChange={(val) => updateFormData("constructionStatus", val)}>
                      <SelectTrigger className="h-12" data-testid="select-construction-status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ready">Ready to Move</SelectItem>
                        <SelectItem value="under-construction">Under Construction</SelectItem>
                        <SelectItem value="pre-launch">Pre-Launch / Booking</SelectItem>
                        <SelectItem value="resale">Resale Property</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="builderType" data-testid="label-builder-type">Who is Building the Property? *</Label>
                    <Select value={formData.builderType} onValueChange={(val) => updateFormData("builderType", val)}>
                      <SelectTrigger className="h-12" data-testid="select-builder-type">
                        <SelectValue placeholder="Select builder type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reputed-builder">Reputed Builder / Developer</SelectItem>
                        <SelectItem value="local-builder">Local Builder</SelectItem>
                        <SelectItem value="self-construction">Self Construction</SelectItem>
                        <SelectItem value="government">Government / Authority (DDA, MHADA, etc.)</SelectItem>
                        <SelectItem value="cooperative">Cooperative Society</SelectItem>
                        <SelectItem value="individual">Individual Seller</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {(formData.builderType === "reputed-builder" || formData.builderType === "local-builder") && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                      <Label htmlFor="builderName" data-testid="label-builder-name">Builder / Developer Name *</Label>
                      <Input
                        id="builderName"
                        type="text"
                        placeholder="Enter builder or developer name"
                        value={formData.builderName}
                        onChange={(e) => updateFormData("builderName", e.target.value)}
                        className="h-12"
                        data-testid="input-builder-name"
                      />
                    </div>
                  )}

                  {formData.constructionStatus === "under-construction" && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                      <Label htmlFor="expectedPossession" data-testid="label-expected-possession">Expected Possession Date</Label>
                      <Input
                        id="expectedPossession"
                        type="month"
                        value={formData.expectedPossession}
                        onChange={(e) => updateFormData("expectedPossession", e.target.value)}
                        className="h-12"
                        data-testid="input-expected-possession"
                      />
                    </div>
                  )}

                  <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>Note:</strong> Properties from RERA-registered builders may get faster loan approvals and better interest rates.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {step === 4 && (
            <Card className="p-8 shadow-xl animate-in fade-in slide-in-from-bottom-4 border-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                      <Banknote className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Income & Loan Details</h2>
                      <p className="text-muted-foreground">Help us understand your financial profile</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="loanAmount" data-testid="label-loan-amount">Loan Amount Required *</Label>
                    <Input
                      id="loanAmount"
                      type="number"
                      placeholder="Enter amount in Rupees"
                      value={formData.loanAmount}
                      onChange={(e) => updateFormData("loanAmount", e.target.value)}
                      className="h-12"
                      data-testid="input-loan-amount"
                    />
                    <p className="text-xs text-muted-foreground">Usually up to 80-90% of property value</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employmentType" data-testid="label-employment-type">Employment Type *</Label>
                    <Select value={formData.employmentType} onValueChange={(val) => updateFormData("employmentType", val)}>
                      <SelectTrigger className="h-12" data-testid="select-employment-type">
                        <SelectValue placeholder="Select employment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="salaried">Salaried - Private</SelectItem>
                        <SelectItem value="salaried-govt">Salaried - Government</SelectItem>
                        <SelectItem value="self-employed-professional">Self Employed Professional</SelectItem>
                        <SelectItem value="self-employed-business">Self Employed Business</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthlyIncome" data-testid="label-monthly-income">Monthly Income *</Label>
                    <Input
                      id="monthlyIncome"
                      type="number"
                      placeholder="Enter monthly income"
                      value={formData.monthlyIncome}
                      onChange={(e) => updateFormData("monthlyIncome", e.target.value)}
                      className="h-12"
                      data-testid="input-monthly-income"
                    />
                    <p className="text-xs text-muted-foreground">Combined income if applying with co-applicant</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-800">
                    <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Estimated EMI</p>
                    <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                      {formData.loanAmount ? `₹${Math.round(parseInt(formData.loanAmount) * 0.0085).toLocaleString()}/month` : "Enter loan amount"}
                    </p>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">*Approximate at 8.5% interest for 20 years</p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {step === 5 && (
            <Card className="p-8 shadow-xl animate-in fade-in slide-in-from-bottom-4 border-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Home className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Select Financier</h2>
                      <p className="text-muted-foreground">Choose your preferred bank or let us find the best for you</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="financier" data-testid="label-financier">Preferred Financier *</Label>
                    <Select value={formData.financier} onValueChange={(val) => updateFormData("financier", val)}>
                      <SelectTrigger className="h-12" data-testid="select-financier">
                        <SelectValue placeholder="Select or choose auto-suggested" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Auto-Suggested Best Options (Recommended)</SelectItem>
                        <SelectItem value="sbi">State Bank of India (8.40%)</SelectItem>
                        <SelectItem value="hdfc">HDFC Bank (8.50%)</SelectItem>
                        <SelectItem value="icici">ICICI Bank (8.60%)</SelectItem>
                        <SelectItem value="axis">Axis Bank (8.55%)</SelectItem>
                        <SelectItem value="bob">Bank of Baroda (8.35%)</SelectItem>
                        <SelectItem value="pnb">Punjab National Bank (8.40%)</SelectItem>
                        <SelectItem value="lic">LIC Housing Finance (8.45%)</SelectItem>
                        <SelectItem value="kotak">Kotak Mahindra Bank (8.65%)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      Auto-suggested options are based on your eligibility and best rates
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-base font-semibold mb-3">What happens next?</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>We'll check your eligibility with multiple lenders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Compare interest rates and processing fees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Show you personalized loan offers within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Dedicated relationship manager for your application</span>
                      </li>
                    </ul>
                  </div>

                  <Card className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">No Impact on Credit Score</p>
                        <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                          Your application will be soft-checked only. No hard inquiry on your credit report.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          )}

          <div className="flex justify-between mt-8">
            <Button
              onClick={handleBack}
              variant="outline"
              size="lg"
              className="min-w-[120px]"
              data-testid="button-back"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              size="lg"
              className="gradient-primary min-w-[140px] shadow-lg"
              data-testid="button-next"
            >
              {step === totalSteps ? "Submit Application" : "Continue"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoanApply;
