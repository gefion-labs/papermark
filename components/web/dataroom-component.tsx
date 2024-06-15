import { CheckCircle2Icon, MinusIcon } from "lucide-react";

interface ToolFeature {
  name: string;
  features: { [feature: string]: string };
}

const tools: ToolFeature[] = [
  {
    name: "Deck3 Business Plan",
    features: {
      docs: "✔️",
      folders: "✔️",
      linksettings: "✔️",
      advancedanalytics: "✔️",
      timerecorded: "✔️",
      blocklist: "✔️",
      verifications: "✔️",
      branding: "✔️",
      support: "✔️",
      domains: "⛌",
      notifications: "⛌",
      rooms: "⛌",
      users: "⛌",
      sso: "⛌",
      upload: "⛌",
      migration: "⛌",
      support2: "⛌",
      self: "⛌",
      white: "⛌",
    },
  },

  {
    name: "Deck3 Data Rooms Plan",
    features: {
      docs: "✔️",
      folders: "✔️",
      linksettings: "✔️",
      advancedanalytics: "✔️",
      timerecorded: "✔️",
      blocklist: "✔️",
      verifications: "✔️",
      branding: "✔️",
      domains: "✔️",
      support: "✔️",
      notifications: "✔️",
      rooms: "✔️",
      users: "⛌",
      sso: "⛌",
      upload: "⛌",
      migration: "⛌",
      support2: "⛌",
      self: "⛌",
      white: "⛌",
    },
  },

  // data room,whitelabelling
  {
    name: "Deck3 Custom Plan",
    features: {
      docs: "✔️",
      folders: "✔️",
      linksettings: "✔️",
      advancedanalytics: "✔️",
      timerecorded: "✔️",
      blocklist: "✔️",
      verifications: "✔️",
      branding: "✔️",
      domains: "✔️",
      support: "✔️",
      notifications: "✔️",
      rooms: "✔️",
      users: "✔️",
      migration: "✔️",
      support2: "✔️",
      sso: "✔️",
      upload: "✔️",
      self: "⛌",
      white: "⛌",
    },
  },
  {
    name: "Deck3 Self-Hosted Plan",

    features: {
      docs: "✔️",
      folders: "✔️",
      linksettings: "✔️",
      advancedanalytics: "✔️",
      timerecorded: "✔️",
      blocklist: "✔️",
      verifications: "✔️",
      branding: "✔️",
      domains: "✔️",
      support: "✔️",
      notifications: "✔️",
      rooms: "✔️",
      users: "✔️",
      migration: "✔️",
      support2: "✔️",
      sso: "✔️",
      upload: "✔️",
      self: "✔️",
      white: "✔️",
    },
  },

  // Add other tools in a similar format
];

const featureDisplayNames: { [key: string]: string } = {
  docs: "Unlimited documents",
  folders: "Unlimited folders",
  linksettings: "Custom Link Settings",
  advancedanalytics: "Advanced Analytics",
  timerecorded: "Time recorded on each page",
  blocklist: "Allow & Block List",
  verifications: "Email verifications",
  notifications: "Notifications",
  branding: "Custom data room branding",
  domains: "Custom domains for data rooms",
  rooms: "Unlimited data rooms",
  users: "User Groups",
  white: "Full white-labelling",
  sso: "SSO",
  upload: "Bulk upload",
  self: "Self-hosted on your servers",
  migration: "Migration from other platform",
  support: "48h email support ",
  support2: "24h  support ",
};

export default function ComparisonTable() {
  const renderFeatureName = (feature: string | boolean) => {
    // If the feature is a string, return it as is
    if (typeof feature === "string") {
      return feature;
    }

    // If the feature is a boolean, return a checkmark or a minus icon
    if (feature) {
      return (
        <CheckCircle2Icon
          className="h-6 w-6 flex-none text-[#fb7a00]"
          aria-hidden="true"
        />
      );
    } else {
      return (
        <MinusIcon
          className="flex-none w-6 h-6 text-black"
          aria-hidden="true"
        />
      );
    }
  };
  const featuresList = Object.keys(tools[0].features);

  return (
    <div className="">
      {/* <div className="px-6 py-12 mt-20 sm:px-6 sm:py-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compare best Docsend alternatives based on core features
            <br />
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-600">
            Check all the features you need to securely share documents
          </p>
        </div>
      </div> */}
      <div className="flow-root mt-6">
        <div className="overflow-x-auto bg-gray-100 border border-gray-300 rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="text-balance px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Data Room Feature
                  </th>
                  {tools.map((tool) => (
                    <th
                      key={tool.name}
                      className="text-balance px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      {tool.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white border border-gray-300 divide-y divide-gray-200">
                {featuresList.map((feature) => (
                  <tr key={feature}>
                    <td className="px-3 py-4 text-sm font-semibold text-gray-900 border border-gray-300 text-balance">
                      {featureDisplayNames[feature]}
                    </td>
                    {tools.map((tool) => (
                      <td
                        key={tool.name}
                        className={`px-3 py-4 text-sm ${
                          tool.name === "Deck3"
                            ? "text-balance bg-green-50 font-semibold text-green-700"
                            : ""
                        }`} // Consistent text color, conditional background color
                      >
                        {tool.features[feature]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
