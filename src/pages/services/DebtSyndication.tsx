import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Home, Briefcase, Building, CreditCard, DollarSign, ChevronLeft, ChevronRight, Globe, FileText, Truck, BarChart, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DebtSyndication = () => {
  const navigate = useNavigate();
  const [activeRetailLoan, setActiveRetailLoan] = useState("business-loans");
  const [activeCorporateLoan, setActiveCorporateLoan] = useState("term-loan");

  const retailLoans = [
    {
      id: "business-loans",
      title: "BUSINESS LOANS",
      icon: Briefcase,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Business loans are unsecured loans that are needed when there is an urgent requirement in the business, and timely disbursement of the same can resolve the problem.
              </p>
              <p>
                We, at FinLend, ensure the unsecured business loan is acquired within a week with the lowest rate available in the market. Our debt expert ensures that the complete process of documentation happens in a smooth timely fashion and provides support until the money is received.
              </p>
              <p>
                Our seamless loan sanction and disbursal procedure ensure that you have a hassle-free experience. Business loans arranged by FinLend are quick, competitive, and transparent.
              </p>
              <p>
                Every business has a different need and requires a different pay cycle. Whatever be your need, talk to us, and we can customize the loan arrangement as per your requirement.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "home-loans",
      title: "HOME LOANS",
      icon: Home,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Have you always dreamed of your own home?
              </p>
              <p>
                We will help you create that space of your own.
              </p>
              <p>
                Our experts advise you on home loans that offer the best interest rate as well as the best tenure available in the market.
              </p>
              <p>
                Beyond this, we will also provide you the legal and technical support, whether it's an apartment, row house, bungalow, or office space.
              </p>
              <p>
                We ensure that your dream property comes with the right decisions and without any legal issue.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const corporateLoans = [
    {
      id: "term-loan",
      title: "TERM LOAN",
      icon: Building,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                After establishing your company as a force to reckon with, as the promoter of the business, you will aspire to expand and grow bigger by starting new operations, entering new markets, and introducing new products.
              </p>
              <p>
                To do this, you may require additional funds for:
              </p>
              <p>
                1. Construction of new building or factory
              </p>
              <p>
                2. Purchase and installation of new machinery
              </p>
              <p>
                Whenever this need arises, a term loan is a product which is the best suited for your requirement and we at FinLend ensure that fund can be raised smoothly and timely so that you may expand your business as planned.
              </p>
              <p>
                Our experts will take care of the preparation of projections, TEV study of the project, viability report of the project, SWOT analysis, and all other documents which are required to submit to the banks.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "working-capital-loan",
      title: "WORKING CAPITAL LOAN",
      icon: CreditCard,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Working capital loans are different from investment loans or equity lines of credit.
              </p>
              <p>
                They are designed specifically to help you cover business operating expenses that come up and affect your day-to-day budget. They provide a temporary influx of cash if you have fallen just a little bit short and allow you to avoid falling behind on bills while you prepare for better revenues in the future.
              </p>
              <p>
                We at FinLend, collect the documents from the company and ensure that all the information reaches the lender correctly, with a detailed analysis of every segment of the company.
              </p>
              <p>
                Our experts in the banking sector prepare the CMA projection, the business model of the company, product structure as per the business model, and ensure that company gets the best available loan structure in the banking sector i.e. fund based and Non-fund based which reduces the effective cost of the company.
              </p>
              <p>
                If you have ever applied for a working capital loan in the past, you know that most lenders require a ton of detailed information for processing the proposal for the sanction of the working capital loan.
              </p>
              <p>
                How does your business operate,
              </p>
              <p>
                What your monthly performance looks like,
              </p>
              <p>
                What the money will be used for,
              </p>
              <p>
                A projection plan that proves your long-term viability,
              </p>
              <p>
                The CMA analysis reflecting the financial health of the company, and so on.
              </p>
              <p>
                It is very difficult for a business to provide all the information which can correctly describe the business and the requirement.
              </p>
              <p>
                We are here to help you!
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "factoring-invoice-discounting",
      title: "FACTORING/INVOICE DISCOUNTING",
      icon: FileText,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Under this type of lending, the bank takes the bill drawn by the borrower on its customer and pays the borrower immediately, deducting some amount as discount/commission.
              </p>
              <p>
                The bank then presents the bill to the borrower's customer on the due date of the invoice and collects the total amount.
              </p>
              <p>
                The borrower or its customer pays the Bank a predetermined interest depending upon the terms of the transaction if the bill is delayed. Bills are categorized into four categories:
              </p>
              <p>
                LCBD (Bill Discounting backed with LC)
              </p>
              <p>
                CBD (Clean Bill Discounting)
              </p>
              <p>
                DBD (Drawee bill discounting)
              </p>
              <p>
                IBD (Invoice bills discounting)
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "import-export-facilities",
      title: "IMPORT/EXPORT FACILITIES",
      icon: Globe,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Looking to get into Import/Exports or you are into it already?
              </p>
              <p>
                Then you must understand all the bank products specifically designed for the businesses that are involved in Import or Exports, such as Pre-Shipment & Post Shipment, Buyers credit, Foreign Letter of credit, etc.
              </p>
              <p>
                The costs of all these products are very less as compared to the cost of domestic products such as Cash Credit, Term Loan, etc. We at FinLend help you to understand the risks involved in the products and arrange the loan funding at the right time.
              </p>
              <p>
                We provide you with detailed international risk analysis and evaluation and assist for financial products that are designed to cater to your distinct needs.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "trade-financing",
      title: "TRADE FINANCING",
      icon: Truck,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Financing options for domestic or international trade transactions is known as Trade Financing.
              </p>
              <p>
                A few types of trade transactions are Letter of credit, Buyers Credit, Bank Guarantee, etc. Trade transactions require a combination of the seller, buyer, and underlying commodity for trade financing. It can be domestic as well as international. Based on the product, you may get financing, which is very cost-effective compared to other loan products, such as Cash credit, PCFC, PSFC, etc.
              </p>
              <p>
                We at FinLend look at the business model and find out the best trade financing option for your business at a very minimal cost. Being repetitive and based on the nature of the transaction, it may be difficult for you to understand the documentation and the process.
              </p>
              <p>
                So, we help you to understand the transaction process and documentation so that you may execute the transaction smoothly and hassle-free.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "project-financing",
      title: "PROJECT FINANCING",
      icon: BarChart,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Project finance is a loan arrangement wherein loan requirement is mainly for a project, and repayment of the same is primarily linked with the project cash flow.
              </p>
              <p>
                Collateral security for the same is also the asset that will be created during the execution of the project. It requires an in-depth study to understand the viability of the project, future cash flow projection, and a timeline by which cash flow will be generated for the repayment of the loan.
              </p>
              <p>
                It additionally requires CPM/PERT analysis for the execution of the project, and in the end, the arrangement of the loan, which suits best with the project execution planning.
              </p>
              <p>
                The experts at FinLend take care of all the requirements for the fundraising for a project and provide 360-degree support until the execution of the project. They also work in line with you to ensure the timely and smooth execution of the project.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "private-equity",
      title: "PRIVATE EQUITY",
      icon: Users,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Private equity investing is a great way to raise money and investment. This funding can be acquired on the seed stage, start-up stage, expansion stage, replacement capital, and buyout.
              </p>
              <p>
                We provide a through and through service from research, assess and develop a definite plan, to facilitate investment with a complete understanding of risks undertaken.
              </p>
              <p>
                Financing expansion through multiple acquisitions is often referred to as a 'buy and build' strategy. Investment styles can vary widely, ranging from growth to value and early to late stage. Furthermore, buyout funds may take either an active or passive management role.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "merger-acquisition",
      title: "MERGER & ACQUISITION",
      icon: Target,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Merger and Acquisition is a significant milestone for businesses.
              </p>
              <p>
                Companies for ages have expanded their business and achieved a global presence through acquisition. It is essential to ensure that every step of the process is performed with careful planning and detailing.
              </p>
              <p>
                FinLend assists in every step, from valuation to negotiation, and ultimately, completion. We assure extensive research and study of the companies by leveraging our considerable experience and knowledge.
              </p>
              <p>
                Sales of Private Companies: We provide sell-side advisory services for owners of private companies seeking to sell at maximum valuation.
              </p>
              <p>
                Acquisitions and Buyouts: We provide buy-side advisory services, including identifying target companies, mediating, negotiating the acquisition, and buyouts.
              </p>
              <p>
                Divestitures: We assist companies with the divestitures of business units, divisions, and subsidiaries.
              </p>
              <p>
                M&A Strategy: We work closely with management to develop top-level corporate strategies for acquisitions, mergers, business sales, and divestitures.
              </p>
              <p>
                M&A Due-Diligence: We provide Merger & Acquisition due-diligence services to thoroughly investigate the target company's financial statements and other relevant information to determine the appropriate valuation for a sale or acquisition.
              </p>
              <p>
                Post-Merger and Acquisition Integration: We provide post-merger and post-acquisition integration consulting to improve the performance of the new business entity.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const activeRetailLoanData = retailLoans.find(loan => loan.id === activeRetailLoan) || retailLoans[0];
  const activeCorporateLoanData = corporateLoans.find(loan => loan.id === activeCorporateLoan) || corporateLoans[0];

  const retailCurrentIndex = retailLoans.findIndex(loan => loan.id === activeRetailLoan);
  const corporateCurrentIndex = corporateLoans.findIndex(loan => loan.id === activeCorporateLoan);

  const handleRetailPrev = () => {
    const newIndex = retailCurrentIndex > 0 ? retailCurrentIndex - 1 : retailLoans.length - 1;
    setActiveRetailLoan(retailLoans[newIndex].id);
  };

  const handleRetailNext = () => {
    const newIndex = retailCurrentIndex < retailLoans.length - 1 ? retailCurrentIndex + 1 : 0;
    setActiveRetailLoan(retailLoans[newIndex].id);
  };

  const handleCorporatePrev = () => {
    const newIndex = corporateCurrentIndex > 0 ? corporateCurrentIndex - 1 : corporateLoans.length - 1;
    setActiveCorporateLoan(corporateLoans[newIndex].id);
  };

  const handleCorporateNext = () => {
    const newIndex = corporateCurrentIndex < corporateLoans.length - 1 ? corporateCurrentIndex + 1 : 0;
    setActiveCorporateLoan(corporateLoans[newIndex].id);
  };

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
            <Button onClick={() => navigate("/services")} variant="ghost" size="sm">
              Back to Services
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Debt Syndication
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Customized debt solutions with 360-degree support at every step
            </p>
          </div>
        </div>
      </section>

      {/* Retail Loans Slider */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">RETAIL LOANS</h2>
            
            <div className="mb-8 sm:mb-12">
              {/* Retail Loan Navigation Tabs */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6">
                {retailLoans.map((loan) => {
                  const Icon = loan.icon;
                  return (
                    <Button
                      key={loan.id}
                      variant={activeRetailLoan === loan.id ? "default" : "outline"}
                      onClick={() => setActiveRetailLoan(loan.id)}
                      className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 transition-all ${
                        activeRetailLoan === loan.id 
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                          : ""
                      }`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-sm sm:text-base">{loan.title}</span>
                    </Button>
                  );
                })}
              </div>

              {/* Retail Loan Content Slider */}
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {/* Navigation Arrows */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleRetailPrev}
                      className="h-10 w-10 sm:h-12 sm:w-12"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                          <activeRetailLoanData.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{activeRetailLoanData.title}</h3>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleRetailNext}
                      className="h-10 w-10 sm:h-12 sm:w-12"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>

                  {/* Retail Loan Content */}
                  <div className="mb-6 sm:mb-8">
                    {activeRetailLoanData.content}
                  </div>

                  {/* Retail Slide Indicators */}
                  <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                    {retailLoans.map((loan, index) => (
                      <button
                        key={loan.id}
                        onClick={() => setActiveRetailLoan(loan.id)}
                        className={`h-2 rounded-full transition-all ${
                          activeRetailLoan === loan.id ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
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

      {/* Corporate Loans Slider */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">CORPORATE LOANS</h2>
            
            <div className="mb-8 sm:mb-12">
              {/* Corporate Loan Navigation Tabs */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6">
                {corporateLoans.map((loan) => {
                  const Icon = loan.icon;
                  return (
                    <Button
                      key={loan.id}
                      variant={activeCorporateLoan === loan.id ? "default" : "outline"}
                      onClick={() => setActiveCorporateLoan(loan.id)}
                      className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 transition-all ${
                        activeCorporateLoan === loan.id 
                          ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white" 
                          : ""
                      }`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-sm sm:text-base">{loan.title}</span>
                    </Button>
                  );
                })}
              </div>

              {/* Corporate Loan Content Slider */}
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {/* Navigation Arrows */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleCorporatePrev}
                      className="h-10 w-10 sm:h-12 sm:w-12"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                          <activeCorporateLoanData.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{activeCorporateLoanData.title}</h3>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleCorporateNext}
                      className="h-10 w-10 sm:h-12 sm:w-12"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>

                  {/* Corporate Loan Content */}
                  <div className="mb-6 sm:mb-8">
                    {activeCorporateLoanData.content}
                  </div>

                  {/* Corporate Slide Indicators */}
                  <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                    {corporateLoans.map((loan, index) => (
                      <button
                        key={loan.id}
                        onClick={() => setActiveCorporateLoan(loan.id)}
                        className={`h-2 rounded-full transition-all ${
                          activeCorporateLoan === loan.id ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
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

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Get Customized Debt Solutions
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let us help you find the most cost-effective financing option for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/apply")}
              className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto"
            >
              Apply Now
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
            Contact our debt syndication experts: 📞 +91 99999 99999 | ✉️ debt@finlend.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default DebtSyndication;