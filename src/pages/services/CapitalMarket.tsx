import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, FileText, Calculator, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CapitalMarket = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState("sme-listing");

  const services = [
    {
      id: "sme-listing",
      title: "SME Listing",
      icon: Building2,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">What is a SME and who is eligible to apply for SME Listing?</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                An SME Listing exchange is a stock exchange platform specifically designed for trading the shares of small and medium-sized businesses (SMEs), who would otherwise find it challenging to list their shares on the major markets.
              </p>
              <p>
                The Exchange's SME IPO listing platform is available to SMEs with post-issue paid-up capital of less than or equal to Rs. 25 cores.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">What are the advantages of SME listing for qualified businesses?</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Every entrepreneur's dream is to publicly issue securities and list on stock exchanges. Businesses can benefit greatly from being listed on stock exchanges, including enhanced visibility, favourable capital gains tax treatment, valuation benchmarking, and improved governance & Internal Controls etc.
              </p>
              <p>
                BSE has presented the concept of 'Coordinate or a Direct Listing on BSE SME ( Platform ) Exchange' for all the Small Medium Enterprises (SME's) listed on the Regional Stock Exchanges (RSEs). BSE SME exchange is a stock exchange dedicated for trading of the shares of SME's which otherwise; find it difficult to get listed on the main exchanges.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">How we can assist you with SME IPO Listing on BSE and NSE Platforms:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Our investment banking team regularly participates in public issue syndication, issue management, post issue formalities by serving as Financial Advisor. We work closely with SMEs (small and mid-sized businesses) and offer end-to-end support for raising growth capital from a various financial institutions. We have more than ten years of exceptional track record of achieving good revenue growth and sizable profit margins (Capital market, Private Equity Funds, Debt Syndication)
              </p>
              <p>
                We take care of the BSE SME exchange listing requirements so you can concentrate on your business, In order to create value for all stakeholders We help companies with our specialised services, capital market insights, and business expertise.
              </p>
              <p>
                We helps businesses to find the best equity capital partner from the market, We offer direction and advise on how to comply with the legal requirements for SME IPO transactions, determine the best value for the transaction, strategically represent to our investors.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "ipo",
      title: "Initial Public Offer (IPO)",
      icon: TrendingUp,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">What is IPO?</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Initial Public Offering, (IPO) is the process of publicly issuing shares in order to raise money from the general public. A private firm becomes a public company through this method.
              </p>
              <p>
                Prior to, during, and after an initial public offering (IPO Listing), communications must be strategic and well-planned. Our experienced team has assisted companies of all sizes in navigating their entry into the equity markets successfully. This assistance has ranged from the creation of the investment story and the registration statement with the Securities and Exchange Commission to the development of the IPO road show and outreach strategies for investors, employees, and regulators. We create appealing investment narratives and are aware of the information that stakeholders, including investors, need and want to hear.
              </p>
              <p>
                The listing agreement has been prepared by SEBI, and BSE and NSE have been given permission to set up special SME platforms. The eligibility for listing on the SME Stock Exchange has also been made public by SEBI. To conduct an initial public offering (IPO) is every company's ultimate goal.
              </p>
              <p>
                IPO advisory services include providing guidance to corporations on how to raise money through equity shares, preference shares, fully or optionally convertible debentures, and non-convertible debentures. Additionally, advise them of the timing and amount of such offers, helping clients secure underwriting from corporations, institutions, banks, and stock brokers.
              </p>
              <p>
                To assist businesses in setting up the ideal public company infrastructure and continuous communications programmes, we have a thorough and tested strategy.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">What our IPO Services can do for your IPO Listing:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Make a genuine, detailed investment case and a strategic justification for the IPO listing.
              </p>
              <p>
                Create a communications-related IPO preparation rollout plan that outlines tasks and responsibilities.
              </p>
              <p>
                Create an architecture for investor relations that includes website content and procedures for answering questions.
              </p>
              <p>
                Develop and improve disclosure and reporting procedures the first earnings call in preparation.
              </p>
              <p>
                Establish media and event support for listing day.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "issue-management",
      title: "Issue Management",
      icon: FileText,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                A rights issue is a profit of membership rights to buy additional securities in an organisation issued to the holders of the organization's existing securities. It is a non-dilutive ace rate technique to raise capital at the point where the rights are for value securities, such shares in an open organisation. Regularly, rights issues are sold as a plan addendum or blueprint. Existing security holders who have the issued rights are entitled to buy a specified number of new securities from the guarantor within a membership time for a specified price.
              </p>
              <p>
                For many publicly traded firms, rights offerings are preferable to other, more dilutive fundraising options.
              </p>
              <p>
                The budgetary chief must take into account the following in rights issue:
              </p>
              <p>
                Make a merchant chief or intermediate merchant responsible for managing the offering process.
              </p>
              <p>
                Support for middlemen merchants and selling gathering.
              </p>
              <p>
                Cost of each new offer for subscribers.
              </p>
              <p>
                How many fresh offers will be sold.
              </p>
              <p>
                The membership rights' estimated value in relation to their exchange price.
              </p>
              <p>
                rights' effects on how the current offer is valued.
              </p>
              <p>
                rights' effects on existing investors, new investors, and rights holders.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Endorsing of issue:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Rights concerns might receive support. The guarantor's responsibility is to secure and guarantee that the assets the organisation is looking for will be raised. In a formal endorsing understanding, the agreement between the financier and the organisation is spelled out. The financier is typically required to accept any proposals made but not accepted by investors under an endorsement. The endorsement agreement will frequently provide the financier to terminate its commitments under specified circumstances. Thus, a sub-financier sub-guarantees some or all of the primary guarantor's commitments; the guarantor transfers risk to the sub-financier by forcing the sub-guarantor to subscribe for or purchase a portion of the offers that the guarantor should subscribe for in the event of a deficit. Budgetary institutions, stock intermediaries, actual investors in the organisation, as well as other relevant or unrelated groups, may serve as guarantors or sub-guarantors.
              </p>
              <p>
                Additionally, financiers investigate and support the risk that each applicant poses. By accurately pricing risk and establishing fair premium rates that acceptably cover the actual cost of protecting arrangement holders, this establishes the market for securities. Guarantors may choose not to cover a candidate's risk3 if it is thought to be excessive for some reason.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "valuation",
      title: "Business Valuation",
      icon: Calculator,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Services for All Types of Businesses in Business Valuation:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Business valuation, also referred to as company valuation, is the process of figuring out the economic value of a business or organisation. It can be applied to establish a company's fair market value. It is a method where the value of the company and its assets are established for a number of reasons, including Merges Dissolution of a partnership, reorganisation of the company, when they decide to sell their business.
              </p>
              <p>
                Although revenues play a significant role in the process, they are not the only factor taken into account. The sort of firm, its history, financial standing, stock value, intangible worth, level of competition, and prognosis for the economy as a whole are further considerations.
              </p>
              <p>
                Our knowledgeable business valuation experts assist with business valuation services and help you with Property, FOREX Transactions, ESOP, Debt Securities.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Foreign Exchange and International Transactions:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Foreign exchange is what FOREX stands for. It is a method for transacting in the currencies of other nations. The over-the-counter foreign exchange market is where global foreign currencies are transacted. The market is regarded as the biggest and most liquid in the entire globe. In contrast to other financial markets throughout the world, electronic communication networks (ECNs) and phone networks are used to conduct FOREX trading amongst participants.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Fair Market Valuation of a Property</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Fair Market Worth is an assessment of the market value of a property that a buyer would be prepared to pay a seller in the market. The cost at which a piece of property would sell on the open market is its fair market value. Since both parties have a reasonable understanding of the pertinent facts, they can agree on a price without being forced to do so.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Stock Fair Market Value:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                A stock's fair market value is how much it is currently trading for on the open market. Generally speaking, fair market value includes the following presumptions:
              </p>
              <p>
                The asset in question is known to both buyers and sellers.
              </p>
              <p>
                Both buyers and sellers are acting in their own best interests and are not under any time constraints.
              </p>
              <p>
                Both buyers and sellers can complete their transaction in a timely manner.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Fair Market Analysis of Options:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                First, let's define options. An example of a derivative security is an option. They are a contract that enables the owner or holder of the Option the right but not the duty to purchase or sell an underlying asset at a specified price within a particular period of time. Options are much like any other investment. They come in two varieties.
              </p>
              <p>
                The right to purchase is referred to as a "call option."
              </p>
              <p>
                Pull Option - The term for the selling option
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Debt securities' fair market value:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Bonds, money market instruments, notes, bills, and other debt securities that are issued by governments or corporations are considered debt securities. A financial tool is a debt security. The business issues it before selling it to an investor. The debt security is a pledge to repay the principal sum plus interest up until the instrument's maturity. It has the following benefits.
              </p>
              <p>
                Preferred stock's fair market value:
              </p>
              <p>
                Preference shares make up the preferred stock. They are distinct from common or ordinary shares. In addition to having a fixed dividend and being paid before common shareholders, preference shareholders do not have voting rights. When a firm is liquidated, preferred shareholders receive first dibs on the company's assets. The Preference Shares give an investor the ability to own stock in the company with the caveat that holders of the Preference Shares will always receive dividend payments ahead of other shareholders.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Debt securities' benefits</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Within the nation, they are seen as being risk-free. Even bonds issued by foreign governments are thought to be risk-free.
              </p>
              <p>
                It doesn't take as many formalities to issue them because they are less hazardous, making them a very safe investment.
              </p>
              <p>
                Through this, private enterprises may very readily raise money.
              </p>
              <p>
                This is a fairly inexpensive way to raise money when compared to other methods.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Warrants' fair market value:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                In layman's terms, a warrant is similar to an option granted by a corporation, giving the holder the option to purchase the company's stock at a set price within a predetermined window of time. Similar to an option, it simply represents the right—not the obligation—to purchase firm stock within a given window of time. Additionally, Warrants have a longer lifespan than Options.
              </p>
              <p>
                The following variables affect warrant pricing:
              </p>
              <p>
                • Cost of the underlying security
              </p>
              <p>
                The cost of the warrant is influenced by the cost of the underlying security. This implies that a high price will also result in a high value.
              </p>
              <p>
                • Time till Maturity
              </p>
              <p>
                As expiration draws near, the value of options and warrants decreases. This is also known as time decay, and it will quicken as expiry draws near.
              </p>
              <p>
                • Rate of interest/risk-free rate
              </p>
              <p>
                Similar to options, the value of warrants rises when interest rates do.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Estimating the future streams of cash flow at fair market value:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Cash flow refers to the quantity of money a business transfers or receives in the form of payments. Either way, it's possible. When a business receives cash, cash flow is positive; when a business must pay cash, cash flow is negative. To track where money is coming in and leaving out, cash flow statements are created.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Employee stock ownership plan (ESOP) valuation</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Employee stock ownership plans are known as ESOPs. It is a programme wherein a business grants stock options to employees in accordance with their performance. With the aid of an option-pricing model, the fair value of an ESOP is calculated. The company's financial health and success impact the value of the ESOP (employee equity ownership plan). ESOP functions as a kind of extra capital for the company. You can estimate with the aid of our ESOP advisors using the option price approach.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "ma",
      title: "Merger & Acquisition",
      icon: Users,
      content: (
        <div className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Merger and acquisition refers to the joining together of two entities, most often two organisations. Two distinct organisations are combined into one new entity as part of the merger and amalgamation. Mergers are completed for a variety of reasons, including expand the scope of the organisation, Extend to new territory, to obtain a market share in the whole industry.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Mergers and Acquisitions: Different Types:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                There are five main types of business mergers:
              </p>
              <p>
                Conglomerate: Combination of businesses engaged in completely unrelated industries
              </p>
              <p>
                Horizontal: The two groups work in the same sector, and the agreement is union-related.
              </p>
              <p>
                Market Expansion: Businesses compete in other markets while selling the same products
              </p>
              <p>
                Product Extension: Include complementary items
              </p>
              <p>
                merging two businesses that produce parts for the same product vertically
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Advantage of Mergers & Acquisitions:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                1) System economies Occasionally, businesses are required to provide a nationwide system. This suggests that there are extraordinarily significant economies of scale. The most efficient number of businesses in the industry, according to a national system, is one. For instance, they welcomed the merger when T-Mobile merged with Orange in the UK because:
              </p>
              <p>
                "The goal is to combine the Orange and T-Mobile systems, get rid of overlap, and create a single super-arrangement. Greater system and better scope will benefit customers, while fewer stations and destinations will be necessary, which will benefit the environment as well as the reduction of tolls."
              </p>
              <p>
                2) Original work. To find new products or innovations, it is crucial in some businesses to invest resources in inventive work. An organisation can become more productive and have more significant assets for innovative work after a merger. This is essential for firms like medicate investigate.
              </p>
              <p>
                3) Steer clear of duplication. It is advantageous in some industries to merge in order to avoid redundancy. For instance, two transportation companies can be vying for the same amount of street space. Customers might benefit from a single company with reduced costs. Avoiding duplication on purpose would be beneficial for the environment and lessen congestion.
              </p>
              <p>
                4) Monopoly management. No matter the likelihood that a company acquires restrictive infrastructure control as a result of a merger, if it is well managed by the administration, it need not result in greater expenses. For instance, the management of certain businesses has cost controls to limit expense increases. This enables businesses to benefit from economies of scale, but buyers are spared the burden of prohibitive infrastructure expenses. in order to profit from mergers and acquisitions
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Negative Effects of Mergers</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                1) Increased prices. A merger can reduce competition and offer the new company an imposing business strategy. The new company may typically raise prices for customers because it faces less competition and controls a larger portion of the market.
              </p>
              <p>
                2) Fewer options. Purchasers may make fewer decisions as a result of a merger.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Acquisition:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Acquisitions made without the target's consent are typically referred to as hostile takeovers. Acquisitions, which are also referred to as well-intentioned takeovers, take place when the acquiring organisation receives approval from the target company's board of directors to purchase and take control of the target organisation.
              </p>
              <p>
                Without the Directorate of the obtained company's consent, antagonistic takeovers take place. The gaining firm taking control of the organisation through a delicate offer or intermediary battle is the first step in a hostile takeover. The getting organisation may purchase the offers of the target company directly from investors or on the auxiliary marketplaces in an antagonistic takeover using delicate offers. Offers of stock provide a sense of ownership in the company.
              </p>
              <p>
                In this way, acquiring all or a greater portion of an organization's offers enables the gaining business to assume control over the target organisation.
              </p>
              <p>
                Investors might purchase shares from the procuring organisation at a price that is higher than the stock's market value. The directorate of a purchased firm agrees to allow another organisation to control the firm at a particular cost during an acquisition.
              </p>
              <p>
                Most of the time, the company making the acquisition agrees to purchase the shares or benefits of the acquired company. The securing organisation can avoid needing investors' approval by purchasing the benefits.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Demerger of the Company:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                A demerger is a strategy in which a single company is divided into sections, either to operate independently, to be sold, or to be disintegrated. to manufacture isolated, legal compounds to handle specific processes, or to raise funds by auctioning off components that are no longer part of the firm' core product offering. For instance, in an effort to improve the performance of its stock, British Telecom decided to de-merge its cell phone division, BT Wireless, in 2001.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Buyouts - Advisory</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Buyout refers to the acquisition of a controlling interest in a corporation. It means acquiring an organization's offer to the point when the acquiring party takes over management of the company.A buyout may take place if the buyer believes it would gain financial and essential benefits, such as increased earnings, easier entry into new markets, less competition, or improved operational effectiveness.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 sm:p-6">
            <h3 className="text-xl font-semibold mb-4">Negotiations, organising, and merger agreements:</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Discourse planning has been done to come to an understanding. The arrangement is a discussion between at least two people or groups that is planned to resolve at least one issue. Where there is a disagreement about at least one of these points. This beneficial outcome may benefit the majority of the covered groups, or it may only benefit one or a few of them.
              </p>
              <p>
                It is intended to establish distinctive goals, gain an advantage for a certain person or group, or produce outcomes that will serve a variety of interests. A stance is frequently advanced while little concessions are made in order to make a claim. The primary factor in determining whether transactions are successful is how much the parties to the arrangement believe one another to carry out the agreed-upon arrangement.
              </p>
              <p>
                A transaction is frequently not a zero-entirety enjoyment because of cooperation to improve the outcomes of the arrangement. People regularly make daily arrangements without considering them to be transactions.
              </p>
              <p>
                In organisations, such as businesses, non-profits, and within and between governments, as well as in transactions and legal proceedings, as well as in private situations, such as marriage, divorce, child rearing, and other situations, arrangement occurs.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const activeServiceData = services.find(service => service.id === activeService) || services[0];
  const currentIndex = services.findIndex(service => service.id === activeService);
  
  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : services.length - 1;
    setActiveService(services[newIndex].id);
  };
  
  const handleNext = () => {
    const newIndex = currentIndex < services.length - 1 ? currentIndex + 1 : 0;
    setActiveService(services[newIndex].id);
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
      <section className="relative py-12 sm:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Capital Market Services
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive capital market solutions for your business growth and public market success
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/30 mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">CAPITAL MARKET</h2>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    FinLend provides a one-stop shop for companies wanting to list on exchanges for an initial public offering (IPO).
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-base sm:text-lg">
                  Getting ready for a public offering is the first step in the process of becoming a publicly traded company on exchanges. It encompasses all forms of advising services, such as locating institutional investors, pitching potential investors on the growth prospects, and adhering to legal and regulatory standards.
                </p>
                <p className="text-base sm:text-lg">
                  Our vast network of locations throughout India helps to raise awareness of the client company's initial public offering (IPO). In order to aid investors in understanding the company, our research team also provides a complete analysis and insights on the firm's potentials.
                </p>
                <p className="text-base sm:text-lg">
                  It includes all varieties of consulting services, including finishing regulatory needs, luring institutional investors, calculating potential future growth, and presenting those possibilities to potential investors.
                </p>
              </div>
            </Card>

            {/* Service Navigation Tabs */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Our Comprehensive Services</h2>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Button
                      key={service.id}
                      variant={activeService === service.id ? "default" : "outline"}
                      onClick={() => setActiveService(service.id)}
                      className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 transition-all ${
                        activeService === service.id 
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" 
                          : ""
                      }`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-sm sm:text-base">{service.title}</span>
                    </Button>
                  );
                })}
              </div>

              {/* Service Content Slider */}
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {/* Navigation Arrows */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handlePrev}
                      className="h-10 w-10 sm:h-12 sm:w-12"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                          <activeServiceData.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{activeServiceData.title}</h2>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleNext}
                      className="h-10 w-10 sm:h-12 sm:w-12"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>

                  {/* Service Content */}
                  <div className="mb-6 sm:mb-8">
                    {activeServiceData.content}
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                    {services.map((service, index) => (
                      <button
                        key={service.id}
                        onClick={() => setActiveService(service.id)}
                                                className={`h-2 rounded-full transition-all ${
                          activeService === service.id ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Why Choose Us Section */}
            <Card className="p-6 sm:p-8 md:p-10 mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Why Choose Our Capital Market Services?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-5 text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">10+ Years Experience</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Proven track record in capital markets with successful SME listings and IPOs
                  </p>
                </div>

                <div className="p-5 text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Pan-India Network</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Extensive network across India for maximum IPO visibility and investor reach
                  </p>
                </div>

                <div className="p-5 text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">End-to-End Support</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Comprehensive services from assessment to post-listing compliance
                  </p>
                </div>

                <div className="p-5 text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Dedicated Advisory</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Personalized guidance and strategic representation for optimal outcomes
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Enter Capital Markets?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let our experts guide you through the capital market journey with comprehensive IPO and SME listing services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/apply")}
              className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto"
            >
              Get Started Today
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
            Contact our capital market experts: 📞 +91 99999 99999 | ✉️ capitalmarkets@finlend.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default CapitalMarket;
