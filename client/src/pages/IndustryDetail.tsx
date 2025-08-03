import { useRoute } from "wouter";
import { useMemo } from "react";

// Import industry components
import GovernmentRegTech from "./IndustryPages/GovernmentRegTech";
import FinancialServices from "./IndustryPages/FinancialServices";
import Energy from "./IndustryPages/Energy";
import OilAndGas from "./IndustryPages/OilAndGas";
import Healthcare from "./IndustryPages/Healthcare";
import RetailEcommerce from "./IndustryPages/RetailEcommerce";
import Logistics from "./IndustryPages/Logistics";
import EdTech from "./IndustryPages/EdTech";
import Marketing from "./IndustryPages/Marketing";

export default function IndustryDetail() {
  const [match, params] = useRoute("/industries/:industryId");
  
  const industryComponents = useMemo(() => ({
    "government-regtech": GovernmentRegTech,
    "financial-services": FinancialServices,
    "energy": Energy,
    "oil-gas": OilAndGas,
    "healthcare": Healthcare,
    "retail-ecommerce": RetailEcommerce,
    "logistics": Logistics,
    "edtech": EdTech,
    "marketing": Marketing,
  }), []);

  if (!match || !params?.industryId) {
    return (
      <div className="pt-16 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-blue mb-4">Industry Not Found</h1>
          <p className="text-charcoal mb-8">The industry you're looking for doesn't exist.</p>
          <a 
            href="/industries" 
            className="bg-navy-blue text-white px-6 py-3 rounded-lg hover:bg-charcoal transition-colors"
          >
            View All Industries
          </a>
        </div>
      </div>
    );
  }

  const IndustryComponent = industryComponents[params.industryId as keyof typeof industryComponents];

  if (!IndustryComponent) {
    return (
      <div className="pt-16 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-blue mb-4">Industry Not Found</h1>
          <p className="text-charcoal mb-8">The industry "{params.industryId}" is not available yet.</p>
          <a 
            href="/industries" 
            className="bg-navy-blue text-white px-6 py-3 rounded-lg hover:bg-charcoal transition-colors"
          >
            View All Industries
          </a>
        </div>
      </div>
    );
  }

  return <IndustryComponent />;
}