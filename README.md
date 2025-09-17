# ALPHA HKU Website

![ALPHA HKU Logo](./public/favicon/android-chrome-512x512.png)
> The official website for the ALPHA University Chapter at the University of Hong Kong.

This guide is for developers maintaining or contributing to this project.

## Tech Stack

- Framework: [Next.js](https://nextjs.org/) (App Router)
- Language: [TypeScript](https://www.typescriptlang.org/)
- UI: [shadcn/ui](https://ui.shadcn.com/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Code Quality: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- Package Manager: [pnpm](https://pnpm.io/)

[![CodeFactor](https://www.codefactor.io/repository/github/alpha-hku-org/website/badge)](https://www.codefactor.io/repository/github/alpha-hku-org/website)

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Setup

1. Clone the repo:

    ```bash
    git clone https://github.com/ALPHA-HKU-Org/website.git
    cd website
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

3. Run the dev server:

    ```bash
    pnpm dev
    ```

    The site will be running at `http://localhost:3000`.

## Available Scripts

- `pnpm dev`: Starts the development server with Next.js Turbo.
- `pnpm build`: Creates a production-ready build.
- `pnpm start`: Starts the production server (requires `pnpm build` first).
- `pnpm lint`: Runs ESLint to find code quality issues.
- `pnpm format`: Formats all files. It's recommended to use the [Prettier VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for format-on-save.

## Project Structure

```bash
.
├── src/
│   ├── app/             # Next.js App Router pages and layouts
│   ├── components/
│   │   ├── primitives/  # Small components that take little space on the screen
│   │   ├── sections/    # Large components that can take up the entire screen
│   │   └── ui/          # Only put shadcn/ui components here for clarity
│   ├── lib/             # frequently reused functions and data
│   └── providers/       # App-wide context and state providers
├── public/              # non-code assets
```

## Working with `shadcn/ui`

This project uses `shadcn/ui`. Do not install components from npm or other package managers directly. Use the CLI to add new components to ensure they are added correctly to the project.

### Adding New Components

To add a new component, run the following command, replacing `button` with the component you need:

```bash
pnpm dlx shadcn@latest add button
```

This command will add the new component file (e.g., `button.tsx`) to `src/components/ui`. You can then import and use it throughout the application.
