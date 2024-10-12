import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "mobileImage",
      title: "Mobile Image",
      type: "image",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description:
        "A short description of the image for accessibility and SEO.",
    }),
  ],
  orderings: [
    {
      title: "Default Order (by Order field)", // This will be the default ordering
      name: "defaultOrder",
      by: [{ field: "order", direction: "asc" }], // Ascending or descending order
    },
  ],
  preview: {
    select: {
      name: "name",
      image: "image",
    },
    prepare({ name, image }) {
      return {
        title: name,
        media: image,
      };
    },
  },
});
