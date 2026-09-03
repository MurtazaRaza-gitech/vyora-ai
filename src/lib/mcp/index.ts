import { defineMcp } from "@lovable.dev/mcp-js";
import listFoundersTool from "./tools/list-founders";
import listProductsTool from "./tools/list-products";
import getCompanyInfoTool from "./tools/get-company-info";

export default defineMcp({
  name: "vyora-ai-mcp",
  title: "Vyora.AI MCP",
  version: "0.1.0",
  instructions:
    "Public tools that expose Vyora.AI's company information, founders, and products. Use these to answer questions about the company, its team, and what it is building.",
  tools: [listFoundersTool, listProductsTool, getCompanyInfoTool],
});
