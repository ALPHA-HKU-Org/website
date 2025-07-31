# ALPHA HKU Official Website

This is the official website for the ALPHA University Chapter at the University of Hong Kong, built with Next.js, TypeScript, and shadcn/ui.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [pnpm](https://pnpm.io/installation)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ALPHA-HKU/website.git
   cd website
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

### Running the Development Server

To start the development server, run:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

The project follows a standard Next.js App Router structure:

```bash
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── app/             # Application routes and layouts
│   ├── components/      # Reusable components
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...
│   ├── lib/             # Utility functions
│   └── ...
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

- **`src/app`**: Contains all the application's routes, with each folder representing a URL segment. `layout.tsx` defines the root layout, and `page.tsx` defines the content for each route.
- **`src/components`**: Home to all reusable React components.
  - **`src/components/ui`**: This directory is specifically for components added from `shadcn/ui`.
- **`src/lib`**: Contains shared utility functions, such as the `cn` function for merging Tailwind CSS classes.
- **`public`**: Stores all static assets that are served directly, such as images and the site's manifest.

## Building for Production

To create a production-ready build, run the following command:

```bash
pnpm build
```

This will generate an optimized build in the `.next` directory, which can then be deployed.

## `shadcn/ui` Integration

We leverage `shadcn/ui` for our core UI components to ensure consistency and accessibility.

### Existing Components

The following `shadcn/ui` components are currently in use:

- `Button`
- `Card`
- `Carousel`
- `Collapsible`
- `DropdownMenu`
- `NavigationMenu`
- `Sheet`

### Adding New Components

To add a new component, use the `shadcn` CLI. This is the recommended approach as it handles all dependencies automatically.

For example, to add the `Button` component, run:

```bash
pnpm dlx shadcn@latest add button
```

This will add the new component to `src/components/ui` and ensure it's ready for use.
