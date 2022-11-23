import { defineStaticConfig as t } from "tinacms";
const l = "main", n = t({
  branch: l,
  clientId: "e02174a7-4087-4351-bc95-af6ebabac0c7",
  token: "3eb177ea43fec7f046e0878c885c4d96997101a5",
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        label: "Chapter",
        name: "materials",
        path: "content/courses/Property/materials",
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string"
          },
          {
            label: "Link Title",
            name: "linktitle",
            type: "string"
          },
          {
            label: "Published",
            name: "published",
            type: "boolean"
          },
          {
            label: "Type",
            name: "type",
            type: "string",
            list: !1,
            options: [
              {
                value: "book",
                label: "Book"
              }
            ]
          },
          {
            label: "Chapter Number",
            name: "weight",
            type: "number"
          },
          {
            label: "Learning Objectives",
            name: "objectives",
            type: "object",
            list: !0,
            ui: {
              itemProps: (e) => ({ label: e.objective })
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
                }
              }
            ]
          },
          {
            label: "Introduction",
            name: "body",
            type: "string",
            isBody: !0,
            ui: {
              component: "textarea"
            }
          },
          {
            label: "Components",
            name: "components",
            type: "object",
            list: !0,
            templates: [
              {
                label: "Module",
                name: "module",
                ui: {
                  itemProps: (e) => ({ label: "Module: " + e.title })
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
                    collections: ["modules"]
                  }
                ]
              },
              {
                label: "Case",
                name: "case",
                ui: {
                  itemProps: (e) => ({ label: "Case: " + e.title })
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
                    collections: ["cases"]
                  }
                ]
              },
              {
                label: "Exercise",
                name: "exercise",
                ui: {
                  itemProps: (e) => ({ label: "Exercise: " + e.title })
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
                    collections: ["exercises"]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "Cases",
        name: "cases",
        path: "content/courses/Property/cases",
        fields: [
          {
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
            label: "Tags",
            name: "tags",
            type: "string",
            list: !0
          },
          {
            label: "Public Domain",
            name: "public",
            type: "boolean"
          },
          {
            label: "Sources",
            name: "sources",
            type: "object",
            list: !0,
            fields: [
              {
                label: "Source Name",
                name: "source_name",
                type: "string"
              },
              {
                label: "Source URL",
                name: "source_url",
                type: "string"
              },
              {
                label: "License URL",
                name: "license",
                type: "string"
              },
              {
                label: "Attribution",
                name: "attribution",
                type: "string"
              }
            ]
          },
          {
            label: "Body",
            name: "body",
            type: "string",
            isBody: !0,
            ui: {
              component: "textarea"
            }
          }
        ]
      },
      {
        label: "Modules",
        name: "modules",
        path: "content/courses/Property/modules",
        fields: [
          {
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
            label: "Tags",
            name: "tags",
            type: "string",
            list: !0
          },
          {
            label: "Body",
            name: "body",
            type: "string",
            isBody: !0,
            ui: {
              component: "textarea"
            }
          }
        ]
      },
      {
        label: "Exercises",
        name: "exercises",
        path: "content/courses/Property/exercises",
        fields: [
          {
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
            label: "Tags",
            name: "tags",
            type: "string",
            list: !0
          },
          {
            label: "Body",
            name: "body",
            type: "string",
            isBody: !0,
            ui: {
              component: "textarea"
            }
          }
        ]
      },
      {
        label: "Resources",
        name: "resources",
        path: "content/resources",
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string"
          },
          {
            label: "Date",
            name: "date",
            type: "string"
          },
          {
            label: "Summary",
            name: "summary",
            type: "string"
          },
          {
            label: "Body",
            name: "body",
            type: "string",
            isBody: !0,
            ui: {
              component: "textarea"
            }
          }
        ]
      }
    ]
  }
});
export {
  n as default
};
