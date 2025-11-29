import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const totalSteps = 4;

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
    salary: "",
    experience: "",
  });

  const handleNext = () => {
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
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const progress = (step / totalSteps) * 100;

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
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <Card className="p-6 mb-8 shadow-soft">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Step {step} of {totalSteps}</span>
                <span className="text-muted-foreground">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span className={step >= 1 ? "text-primary font-medium" : ""}>Contact</span>
                <span className={step >= 2 ? "text-primary font-medium" : ""}>Personal</span>
                <span className={step >= 3 ? "text-primary font-medium" : ""}>Employment</span>
                <span className={step >= 4 ? "text-primary font-medium" : ""}>Review</span>
              </div>
            </div>
          </Card>

          {/* Step 1: Contact Information */}
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

          {/* Step 2: Personal Details */}
          {step === 2 && (
            <Card className="p-8 shadow-medium animate-in fade-in slide-in-from-bottom-4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Personal Details</h2>
                  <p className="text-muted-foreground">We'll auto-fetch details using your PAN</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Number *</Label>
                    <Input
                      id="pan"
                      type="text"
                      placeholder="ABCDE1234F"
                      value={formData.pan}
                      onChange={(e) => updateFormData("pan", e.target.value.toUpperCase())}
                      className="h-12 uppercase"
                      maxLength={10}
                    />
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
                      <Label htmlFor="industry">Industry *</Label>
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
                      <Label htmlFor="employmentType">Employment Type *</Label>
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
                      <p className="text-xs text-muted-foreground">Minimum ₹12,000</p>
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
                </div>
              </div>
            </Card>
          )}

          {/* Step 4: Review & Submit */}
          {step === 4 && (
            <Card className="p-8 shadow-medium animate-in fade-in slide-in-from-bottom-4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Review Your Application</h2>
                  <p className="text-muted-foreground">Please verify all information before submitting</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">{formData.phone || "Not provided"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Pincode</p>
                        <p className="font-medium">{formData.pincode || "Not provided"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">Personal Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Full Name</p>
                        <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{formData.email || "Not provided"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">PAN</p>
                        <p className="font-medium">{formData.pan || "Not provided"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date of Birth</p>
                        <p className="font-medium">{formData.dob || "Not provided"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">Employment Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Company</p>
                        <p className="font-medium">{formData.company || "Not provided"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Industry</p>
                        <p className="font-medium">{formData.industry || "Not provided"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Monthly Salary</p>
                        <p className="font-medium">₹{formData.salary || "0"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Experience</p>
                        <p className="font-medium">{formData.experience || "Not provided"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium mb-1">Ready to submit?</p>
                    <p className="text-muted-foreground">
                      By submitting, you agree to our terms and authorize us to check your credit score and eligibility.
                    </p>
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
              disabled={step === 1}
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
