/**
 * SEO Content Block
 * Provides rich, keyword-dense prose for search engine indexing.
 * Visually minimal but semantically rich.
 */
export default function SeoContent() {
  return (
    <section className="border-border/40 bg-muted/20 border-t py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Column 1 */}
          <div className="text-muted-foreground space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-foreground mb-3 text-base font-semibold">
                Source-Accessible Fleet Management Software
              </h2>
              <p>
                LogisBase is a fully source-accessible fleet management and
                transportation management system (TMS) built for logistics
                operators, courier services, food delivery companies, e-commerce
                fulfillment teams, and enterprise supply chains. Unlike
                proprietary fleet management platforms that charge per seat or
                lock you into annual contracts, LogisBase gives you complete
                ownership of your data and infrastructure — deploy on your own
                servers or use LogisBase Cloud.
              </p>
            </div>
            <div>
              <h2 className="text-foreground mb-3 text-base font-semibold">
                Real-Time Dispatch & Order Management
              </h2>
              <p>
                The FleetOps module provides real-time order dispatch, live GPS
                tracking, route optimization, proof of delivery (POD), driver
                management, and a fully configurable order activity flow.
                Whether you are running last-mile delivery, long-haul trucking,
                healthcare logistics, or waste management, FleetOps adapts to
                your operational model without custom development.
              </p>
            </div>
            <div>
              <h2 className="text-foreground mb-3 text-base font-semibold">
                Self-Hosted or Cloud Deployment
              </h2>
              <p>
                LogisBase supports Docker, Kubernetes, and bare-metal deployment
                for organizations that require full data sovereignty. The
                self-hosted option is ideal for government agencies, healthcare
                providers, and enterprises operating in regulated environments.
                Cloud deployment on LogisBase Cloud gives you a fully managed,
                auto-scaling infrastructure with zero DevOps overhead.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-muted-foreground space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-foreground mb-3 text-base font-semibold">
                Source-Accessible Alternative to Onfleet, Tookan & Route4Me
              </h2>
              <p>
                LogisBase is the leading source-accessible alternative to
                Onfleet, Tookan, Route4Me, and other proprietary delivery
                management platforms. Unlike these SaaS tools, LogisBase has no
                per-driver pricing, no task limits, and no black-box algorithms.
                You get the full source code under Source-accessible, an
                Enterprise License for proprietary deployments, and a growing
                ecosystem of community extensions.
              </p>
            </div>
            <div>
              <h2 className="text-foreground mb-3 text-base font-semibold">
                Developer-First Logistics Platform
              </h2>
              <p>
                LogisBase exposes a comprehensive REST API, webhooks for
                real-time event streaming, and an extension framework built on
                Ember.js and Laravel. Developers can build custom modules,
                integrate with ERP systems, payment gateways, telematics
                providers, and communication platforms. The LogisBase Extensions
                Registry hosts community-built integrations for Stripe, Twilio,
                QuickBooks, SAP, and more.
              </p>
            </div>
            <div>
              <h2 className="text-foreground mb-3 text-base font-semibold">
                Built for Scale — From Startups to Enterprise
              </h2>
              <p>
                LogisBase powers logistics operations across courier services,
                food delivery, e-commerce, healthcare, government, and container
                logistics. The platform supports multi-tenant organizations,
                role-based access control (RBAC), white-label deployments, and
                custom branding. Founded in 2022 and source-accessible in 2023,
                LogisBase is trusted by over 8,000 organizations worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
