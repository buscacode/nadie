# Mono repo

npm init --scope @nadie --workspace ./packages/utils -y

## build
in a  root directory 

npm run build --workspace ./packages/utils


## use one utility into another 

Now, let’s assume you want to use some utility functions from the @monorepo/utils in the @monorepo/tools package. All you have to do is run the following npm command in the root directory:

npm install @nadie/utils --workspace ./packages/tools



more details: https://earthly.dev/blog/setup-typescript-monorepo/

# AGAIN but with pnpm
For this time, i will use lerna and tsup

- To install a package inside a workspace with pnpm
  ```
  pnpm install mi-causa --filter tools
  ```

- To create a link of the repo to test
  ```
  pnpm link .\packages\utils 
  ```

- To use the link created
  ```
  pnpm link utils
  ```