import { Client } from "@notionhq/client";
import { config } from "dotenv";

config(); // Load environment variables

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const pageId = process.env.NOTION_PAGE_ID;
//finally got it to work 
async function createPage() {
  try {
    console.log("createPage function called");
    //apparently when creating a page inside a page it is mandatory to use rich_text //
    const response = await notion.pages.create({
      parent: { page_id: pageId },
      properties: {
        title: [
          {
            text: {
              content: "JAVASCRIPT TESTING",
            },
          },
        ],
      },
      children: [
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "This is a paragraph in the new page.",
                },
              },
            ],
          },
        },
      ],
    });
    console.log("Page created successfully:", response);
  } catch (error) {
    console.error("Error creating page:", error);
  }
}

console.log(pageId);

createPage();