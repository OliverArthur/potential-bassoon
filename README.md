# Random beers and dishes

> This an example project setup by using Micro front-end architecture approach.

## How can I use it

First you must clone the repository into your local machine.

```bash
git clone https://github.com/OliverArthur/potential-bassoon.git
```

Then you have to cd to the directory and run the following command:

**Yarn:** if your prefer to use yarn instead of npm.

```bash
yarn
```

**NPM:** if you prefer to use npm instead of yarm.

```bash
npm install
```

## How can I run the app?

After you have installed the dependencies you can run the app by running the following command:

By using yarn:

```bash
yarn dev
```

By using NPM:

```bash
npm run dev
```

this command will start the development server.

### Folder structure

```md
root
|-- config
|-- public
|-- src
| |-- assets
| |-- modules
| | |-- beer
| | | |-- components
| | | |-- hooks
| | | |-- models
| | | |-- services
| | | |-- views
| | |-- food
| | | |-- components
| | | |-- hooks
| | | |-- models
| | | |-- services
| | | |-- views
| | |-- index.ts
| |-- shared
| | |-- infrastructure
| | |-- index.ts
| |-- App.vue
| |-- env.d.ts
| |-- global.d.ts
| |-- main.ts
| |-- node.d.ts
.editorconfig
.gitignore
package.json
README.md
tsconfig.json
vite.config.ts
yarn.lock
```

### Folder explanation

**config folder:**

This folder contains all the configuration files for the project.

**public folder:**

This folder contains all the static files for the project.

**src folder:**

This folder contains all the source code for the project.

**assets folder:**

This folder contains all the assets for the project.

**modules folder:**

This folder contains all the different application modules for the main app.
eg: `beer module`, `food module`, etc.

**shard folder:**

This folder contains all the share code for the project.

### Technologies used

- [Vue 3](https://v3.vuejs.org/) - Front-end framework
- [Vitejs](https://vitejs.dev/) - Front-end build tool

**Requirements:**

- [Node.js](https://nodejs.org/) at latest versions
- [NPM](https://www.npmjs.com/) at latest versions
- [vscode](https://code.visualstudio.com/) - IDE, is not required but recommended.
