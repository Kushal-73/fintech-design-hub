import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const GstAdvisory = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "GST Registration",
      description: "Seamless GST registration assistance",
      icon: FileText,
    },
    {
      title: "GST Compliance",
      description: "Ongoing compliance and filing support",
      icon: CheckCircle2,
    },
    {
      title: "GST Advisory",
      description: "Expert guidance on GST matters",
      icon: AlertCircle,
    },
  ];

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

      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-pink-950 dark:via-rose-950 dark:to-red-950">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 sm:space-y-6 max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
              GST Advisory
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive GST services for smooth transition and ongoing compliance
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-pink-50/50 to-rose-50/50 dark:from-pink-950/30 dark:to-rose-950/30 mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-100">
                GST Registration, Return Filing & Advisory Services
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-muted-foreground">
                  Goods & Service Tax (GST) is touted to be India's biggest tax reform. GST is a consumption - based tax on the supply of goods and services, right from the manufacturer to the consumer. Credits of input taxes paid at each stage will be available in the subsequent stage of value addition, which makes GST essentially a tax only on value addition at each stage. The final consumer will thus bear only the GST charged by the last dealer in the supply chain, with set-off benefits at all the previous stages.
                </p>
                
                <p className="text-base sm:text-lg text-muted-foreground">
                  Goods and Services Tax (GST) is a comprehensive, multi-stage, destination-based tax that is levied on every value addition. It is a single domestic indirect tax law for the entire country. Under the GST regime, the tax is levied at every point of sale.
                </p>
                
                <p className="text-base sm:text-lg text-muted-foreground">
                  In the case of intra-state sales, Central GST and State GST are charged. All the inter-state sales are chargeable to the Integrated GST. GST subsumed several taxes and levies such as central excise duty, services tax, additional customs duty, surcharges, state-level value added tax and Octroi.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100">
                  Our GST Advisory Services
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <p className="text-base sm:text-lg text-muted-foreground">
                  Changes with the Goods & Services Tax (GST) implementation have already started showing up.
                </p>
                
                <p className="text-base sm:text-lg text-muted-foreground">
                  The centralized indirect tax system has replaced all other consumption taxes. The GST transition is a mandatory process for all businesses.
                </p>
                
                <p className="text-base sm:text-lg text-muted-foreground">
                  At FinLend, we will ensure a smooth movement for your company from the current tax system to GST with the help of our expert advisory.
                </p>
                
                <p className="text-base sm:text-lg text-muted-foreground">
                  Our services include:
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1">Information Technology / EDP System Modifications</h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1">Review of Trade Contracts (With Customers / Clients) in line with GST guidelines</h3>

                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1">Tax Credit Transitions (Carry forward of Existing Credit)</h3>

                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1">GST Internal Audit and monitoring</h3>

                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1">Post-GST Implementation Support</h3>

                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Simplify Your GST Compliance
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Get expert guidance for seamless GST registration, filing, and ongoing compliance
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/apply")}
            className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto"
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GstAdvisory;
