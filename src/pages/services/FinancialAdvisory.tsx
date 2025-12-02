import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, UserCircle, Globe, Users, RefreshCw, Briefcase, PieChart, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FinancialAdvisory = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState("Virtual CFO");

  const services = [
    {
      id: "Virtual CFO",
      title: "Virtual CFO",
      icon: UserCircle,
      description: "Keep your worry for your finances, accounting, investment strategies, business process, compliance, or audits aside, with Fincare's Virtual CFO advisory service.",
      detailedContent: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6 text-orange-700 dark:text-orange-300">What we offer:</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                {[
                  "Preparation of business projection as per the growth plan",
                  "Budgetary control through various MIS systems",
                  "Management of banking via structuring the loan as per business model with optimum cost",
                  "Process due diligence and improvement in the process to increase efficiency",
                  "Profitability analysis as per business model such as Segment-wise, product-wise, location-wise, etc.",
                  "Deal negotiation with a vendor and other customers"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="space-y-4">
                {[
                  "Various accounting reconciliations",
                  "System implementation such as ERP, Tally, and any other customized software if any",
                  "Cost reduction and productivity improvement",
                  "Ensuring various statutory compliances",
                  "Periodic accounting supervision to ensure the accounting compliances"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "Internationalization",
      title: "Internationalization",
      icon: Globe,
      description: "Want your company to go global and enter international markets?",
      detailedContent: (
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Fincare has long-standing experience in the Internationalization of companies. We have built an extensive network in key growth regions across the globe.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Backed with industry-specific knowledge at Fincare, we help companies gain expert advice and strategic advantage before entering a foreign market.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We encompass all business operations from specific strategic, legal, tax, and staff characteristics to create a concrete plan.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "Succession Planning",
      title: "Succession Planning",
      icon: Users,
      description: "Want to plan the future of your business and the hands it is going to be passed on to?",
      detailedContent: (
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              At Fincare, we understand the stress, meticulous planning, hard work, and emotions this process can put you through.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Fincare experts can advise you throughout the succession process, presenting the options available and dealing with details such as conducting negotiations as well as assessing offers on your behalf.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We handle the all-embracing process from planning, preparation to implementation.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "Restructuring & Turnaround",
      title: "Restructuring & Turnaround",
      icon: RefreshCw,
      description: "",
      detailedContent: (
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              At Fincare, we do not believe that any business fails only based on unachieved profits while undermining the business's financial strength.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We conduct a thorough analysis to find all possible solutions to leverage from the situation.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              At Fincare, our experts advise the businesses in crisis along with their investors, shareholders and lenders, options for operational and strategic restructuring. Our deep industry expertise allows us to ascertain the key issues swiftly and react immediately.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              For the clients in crisis, our team develops liquidity forecasts, improves cash flow management, obtains additional financing, negotiates loan covenant waivers, and guides complex debt restructuring. We also provide analytical and advisory services to lenders and unsecured creditors of distressed borrowers.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "Merger & Acquisition",
      title: "Merger & Acquisition",
      icon: Briefcase,
      description: "Merger and Acquisition is a significant milestone for businesses.",
      detailedContent: (
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Companies for ages have expanded their business and achieved a global presence through acquisition. It is essential to ensure that every step of the process is performed with careful planning and detailing.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Fincare assists in every step, from valuation to negotiation, and ultimately, completion. We assure extensive research and study of the companies by leveraging our considerable experience and knowledge.
            </p>
            <div className="space-y-3">
              <p className="font-semibold text-gray-700 dark:text-gray-300">Sales of Private Companies:</p>
              <p className="text-gray-700 dark:text-gray-300 pl-4">We provide sell-side advisory services for owners of private companies seeking to sell at maximum valuation.</p>
              
              <p className="font-semibold text-gray-700 dark:text-gray-300">Acquisitions and Buyouts:</p>
              <p className="text-gray-700 dark:text-gray-300 pl-4">We provide buy-side advisory services, including identifying target companies, mediating, negotiating the acquisition, and buyouts.</p>
              
              <p className="font-semibold text-gray-700 dark:text-gray-300">Divestitures:</p>
              <p className="text-gray-700 dark:text-gray-300 pl-4">We assist companies with the divestitures of business units, divisions, and subsidiaries.</p>
              
              <p className="font-semibold text-gray-700 dark:text-gray-300">M&A Strategy:</p>
              <p className="text-gray-700 dark:text-gray-300 pl-4">We work closely with management to develop top-level corporate strategies for acquisitions, mergers, business sales, and divestitures.</p>
              
              <p className="font-semibold text-gray-700 dark:text-gray-300">M&A Due-Diligence:</p>
              <p className="text-gray-700 dark:text-gray-300 pl-4">We provide Merger & Acquisition due-diligence services to thoroughly investigate the target company's financial statements and other relevant information to determine the appropriate valuation for a sale or acquisition.</p>
              
              <p className="font-semibold text-gray-700 dark:text-gray-300">Post-Merger and Acquisition Integration:</p>
              <p className="text-gray-700 dark:text-gray-300 pl-4">We provide post-merger and post-acquisition integration consulting to improve the performance of the new business entity.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "Portfolio Evaluation & Fund Advisory",
      title: "Portfolio Evaluation & Fund Advisory",
      icon: PieChart,
      description: "Portfolio evaluation & fund advisory service is designed to control downside portfolio risk while optimizing overall investment return.",
      detailedContent: (
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Fincare provides a focused and disciplined approach to identify and analyse benchmarks.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              At Fincare, we believe that each client's investment situation is unique, and we provide customized service for each by evaluating the risk parameters to maximize returns.
            </p>
          </div>
        </div>
      )
    }
  ];

  const activeServiceData = services.find(service => service.id === activeService);

  return (
    <div className="min-h-screen">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
              <div className="h-7 w-7 rounded-lg gradient-primary flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FinLend
              </span>
            </div>
            <Button onClick={() => navigate("/services")} variant="ghost" size="sm">
              Back to Services
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950 dark:via-amber-950 dark:to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Financial Advisory Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe that capital solutions aren't just a one-way process. They require creativity, careful planning, tremendous eye for detailed risk analysis of each segment and ability to take decisions beforehand to keep the business on growth path.
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              We become the integral part of your company and provide extensive support in all business functioning so that you can take right strategic decision and implement all ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Service Navigation Tabs */}
      <section className="py-6 bg-white dark:bg-gray-900 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-1 md:gap-2">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium whitespace-nowrap">{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
      {/* Active Service Content */}
      <section className="py-12 bg-gradient-to-b from-background to-orange-50/30 dark:to-orange-950/10">
        <div className="container mx-auto px-4">
          {activeServiceData && (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-3">
                  {(() => {
                    const Icon = activeServiceData.icon;
                    return <Icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />;
                  })()}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-3">{activeServiceData.title}</h2>
                {activeServiceData.description && (
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                    {activeServiceData.description}
                  </p>
                )}
              </div>

              <Card className="p-6 lg:p-8 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-0 shadow-lg">
                {activeServiceData.detailedContent}
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FinancialAdvisory;
