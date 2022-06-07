import { defineSchema } from "@tinacms/cli";

export default defineSchema({
  collections: [{
      label: "Weeks",
      name: "weeks",
      path: "content/courses/property/weeks",
      fields: [{
        label: "Learning Objectives",
        name: "objectives",
        type: "object",
        list: true,
        ui: {
          itemProps: (item) => {
            return { label: `${item?.goal}`}
          },
          defaultItem: {
            title: "Learning well",
            goal: "This is a first objective",
          }
        },
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string"
          },
          {
            label: "Goal",
            name: "goal",
            type: "string",
            ui: {
              component: "textarea"
            },
          },
        ],
      },
      {
        label: "Intro",
        name: "body",
        type: "string",
        isBody: true,
          ui: {
            component: "textarea",
          },
      },
    ],
    },
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
