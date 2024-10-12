import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const teamType = defineType({
  name: "team",
  title: "Team",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "text",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description:
        "A number to determine the order team members are shown. Lower numbers come first.",
    }),
  ],
  orderings: [
    {
      title: "Default Order (by Order field)", // This will be the default ordering
      name: "defaultOrder",
      by: [{ field: "order", direction: "asc" }], // Ascending or descending order
    },
  ],
});
