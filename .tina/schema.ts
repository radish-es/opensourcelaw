import { defineSchema } from "@tinacms/cli";

export default defineSchema({
  collections: [
    {
      label: "Wk",
      name: "wk",
      path: "content/courses/property/wk",
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
          label: "Reporter",
          name: "reporter",
        },
        {
          type: "string",
          label: "Module",
          name: "module",
          list: false,
          options: [
            {
              value: 'case',
              label: 'Case',
            },
            {
              value: 'exercise',
              label: 'Exercise',
            },
          ],
        },
        {
          type: "string",
          label: "Type",
          name: "type",
          list: false,
          options: [
            {
              value: 'book',
              label: 'Book',
            },
          ],
          ui: { defaultValue: 'book' },
        },
        {
          type: "number",
          label: "Order",
          name: "weight",
        },
        {
          type: "string",
          label: "Body",
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
