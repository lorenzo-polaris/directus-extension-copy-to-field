# Directus Extension: Copy to Field

This Directus extension allows you to copy the current value of a field into another field within the same collection.

## Installation

1. Clone or download this repository.
2. Copy the contents of the `dist` folder into your Directus `extentions/interfaces` folder.
3. Restart your Directus server.

## Usage

1. Open your Directus project.
2. Go to the collection where you want to enable the copy functionality.
3. Edit the collection schema and add a new field of type "Copy to Field".
4. Configure the destination field for the copy operation.
5. Save the changes and start using the extension.

## Configuration

The extension provides the following configuration options:

- **Destination Field**: The field where the value will be copied to.

## Example

Let's say you have a collection called "Products" with two fields: "Name" and "Description". You want to copy the value of the "Name" field into the "Description" field.

1. Edit the "Products" collection schema.
2. Add a new field "name" of type "Copy to Field".
3. Configure the destination field as "description".
4. Save the changes.
5. Now, an icon will appear next to the "Name" field. Clicking on it will copy the value to the "Destination" field.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
