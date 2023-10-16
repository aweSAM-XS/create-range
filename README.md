# create-range

## Description

`create-range` is a TypeScript utility function that generates an array of numbers within a specified range. This function simplifies the process of creating numeric ranges, making it easier to work with numbers in your applications.

## Installation

You can install the `create-range` package using npm:
`npm install create-range`

## Usage

To use the `createRange` function in your TypeScript project, import it and call it with the desired range parameters. The function takes two arguments:

- `min` (optional, default: 1): The minimum value of the range.
- `max`: The maximum value of the range.

Here's an example of how to use it:

```typescript
import { createRange } from 'create-range';

// Generate a range from 1 to 10 (inclusive)
const range = createRange(1, 10);

console.log(range); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Parameters

- `min` (optional): The minimum value of the range. If not provided, it defaults to 1.
- `max`: The maximum value of the range.

### Return Value

The function returns an array of numbers within the specified range.

## License

This package is open-source and available under the MIT License. Feel free to use it in your projects and contribute to its development on [GitHub](https://github.com/aweSAM-XS/create-range).

## Issues and Contributions

If you encounter any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/aweSAM-XS/create-range). Contributions are also welcome!

## Author

- [awesam](https://github.com/aweSAM-XS)

Thank you for using `create-range`! We hope it simplifies your numeric range generation needs in TypeScript.
