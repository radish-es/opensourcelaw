import { defineSchema } from "@tinacms/cli";

export default defineSchema({
  collections: [{
      label: "Weekly Materials",
      name: "materials",
      path: "content/courses/Property/materials",
      fields: [{
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Link Title",
          name: "linktitle",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          list: false,
          options: [
            {
              value: 'book',
              label: 'Book',
            },
          ]
          },
          {
            label: 'Rank Order',
            name: 'weight', 
            type: "number",
          },
        {
          label: "Learning Objectives",
          name: "objectives",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => {return { label: ` hello ` }},
          },
          fields: [
            {
              label: "Objective",
              name: "objective",
              type: "string"
            },
            {
              label: "Explanation",
              name: "explanation",
              type: "string",
              ui: {
                component: "textarea"
              },
            },
          ],
      },
      {
        label: "Introduction",
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
                label: "File",
                name: "filename",
                type: "reference",
                collections: ['modules']
              },
            ],
          },
          {
            label: "Case",
            name: "case",
            fields: [
              {
                label: "Title",
                name: "title",
                type: "string"
              },
              {
                label: "File",
                name: "filename",
                type: "reference",
                collections: ['cases']
              },
            ],
          },
          {
            label: "Exercise",
            name: "exercise",
            fields: [
              {
                label: "Title",
                name: "title",
                type: "string"
              },
              {
                label: "File",
                name: "filename",
                type: "reference",
                collections: ['exercises']
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Cases",
    name: "cases",
    path: "content/courses/Property/cases",
    fields: [{
      label: "Style of Cause",
      name: "style",
      type: "string"
      },
      {
        label: "Short Style",
        name: "short",
        type: "string"
        },
      {
        label: "Reporter",
        name: "reporter",
        type: "string"
      },
      {
        label: 'Tags',
        name: 'tags',
        type: 'string',
        list: true,
      },  
      {
        label: "Body",
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
      label: "Modules",
      name: "modules",
      path: "content/courses/Property/modules",
      fields: [{
        label: "Title",
        name: "title",
        type: "string"
        },
        {
          label: "Short Title",
          name: "short",
          type: "string"
          },
        {
          label: 'Tags',
          name: 'tags',
          type: 'string',
          list: true,
        },  
        {
          label: "Body",
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
      label: "Exercises",
      name: "exercises",
      path: "content/courses/Property/exercises",
      fields: [{
        label: "Title",
        name: "title",
        type: "string"
        },
        {
          label: "Short Title",
          name: "short",
          type: "string"
          },
        {
          label: 'Tags',
          name: 'tags',
          type: 'string',
          list: true,
        },  
        {
          label: "Body",
          name: "body",
          type: "string",
          isBody: true,
            ui: {
              component: "textarea",
            },
        },  
      ],
      },
  ],
  },
);
