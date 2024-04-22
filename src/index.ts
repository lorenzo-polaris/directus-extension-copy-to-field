import { defineInterface } from "@directus/extensions-sdk";
import InterfaceComponent from "./interface.vue";

export default defineInterface({
  id: "pp_copy_to_field",
  name: "Copy to Field",
  icon: "box",
  description: "This is my custom interface!",
  types: ["string", "integer", "float"],
  component: InterfaceComponent,
  options: [
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
