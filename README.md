# Product API — Test Coverage Exercise

An existing Express API prepared for a small test-coverage task.

## Requirements
- Node.js 18 or later
- npm
- Visual Studio Code
- GitHub Desktop

## Install and run
```bash
npm install
npm start
```
API: `http://localhost:3000`

Try the existing success path:
```bash
curl -i http://localhost:3000/api/products/1
```

Run the existing test suite:
```bash
npm test
```

## Your task
Open `tests/products.test.js` and add exactly two tests inside the existing `describe` block:

1. **Product not found:** GET `/api/products/999`; expect HTTP `404` and `{ "error": "Product not found" }`.
2. **Invalid product ID:** GET `/api/products/abc`; expect HTTP `400` and `{ "error": "Product ID must be a positive integer" }`.

Follow the existing `request`, `it`, and `expect` conventions. Do not change application code or the existing success test.

Run `npm test` again. Expected result: all three tests pass.

## GitHub Desktop workflow
1. Add this local folder in GitHub Desktop using **File → Add Local Repository**.
2. Create branch `test/product-lookup-edge-cases`.
3. Make the two test additions in VS Code.
4. Review the diff. Only `tests/products.test.js` should be modified.
5. Commit with: `test: cover missing and invalid product IDs`
6. Publish/push the branch to a GitHub repository you own or can write to.

If this folder is not already a clone of a GitHub repository, create/select an empty remote repository and publish it through GitHub Desktop.

## Evidence
- Terminal output showing all three tests passing.
- GitHub Desktop Changes tab showing only `tests/products.test.js`.
- GitHub Desktop History tab showing the commit.
- Successful push/publish confirmation and clean working tree.
