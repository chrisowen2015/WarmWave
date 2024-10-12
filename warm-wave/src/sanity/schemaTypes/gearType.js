import { defineField, defineType } from "sanity";
import { DiamondIcon } from "@sanity/icons";

export const gearType = defineType({
  name: "gear",
  title: "Gear",
  type: "document",
  icon: DiamondIcon,
  fields: [
    defineField({
      name: "groupName",
      title: "Group Name",
      type: "string",
    }),
    defineField({
      name: "list",
      title: "Gear List",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description:
        "A number to determine the order of the gear group. Lower numbers come first.",
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
