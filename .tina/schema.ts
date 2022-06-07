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
            return { label: ` hello ` };
          },
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
      {
        label: "Components",
        name: "components",
        type: "object",
        list: true,
        templates: [
          {
            label: "Module",
            name: "module",
            ui: {
              itemProps: (item) => {
                return { label: item.title };
              },
            },
            fields: [
              {
                label: "Title",
                name: "title",
                type: "string"
              },
              {
                label: "Description",
                name: "description",
                type: "string",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            label: "Case",
            name: "case",
            fields: [
              {
                label: "Style of Cause",
                name: "style",
                type: "string"
              },
            ],
          },
        ],
      },
    ],
  },
],
},
);
