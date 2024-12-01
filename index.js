import { Client } from "@notionhq/client";
import { config } from "dotenv";

config(); // Load environment variables

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_ROOTPAGE_ID;

async function createPage() {
  try {
    console.log("createPage function called");
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: "JAVACRIPT TESTING",
              },
            },
          ],
        },
      },
    });
    console.log("Page created successfully:", response);
  } catch (error) {
    console.error("Error creating page:", error);
  }
}

// Call the function to test it
createPage();