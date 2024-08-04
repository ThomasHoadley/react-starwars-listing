# Get started

1. Install dependencies - `pnpm install`

2. Start json-server and vite - `pnpm dev`. It will concurrently run json-server and vite. You can then visit [http://localhost:5173/](http://localhost:5173/)

- Note: I assume that the engineering team can use pnpm. If the dev does not have pnpm, they can install it [here](https://pnpm.io/installation). I have chosen pnpm because it is the current standard for web dev and is very fast. If this is not possible for the tester, ensure you remove `node_modules` and `pnpm-lock.yaml` and and install using npm instead, e.g. `npm i` to install and `npm run dev` to run the development server.

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

# Assumptions

Below is a list of my assumptions about the brief I made while working on this project.

- The brief includes a requirement to mutate the data (height or gender). The swapi api does not provide this functionality. One option would be to store the data from it in client side state e.g. react context and mutate that. I don't think this accurately reflects a real application so I have assumed that it is okay to mock an api with mutation functionality. As such, I have used json-server. The data I have populated it with is the data provided by the endpoint `people/?page=1`, per the suggestion in the brief. I have had to 'massage' the data slightly to work with json-server. json-server of course would not be suitable for a production product of course, and so I assume that there would be a BE available which allowed for mutations when we were happy with the initial MVP. For the other endpoints which don't require mutation, I have used the live swapi endpoints instead (https://swapi.dev/api/).

- I assume there is no issues using an open source component library as there was no mention to not use them. I made the choice to use shadcn because it has accessibility built in, and will also speed up the development time. If this was an issue, these components could be swapped out in future for custom built components. I have also used tailwind, as this is a fantastic library to imrpove developer experience for writing CSS alongside React.

- I assume that the tester will have a compatible version of Node. I considered adding `use-node-version=20.15.1` to .npmrc to set it at the latest LTS version but I didn't want to introduce possible build issues for the testing dev at this stage. Node version management could be discussed in future.

- There was no mention of the importance of SEO so I have used react-router-dom. If SEO was of major importance, we could consider using a SSG framework such as Astro, or an SSR tool such as Next.js

- There was no mention of authentication / authorisation in the project spec so I assume that we are happy to consider that in future. At some point we would discuss different options, e.g. clerk, Cognito, auth.js, 0auth or firebase auth etc. Also would need to consider permissions and role levels.

- UI, Color and branding could be more carefully considered in future after the initial version.

# Improvements

- Improve the testing of each of the components, currently the homepage is tested, but I would like to test the character page to ensure all correct data displays and that the mutation function works.
- Use the name for a better character page slug.
- Improve error and loading state handling.
- Add types for the film endpoint.
- prune the planet results data so that we only send through what we need.
