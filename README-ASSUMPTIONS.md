# Assumptions

Below is a list of my assumptions about the brief I made while working on this project.

- The brief includes a requirement to mutate the data (height or gender). The swapi api does not provide this functionality. One option would be to store the data from it in client side state e.g. react context and mutate that. I don't think this accurately reflects a real application so I have assumed that it is okay to mock an api with mutation functionality. As such, I have used json-server to do this. The data I have populated it with is the data provided by the endpoint `people/?page=1`, per the suggestion in the brief. I have had to 'massage' the data slightly to work with json-server. json-server of course would not be suitable for a production product of course, and so I assume that there would be a BE available which allowed for mutations when we were happy with the initial MVP.

- I assume there is no issues using an open source component library as there was no mention to not use them. I made the choice to use shadcn because it has accessibility built in, and will also speed up the development time. If this was an issue, these components could be swapped out in future for custom built components. I have also used tailwind, as this is a fantastic library to imrpove developer experience for writing CSS alongside React.

- I assume that the tester will have a compatible version of Node. I considered adding `use-node-version=20.15.1` to .npmrc to set it at the latest LTS version but I didn't want to introduce possible build issues for the testing dev at this stage. Node version management could be discussed in future.

- I assume that the engineering team can use pnpm. If the dev does not have pnpm, they can install it [here](https://pnpm.io/installation). I have chosen pnpm because it is the current standard for web dev and is very fast. If this is not possible for the tester, ensure you remove `node_modules` and `pnpm-lock.yaml` and and install using npm instead, e.g. `npm i` to install and `npm run dev` to run the development server.

- There was no mention of the importance of SEO so I have used react-router-dom. If SEO was of major importance, we could consider using a SSG framework such as Astro, or an SSR tool such as Next.js

- There was no mention of authentication / authorisation in the project spec so I assume that we are happy to consider that in future. At some point we would discuss different options, e.g. clerk, Cognito, auth.js, 0auth or firebase auth etc. Also would need to consider permissions and role levels.

- I have not made an assumption on the backend yet. Perhaps we would want to set up a monorepo and include the back-end in this package. That would require discussion though and depends on the spec. If I was requied to build it I would consider migrating this to a Next application using the app router with a postgresql database via prisma, and then making use of serverless functions.

- Performance is not a major priority as it was not listed in the spec. I would have used webp images as one example of making performance improvements.

- Color and branding could be considered in future after this initial stage.
