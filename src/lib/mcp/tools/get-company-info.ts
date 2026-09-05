import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_company_info",
  title: "Get Vyora.AI company info",
  description: "Returns Vyora.AI's mission, registered address, and primary contact channels.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "Vyora.AI",
      registeredIn: "Pakistan",
      address:
        "Bahar Shah Road, Momin Street, Street 20, Joray Pul, Al Faisal Town, Lahore, Punjab, 54000, Pakistan",
      email: "contact@vyora-ai.technology",
      website: "https://vyora-ai.technology",
      focus:
        "Building AI-powered products across health, lifestyle, business, education, and entertainment with a long-term, global scale vision.",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
