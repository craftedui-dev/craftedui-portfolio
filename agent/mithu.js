import fs from "fs";
import OpenAI from "openai";
import "dotenv/config";

const config = JSON.parse(fs.readFileSync("./config.json", "utf8"));
const mithuConfig = config.models.find(m => m.title === "Mithu");

console.log("Loaded Mithu config:", mithuConfig);

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function askMithu(requirement) {
  const response = await client.chat.completions.create({
    model: mithuConfig.model,
    messages: [
      { role: "system", content: mithuConfig.systemMessage },
      { role: "user", content: requirement }
    ]
  });

  const agent = JSON.parse(response.choices[0].message.content);
  console.log("Mithu created this agent:");
  console.log(JSON.stringify(agent, null, 2));
  return agent;
}

// Allow running from terminal
if (process.argv[2]) {
  const requirement = process.argv.slice(2).join(" ");
  askMithu(requirement);
}
