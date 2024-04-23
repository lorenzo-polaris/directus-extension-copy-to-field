import { defineInterface } from "@directus/extensions-sdk";
import InterfaceComponent from "./interface.vue";

export default defineInterface({
  id: "pp_copy_to_field",
  name: "Copy to Field",
  icon: "box",
  description: "Show a button to copy the value of a field to a destination field",
  types: ["string", "integer", "float", "text"],
  component: InterfaceComponent,
  options: [
    {
      field: "fieldType",
      name: "Type",
      type: "string",
      meta: {
        width: "full",
        interface: "select-dropdown",
        options: {
          allowNone: false,
          default: "input",
          required: true,
          choices: [
            { text: "Input", value: "input" },
            { text: "Textarea", value: "textarea" },
          ],
        },
      },
    },
    {
      field: "destination_field",
      type: "string",
      name: "Destination Field",

      meta: {
        interface: "input",
      },
    },
  ],
});
