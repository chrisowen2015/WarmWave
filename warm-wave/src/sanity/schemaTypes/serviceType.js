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
      description:
        "A number to be shown in the pricing table. Use 0 for free services. (Need to to)",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description:
        "A number to determine the order of the services. Lower numbers come first.",
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
