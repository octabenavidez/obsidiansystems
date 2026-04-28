// Clients Components
import ClientsHeader from "../components/clients/ClientsHeader";
import ClientsGrid from "../components/clients/ClientsGrid";
import InvestmentPlanCard from "../components/clients/InvestmentPlanCard";

// Data
import { clientes } from "../data/clients/list";
import { clientsContent } from "../data/clients/content";

/**
 * Clients Section component
 * Displays client testimonials and investment plan details
 * @returns {JSX.Element} Rendered Clients section
 */
const ClientsSection = () => {
  const { header } = clientsContent;

  return (
    <section className="px-4 pb-8 text-white">
      <div className="mx-auto max-w-[1100px]">
        {/* Section Header */}
        <ClientsHeader
          title={header.title}
          subtitle={header.subtitle}
          description={header.description}
        />

        {/* Clients Grid */}
        <ClientsGrid clients={clientes} />
      </div>
    </section>
  );
};

export default ClientsSection;
