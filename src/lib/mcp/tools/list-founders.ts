import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { founders } from "@/lib/founders";

export default defineTool({
  name: "list_founders",
  title: "List Vyora.AI founders",
  description: "Returns the founders and co-founders of Vyora.AI with roles, bios, skills, and public contact links (email, WhatsApp, LinkedIn).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = founders.map((f) => ({
      name: f.name,
      role: f.role,
      email: f.email,
      whatsapp: f.whatsapp,
      linkedin: f.linkedin,
      about: f.about,
      skills: f.skills,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { founders: data },
    };
  },
});

// Silence unused-var warning for z import; kept for consistency with other tools.
void z;
