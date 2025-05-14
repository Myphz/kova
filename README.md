# Phoexa Sveltekit Starter Template

This project was kickstarted using [Phoexa's Sveltekit Starter Template](https://github.com/Phoexa-Ltd/sveltekit-starter).

## Template

This is a simple SvelteKit template with some libraries already installed and configured, including:

- Tailwind
- Eslint
- Prettier
- Dockerfile
- Vscode config
- Shadcn Svelte config
- Basic tailwind setup with automatic responsive font settings
- Fly.io config
- Github Actions for automatic deploy

It uses `adapter-node`, which may not be what you need.
It also automatically set up import aliases for components structure:

- @utils -> `src/utils`
- @organisms -> `src/lib/components/organisms`
- @molecules -> `src/lib/components/molecules`
- @atoms -> `src/lib/components/atoms`

## Configure

- Run `npx npm-check-updates -u && npm i` to update all libraries
- Set new git origin
- Change project name in `package.json`
- Update tailwind design system
