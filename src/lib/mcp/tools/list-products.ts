import { defineTool } from "@lovable.dev/mcp-js";
import { products } from "@/lib/products";

export default defineTool({
  name: "list_products",
  title: "List Vyora.AI products",
  description:
    "Returns the products VYORA.AI is building, with status, category, description, features and public store links where available.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = products.map((p) => ({
      name: p.name,
      slug: p.slug,
      status: p.status,
      category: p.category,
      description: p.shortDescription,
      features: p.features,
      availability: p.availability,
      url: p.externalUrl ?? null,
      page: `https://vyora-ai.technology/creations/${p.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify({ products: data }, null, 2) }],
      structuredContent: { products: data },
    };
  },
});
