## About the project

This monorepository includes [Ditsmod](https://ditsmod.github.io/en/) applications starter.

All applications are located in `apps/*`.

From start you need to do:

```bash
npm install
```

After that, copy `apps/backend/.env-example` to `apps/backend/.env`:

```bash
cp apps/backend/.env-example apps/backend/.env
```

And fill this file.

## Start the web server in develop mode

```bash
npm run start:dev
```

You can check the server operation using `curl`:

```bash
curl -i localhost:3000/api/hello
```

Or simply by going to [http://localhost:3000/api/hello](http://localhost:3000/api/hello) in your browser.

By default, the application works with `info` log level. You can change it in the file `apps/backend/src/app/app.module.ts`.

## Start the web server in production mode

```bash
npm run build
npm run start-prod
```

### Add `AGENTS.md` and `SKILL.md` for AI agents {#add-agent-skills}

The file [AGENTS.md][1] is intended for AI agents and should be placed in the root directory of the repository. This file will be taken into account by the AI agent every time you interact with the agent. To copy the latest version of `AGENTS.md`, run the following command:

```bash
cd my-app # Go to starter repository
npm run setup:agents
```

Additionally, you can install [AI agent skills][2] to help them better understand the specifics of Ditsmod applications:

```bash
npx skills add ditsmod/agent-skills --skill '*' -y
```

AI agent skills are only loaded when needed, when you ask something relevant to them.

[1]: https://github.com/ditsmod/agent-skills/blob/main/AGENTS.md
[2]: https://github.com/ditsmod/agent-skills/tree/main
