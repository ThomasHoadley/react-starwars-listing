# Get started

1. Install dependencies - `pnpm install`

2. Start json-server and vite - `pnpm dev`. It will concurrently run json-server and vite. You can then visit [http://localhost:5173/](http://localhost:5173/)

# Folder Structure

Below is an overview of the projects folder strucutre and it's usage. It is an opinionated structure used to help reduce technical debt and provide a common structure for teams to work on. Note that you can also nest folders such as hooks.

- api // includes the functions which will handle our api queries
- components // small reuseable pieces, used across the application
  - atoms - basic building blocks. single elements e.g. a container
  - molecules - combine multiple atoms e.g. a filter-container
  - organisms - combine multiple molecules e.g. a header
  - shadcn - shadcn components are installed here
- features // medium-large features that encapsulate various components and hooks etc.
  - example-feature.tsx
    - components // for components that are specific to this feature
    - hooks
      - use-filter.tsx
- helpers // includes small helper functions
- hooks // global hooks
- services // reusable. like helpers, but bigger, basically more complex functionality that involves more than just a small reusable helper
- store // for inclusion of store e.g. zustand or jotai
- layouts // used to wrap pages with a generic layout
- tests // used to store test related functions
- pages // holds the content of the page.
  - home
    - index.tsx

# General Useage notes

- shadcn is used for the UI library - https://ui.shadcn.com/docs/components/
- If you add a new context, remember to also add it to the custom test render function in `src/tests/test-utils.tsx`.
- To view the built project, I would reccomened running `pnpm build` to build the folder then `cd dist`, and then running `npx http-server`. Note this will require npx to be installed.
- Layouts are added to page at the routes level here `src/pages/routes.tsx`

# General work notes

