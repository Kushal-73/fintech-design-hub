import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, FileText, Search, Shield, BarChart, CheckCircle2, ChevronLeft, ChevronRight, Building, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AuditTaxation = () => {
  const navigate = useNavigate();
  const [activeAuditService, setActiveAuditService] = useState("management-audit");
  const [activeTaxationService, setActiveTaxationService] = useState("corporate-taxation");

  const auditServices = [
    {
      id: "management-audit",
      title: "MANAGEMENT AUDIT",
      icon: BarChart,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Have a small business, a start-up, or a company with small to mid-sized operations?
              </p>
              <p>
                Management Audit should be in your top consideration. It helps identify and explore mistakes that can be imperative for the proper functioning of the entity.
              </p>
              <p>
                Management audit offers an assessment of controls and their effectiveness in business operations. It is a systematic examination of decisions and actions undertaken, by the management, to analyse its impact.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "system-audit",
      title: "SYSTEM AUDIT",
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                With the continually growing need for IT, financial reporting, and the increasing complexity, the focus towards information produced by systems and processes is growing.
              </p>
              <p>
                Now, greater emphasis is being put on internal control and maintenance.
              </p>
              <p>
                At FinLend, we focus on the design, documentation, and operation to ensure the accuracy and timeliness of information used for financial reporting and management decision-making.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "revenue-inspection-audit",
      title: "REVENUE & INSPECTION AUDIT",
      icon: Search,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Revenue and inspection audit are imperative when you want a thorough examination of your tax returns, a declaration of liability, or a repayment claim.
              </p>
              <p>
                We help you cross-check the information and figures stated or declared by you in the tax return statements versus business records.
              </p>
              <p>
                Revenue and Inspection Audit consists of:
              </p>
              <p>
                Income Tax, Corporation Tax or Capital Gains Tax returns
              </p>
              <p>
                The returns submitted in respect of VAT, PAYE/PRSI or Relevant Contracts Tax (RCT)
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "concurrent-audit",
      title: "CONCURRENT AUDIT",
      icon: CheckCircle2,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Want to ensure accuracy, authenticity, and compliance?
              </p>
              <p>
                "Concurrent Audit" is your go-to option. It is a timely and systematic examination of financial transactions performed regularly.
              </p>
              <p>
                This audit aims to shorten the interval between a transaction and its examination. It emphasizes substantive checking in key areas of operations.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "internal-audit",
      title: "INTERNAL AUDIT",
      icon: FileText,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Want to know if your organization is functioning the way it should be? Whether you have the true picture of its state of affairs? Internal audit is imperative to understanding and assessing risks, as well as evaluating internal controls. It helps in ensuring optimum utilization of the resources available with the organization and builds a thorough understanding of the liabilities. Internal Audit helps to ensure the adequacy of information systems security and controls.
              </p>
              <p>
                Check out our Internal Audit offerings.
              </p>
              <p>
                What we offer:
              </p>
              <p>
                Assessing/preparing Internal Audit Manual for the organization and the study of control objectives.
              </p>
              <p>
                Advising on organizational procedures being followed.
              </p>
              <p>
                Practicality and viability of existing controls and areas of improvement.
              </p>
              <p>
                Assessment of risks and open points.
              </p>
              <p>
                Checking the controls instituted within the system.
              </p>
              <p>
                Identifying possible areas of improvement and stop revenue leakage, if any.
              </p>
              <p>
                Measuring deviation at test check levels.
              </p>
              <p>
                Identifying assets at risk and their protection.
              </p>
              <p>
                Audit of Corporate Governance.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const taxationServices = [
    {
      id: "corporate-taxation",
      title: "CORPORATE TAXATION",
      icon: Building,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                If you are looking for the complete packaged solution for corporate taxation, then we are here to help.
              </p>
              <p>
                Providing all-round services ranging from tax planning to litigation assistance, we aim at leveraging our 20 plus years of experience and extensive knowledge of Indian taxation and other statutory laws for optimum tax planning and other work within the parameters of statutory laws.
              </p>
              <p>
                Implementation of GST process as per business model
              </p>
              <p>
                Filing of various return under GST
              </p>
              <p>
                Monitoring of GST returns and ensuring to the process thereof
              </p>
              <p>
                Tax Deducted at Source (TDS) planning and return planning
              </p>
              <p>
                Calculation of Advance Tax and self-assessment tax
              </p>
              <p>
                Regular Assessments
              </p>
              <p>
                Litigation assistance
              </p>
              <p>
                Counselling with Tax Authorities
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "individual-taxation",
      title: "INDIVIDUAL TAXATION",
      icon: User,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                The primary aim for every individual is to minimize the current and future tax liabilities.
              </p>
              <p>
                At FinLend, we help you achieve that by always being on top of new tax laws and legislations.
              </p>
              <p>
                We are always at a position to identify key tax planning opportunities, that helps us provide strategic tax planning advice to our clients.
              </p>
              <p>
                What we offer:
              </p>
              <p>
                Income Tax planning for salaried and self employed
              </p>
              <p>
                Return filing and ensuring complete submission of the same
              </p>
              <p>
                Income Tax assessment completion
              </p>
              <p>
                Calculation of long term & short-term capital gain on purchase & selling transaction.
              </p>
              <p>
                Tax advisory Services for non-residents
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const activeAuditServiceData = auditServices.find(service => service.id === activeAuditService) || auditServices[0];
  const activeTaxationServiceData = taxationServices.find(service => service.id === activeTaxationService) || taxationServices[0];

  const auditCurrentIndex = auditServices.findIndex(service => service.id === activeAuditService);
  const taxationCurrentIndex = taxationServices.findIndex(service => service.id === activeTaxationService);

  const handleAuditPrev = () => {
    const newIndex = auditCurrentIndex > 0 ? auditCurrentIndex - 1 : auditServices.length - 1;
    setActiveAuditService(auditServices[newIndex].id);
  };

  const handleAuditNext = () => {
    const newIndex = auditCurrentIndex < auditServices.length - 1 ? auditCurrentIndex + 1 : 0;
    setActiveAuditService(auditServices[newIndex].id);
  };

  const handleTaxationPrev = () => {
    const newIndex = taxationCurrentIndex > 0 ? taxationCurrentIndex - 1 : taxationServices.length - 1;
    setActiveTaxationService(taxationServices[newIndex].id);
  };

  const handleTaxationNext = () => {
    const newIndex = taxationCurrentIndex < taxationServices.length - 1 ? taxationCurrentIndex + 1 : 0;
    setActiveTaxationService(taxationServices[newIndex].id);
  };

  return (
    <div className="min-h-screen">
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

      <section className="relative py-12 sm:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Audit & Taxation
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Comprehensive audit and tax services with transparent accounting and timely reporting
            </p>
          </div>
        </div>
      </section>

      {/* Audit Services Slider */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">AUDIT SERVICES</h2>
            
            <div className="mb-8 sm:mb-12">
              {/* Audit Service Navigation Tabs */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6">
                {auditServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Button
                      key={service.id}
                      variant={activeAuditService === service.id ? "default" : "outline"}
                      onClick={() => setActiveAuditService(service.id)}
                      className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 transition-all ${
                        activeAuditService === service.id 
                          ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white" 
                          : ""
                      }`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-sm sm:text-base">{service.title}</span>
                    </Button>
                  );
                })}
              </div>

              {/* Audit Service Content Slider */}
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {/* Navigation Arrows */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleAuditPrev}
                      className="h-10 w-10 sm:h-12 sm:w-12"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                          <activeAuditServiceData.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{activeAuditServiceData.title}</h3>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleAuditNext}
                      className="h-10 w-10 sm:h-12 sm:w-12"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>

                  {/* Audit Service Content */}
                  <div className="mb-6 sm:mb-8">
                    {activeAuditServiceData.content}
                  </div>

                  {/* Audit Slide Indicators */}
                  <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                    {auditServices.map((service, index) => (
                      <button
                        key={service.id}
                        onClick={() => setActiveAuditService(service.id)}
                        className={`h-2 rounded-full transition-all ${
                          activeAuditService === service.id ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Taxation Services Slider */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">TAXATION SERVICES</h2>
            
            <div className="mb-8 sm:mb-12">
              {/* Taxation Service Navigation Tabs */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6">
                {taxationServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Button
                      key={service.id}
                      variant={activeTaxationService === service.id ? "default" : "outline"}
                      onClick={() => setActiveTaxationService(service.id)}
                      className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 transition-all ${
                        activeTaxationService === service.id 
                          ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white" 
                          : ""
                      }`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-sm sm:text-base">{service.title}</span>
                    </Button>
                  );
                })}
              </div>

              {/* Taxation Service Content Slider */}
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {/* Navigation Arrows */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleTaxationPrev}
                      className="h-10 w-10 sm:h-12 sm:w-12"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                          <activeTaxationServiceData.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{activeTaxationServiceData.title}</h3>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleTaxationNext}
                      className="h-10 w-10 sm:h-12 sm:w-12"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>

                  {/* Taxation Service Content */}
                  <div className="mb-6 sm:mb-8">
                    {activeTaxationServiceData.content}
                  </div>

                  {/* Taxation Slide Indicators */}
                  <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                    {taxationServices.map((service, index) => (
                      <button
                        key={service.id}
                        onClick={() => setActiveTaxationService(service.id)}
                        className={`h-2 rounded-full transition-all ${
                          activeTaxationService === service.id ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ensure Compliance & Transparency
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Professional audit and taxation services for your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/apply")}
              className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/contact")}
              className="bg-transparent border-white text-white hover:bg-white/10 font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto"
            >
              Schedule Consultation
            </Button>
          </div>
          <p className="text-white/80 mt-6 sm:mt-8 text-sm sm:text-base">
            Contact our audit & taxation experts: 📞 +91 99999 99999 | ✉️ audit@finlend.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default AuditTaxation;