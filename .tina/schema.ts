import { defineSchema } from "@tinacms/cli";

export default defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "post",
      path: "content/courses/property/weeks",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Link Title",
          name: "linktitle",
        },
        {
          type: "string",
          label: "Date",
          name: "date",
        },
        {
          type: "string",
          label: "Type",
          name: "type",
          options: [
            {
              value: 'book',
              label: 'Book',
            },
          ],
        },
        {
          type: "string",
          label: "Week Body",
          name: "body",
          isBody: true,
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ],
});
