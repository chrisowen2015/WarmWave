import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

const imagelessPages = ["Gallery", "Our Team", "Services"];

const textlessPages = ["Gallery", "Our Team", "Gear", "Home"];

const taglinePages = ["Home", "About"];

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      readOnly: ({ document }) => !!document?._createdAt, // Prevent editing the name after creation
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      hidden: ({ document }) => imagelessPages.includes(document?.name), // Hide if imageless page
    }),
    defineField({
      name: "mobileImage",
      title: "Mobile Image",
      type: "image",
      hidden: ({ document }) => imagelessPages.includes(document?.name), // Hide if imageless page
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
      hidden: ({ document }) => textlessPages.includes(document?.name), // Hide if textless page
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      hidden: ({ document }) => !taglinePages.includes(document?.name), // Hide if imageless page
    }),
    // Gallery field - only used if the page name is "Gallery"
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
            },
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description:
                "A short description of the image for accessibility and SEO.",
            },
            {
              name: "order",
              title: "Order",
              type: "string",
              description:
                "A number to determine the order of the images. Lower numbers come first.",
            },
          ],
        },
      ],
      hidden: ({ document }) => document?.name !== "Gallery", // Show only if name is "Gallery"
    }),
    // Services field - only used if the page name is "Services"
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
      hidden: ({ document }) => document?.name !== "Services", // Show only if name is "Services"
    }),
    // Team field - only used if the page name is "Our Team"
    defineField({
      name: "team",
      title: "Team",
      type: "array",
      of: [{ type: "reference", to: [{ type: "team" }] }],
      hidden: ({ document }) => document?.name !== "Our Team", // Show only if name is "Our Team"
    }),
    // Team field - only used if the page name is "Our Team"
    defineField({
      name: "gear",
      title: "Gear",
      type: "array",
      of: [{ type: "reference", to: [{ type: "gear" }] }],
      hidden: ({ document }) => document?.name !== "Gear", // Show only if name is "Gear"
    }),
  ],
  // Update the preview key in the schema
  preview: {
    select: {
      name: "name",
      image: "image",
    },
    prepare({ name, image }) {
      return {
        title: name ? name : "Untitled New Page",
        media: image || DocumentTextIcon,
      };
    },
  },
});
