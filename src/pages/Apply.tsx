import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const [loadingPAN, setLoadingPAN] = useState(false);
  const [hasCoApplicant, setHasCoApplicant] = useState(false);
  const [salarySlipFile, setSalarySlipFile] = useState<File | null>(null);
  const [bankStatementFile, setBankStatementFile] = useState<File | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    phone: "",
    pincode: "",
    pan: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    company: "",
    industry: "",
    employmentType: "",
    companyConstitution: "",
    modeOfSalary: "",
    salary: "",
    experience: "",
    currentAddress: "",
    permanentAddress: "",
    officeAddress: "",
    employmentCategory: "",
    salaryCycle: "",
    coApplicantName: "",
    coApplicantRelation: "",
    coApplicantContact: "",
    coApplicantIncome: "",
    financier: "",
    otherFinancier: "",
  });

  // Simulate PAN auto-fetch
  const handlePANChange = async (pan: string) => {
    updateFormData("pan", pan.toUpperCase());
    if (pan.length === 10) {
      setLoadingPAN(true);
      // Simulate API call
      setTimeout(() => {
        // Mock auto-fetched data
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

  // Handle file uploads
  const handleSalarySlipUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF file for salary slip.",
          variant: "destructive",
        });
        return;
      }
      setSalarySlipFile(file);
      toast({
        title: "Salary Slip Uploaded",
        description: `${file.name} has been successfully uploaded.`,
      });
    }
  };

  const handleBankStatementUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF file for bank statement.",
          variant: "destructive",
        });
        return;
      }
      setBankStatementFile(file);
      toast({
        title: "Bank Statement Uploaded",
        description: `${file.name} has been successfully uploaded.`,
      });
    }
  };

  // Validate salary minimum
  const validateSalary = (salary: string) => {
    const salaryNum = parseInt(salary);
    if (salaryNum < 12000) {
      toast({
        title: "Invalid Salary",
        description: "Minimum monthly salary must be ₹12,000",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleNext = () => {
    // Validation for Step 2
    if (step === 2 && formData.salary && !validateSalary(formData.salary)) {
      return;
    }

    // Validation for Step 3 - File upload based on employment type
    if (step === 3) {
      if (formData.employmentType === "salaried" && !salarySlipFile) {
        toast({
          title: "Salary Slip Required",
          description: "Please upload your salary slip to continue.",
          variant: "destructive",
        });
        return;
      }
      
      if ((formData.employmentType === "self-employed" || formData.employmentType === "business") && !bankStatementFile) {
        toast({
          title: "Bank Statement Required",
          description: "Please upload your bank statement to continue.",
          variant: "destructive",
        });
        return;
      }
    }

    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      toast({
        title: "Application Submitted!",
        description: "We're processing your loan application. You'll hear from us soon.",
      });
      navigate("/offers");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/aggregator");
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const progress = (step / totalSteps) * 100;

  const stepLabels = ["Contact", "Personal", "Employment", "Address", "Co-Applicant", "Financier"];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <button onClick={() => navigate("/")} className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            FinLend
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 mb-8 shadow-soft">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Step {step} of {totalSteps}</span>
                <span className="text-muted-foreground">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                {stepLabels.map((label, idx) => (
                  <span key={idx} className={step > idx ? "text-primary font-medium" : ""}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Step 1: Phone Number + Pincode */}
          {step === 1 && (
            <Card className="p-8 shadow-medium animate-in fade-in slide-in-from-bottom-4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                  <p className="text-muted-foreground">Let's start with your basic details</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      className="h-12"
                    />
                    <p className="text-xs text-muted-foreground">We'll send an OTP for verification</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input
                      id="pincode"
                      type="text"
                      placeholder="Enter your pincode"
                      value={formData.pincode}
                      onChange={(e) => updateFormData("pincode", e.target.value)}
                      className="h-12"
                      maxLength={6}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 p-4 rounded-lg bg-secondary/10 text-secondary text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>Your information is encrypted and secure</span>
                </div>
              </div>
            </Card>
          )}

          {/* Step 2: Basic Details with PAN Auto-fetch */}
          {step === 2 && (
            <Card className="p-8 shadow-medium animate-in fade-in slide-in-from-bottom-4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Personal Details</h2>
                  <p className="text-muted-foreground">Enter your PAN to auto-fetch details</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Number *</Label>
                    <div className="relative">
                      <Input
                        id="pan"
                        type="text"
                        placeholder="ABCDE1234F"
                        value={formData.pan}
                        onChange={(e) => handlePANChange(e.target.value)}
                        className="h-12 uppercase"
                        maxLength={10}
                      />
                      {loadingPAN && (
                        <Loader2 className="absolute right-3 top-3.5 h-5 w-5 animate-spin text-primary" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">Details will be auto-filled from PAN</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => updateFormData("firstName", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth *</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={formData.dob}
                        onChange={(e) => updateFormData("dob", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Step 3: Employment Details */}
          {step === 3 && (
            <Card className="p-8 shadow-medium animate-in fade-in slide-in-from-bottom-4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Employment Details</h2>
                  <p className="text-muted-foreground">Tell us about your current employment</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Enter company name"
                      value={formData.company}
                      onChange={(e) => updateFormData("company", e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Company Industry *</Label>
                      <Select value={formData.industry} onValueChange={(val) => updateFormData("industry", val)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="it">IT & Software</SelectItem>
                          <SelectItem value="finance">Finance & Banking</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employmentType">Type of Employment *</Label>
                      <Select value={formData.employmentType} onValueChange={(val) => updateFormData("employmentType", val)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="salaried">Salaried</SelectItem>
                          <SelectItem value="self-employed">Self Employed</SelectItem>
                          <SelectItem value="business">Business Owner</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyConstitution">Company Constitution *</Label>
                      <Select value={formData.companyConstitution} onValueChange={(val) => updateFormData("companyConstitution", val)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select constitution" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Private Limited</SelectItem>
                          <SelectItem value="public">Public Limited</SelectItem>
                          <SelectItem value="llp">LLP</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="proprietorship">Proprietorship</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="modeOfSalary">Mode of Salary *</Label>
                      <Select value={formData.modeOfSalary} onValueChange={(val) => updateFormData("modeOfSalary", val)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                          <SelectItem value="cash">Cash</SelectItem>
                          <SelectItem value="cheque">Cheque</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="salary">Monthly Take Home Salary *</Label>
                      <Input
                        id="salary"
                        type="number"
                        placeholder="₹ 50,000"
                        value={formData.salary}
                        onChange={(e) => updateFormData("salary", e.target.value)}
                        className="h-12"
                        min="12000"
                      />
                      <p className="text-xs text-muted-foreground">Minimum ₹12,000 required</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Total Work Experience *</Label>
                      <Select value={formData.experience} onValueChange={(val) => updateFormData("experience", val)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5+">5+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Conditional File Upload Section */}
                  {formData.employmentType && (
                    <div className="space-y-4 pt-4 border-t animate-in fade-in slide-in-from-top-2">
                      <div className="space-y-2">
                        <Label className="text-base font-semibold">
                          {formData.employmentType === "salaried" 
                            ? "Upload Salary Slip *" 
                            : "Upload Bank Statement *"}
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          {formData.employmentType === "salaried"
                            ? "Please upload your latest salary slip (PDF only)"
                            : "Please upload your last 3 months bank statement (PDF only)"}
                        </p>
                        
                        {formData.employmentType === "salaried" ? (
                          <div className="space-y-2">
                            <Input
                              id="salarySlip"
                              type="file"
                              accept=".pdf"
                              onChange={handleSalarySlipUpload}
                              className="h-12"
                            />
                            {salarySlipFile && (
                              <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200">
                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                                <span className="text-sm font-medium text-green-800">
                                  {salarySlipFile.name}
                                </span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Input
                              id="bankStatement"
                              type="file"
                              accept=".pdf"
                              onChange={handleBankStatementUpload}
                              className="h-12"
                            />
                            {bankStatementFile && (
                              <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200">
                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                                <span className="text-sm font-medium text-green-800">
                                  {bankStatementFile.name}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          )}

          {/* Step 4: Address & Employment */}
          {step === 4 && (
            <Card className="p-8 shadow-medium animate-in fade-in slide-in-from-bottom-4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Address & Employment</h2>
                  <p className="text-muted-foreground">Provide your address details</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentAddress">Current Address *</Label>
                    <Input
                      id="currentAddress"
                      type="text"
                      placeholder="Enter current address"
                      value={formData.currentAddress}
                      onChange={(e) => updateFormData("currentAddress", e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="permanentAddress">Permanent Address *</Label>
                    <Input
                      id="permanentAddress"
                      type="text"
                      placeholder="Enter permanent address"
                      value={formData.permanentAddress}
                      onChange={(e) => updateFormData("permanentAddress", e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="officeAddress">Office Address *</Label>
                    <Input
                      id="officeAddress"
                      type="text"
                      placeholder="Enter office address"
                      value={formData.officeAddress}
                      onChange={(e) => updateFormData("officeAddress", e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="employmentCategory">Employment Category *</Label>
                      <Select value={formData.employmentCategory} onValueChange={(val) => updateFormData("employmentCategory", val)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="public-sector">Public Sector</SelectItem>
                          <SelectItem value="mnc">MNC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salaryCycle">Salary Cycle *</Label>
                      <Select value={formData.salaryCycle} onValueChange={(val) => updateFormData("salaryCycle", val)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select cycle" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Step 5: Co-Applicant (Optional) */}
          {step === 5 && (
            <Card className="p-8 shadow-medium animate-in fade-in slide-in-from-bottom-4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Co-Applicant Details</h2>
                  <p className="text-muted-foreground">Add a co-applicant (optional)</p>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <Checkbox
                    id="hasCoApplicant"
                    checked={hasCoApplicant}
                    onCheckedChange={(checked) => setHasCoApplicant(checked as boolean)}
                  />
                  <Label htmlFor="hasCoApplicant" className="cursor-pointer">
                    I have a co-applicant
                  </Label>
                </div>
                {hasCoApplicant && (
                  <div className="space-y-4 animate-in fade-in">
                    <div className="space-y-2">
                      <Label htmlFor="coApplicantName">Co-Applicant Name *</Label>
                      <Input
                        id="coApplicantName"
                        type="text"
                        placeholder="Enter co-applicant name"
                        value={formData.coApplicantName}
                        onChange={(e) => updateFormData("coApplicantName", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="coApplicantRelation">Relation *</Label>
                        <Select value={formData.coApplicantRelation} onValueChange={(val) => updateFormData("coApplicantRelation", val)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select relation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="spouse">Spouse</SelectItem>
                            <SelectItem value="parent">Parent</SelectItem>
                            <SelectItem value="sibling">Sibling</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="coApplicantContact">Contact Number *</Label>
                        <Input
                          id="coApplicantContact"
                          type="tel"
                          placeholder="Enter contact number"
                          value={formData.coApplicantContact}
                          onChange={(e) => updateFormData("coApplicantContact", e.target.value)}
                          className="h-12"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="coApplicantIncome">Monthly Income *</Label>
                      <Input
                        id="coApplicantIncome"
                        type="number"
                        placeholder="₹ 50,000"
                        value={formData.coApplicantIncome}
                        onChange={(e) => updateFormData("coApplicantIncome", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* Step 6: Select Financier */}
          {step === 6 && (
            <Card className="p-8 shadow-medium animate-in fade-in slide-in-from-bottom-4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Select Financier</h2>
                  <p className="text-muted-foreground">Choose your preferred bank or NBFC, or select auto-suggested best options</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="financier">Preferred Financier *</Label>
                    <Select value={formData.financier} onValueChange={(val) => updateFormData("financier", val)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select or choose auto-suggested" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Auto-Suggested Best Options (Recommended)</SelectItem>
                        <SelectItem value="hdfc">HDFC Bank</SelectItem>
                        <SelectItem value="icici">ICICI Bank</SelectItem>
                        <SelectItem value="sbi">State Bank of India</SelectItem>
                        <SelectItem value="axis">Axis Bank</SelectItem>
                        <SelectItem value="bajaj">Bajaj Finserv</SelectItem>
                        <SelectItem value="fullerton">Fullerton India</SelectItem>
                        <SelectItem value="home-credit">Home Credit</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      Auto-suggested options are based on your eligibility and best rates
                    </p>
                  </div>
                  {formData.financier === "other" && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                      <Label htmlFor="otherFinancier">Please specify the financier name *</Label>
                      <Input
                        id="otherFinancier"
                        type="text"
                        placeholder="Enter bank or NBFC name"
                        value={formData.otherFinancier}
                        onChange={(e) => updateFormData("otherFinancier", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  )}
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm font-medium mb-2">What happens next?</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>We'll check your eligibility</li>
                      <li>Compare offers from selected financiers</li>
                      <li>Show you the best loan options</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              onClick={handleBack}
              variant="outline"
              size="lg"
              className="min-w-[120px]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              size="lg"
              className="gradient-primary min-w-[120px] shadow-glow"
            >
              {step === totalSteps ? "Submit" : "Next"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;