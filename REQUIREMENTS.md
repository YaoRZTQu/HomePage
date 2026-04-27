# Deployment Requirements

This project is a Next.js personal homepage and blog. JavaScript dependencies are defined by `package.json` and locked by `pnpm-lock.yaml`.

## Runtime

- OS: Linux server, such as Alibaba Cloud ECS
- Node.js: `v25.8.2` used in local development
- pnpm: `10.33.2` used in local development
- Package manager: pnpm
- Web framework: Next.js App Router
- Reverse proxy: Apache

Recommended server setup:

```bash
node -v
pnpm -v
```

Expected:

```txt
Node.js v25.8.2
pnpm 10.33.2
```

## Main Dependencies

Production dependencies:

- `next@16.2.4`
- `react@19.2.4`
- `react-dom@19.2.4`
- `next-mdx-remote@^6.0.0`
- `gray-matter@^4.0.3`
- `reading-time@^1.5.0`
- `lucide-react@^1.11.0`
- `clsx@^2.1.1`
- `tailwind-merge@^3.5.0`

Development dependencies:

- `typescript@^5`
- `tailwindcss@^4`
- `@tailwindcss/postcss@^4`
- `eslint@^9`
- `eslint-config-next@16.2.4`
- `prettier@^3.8.3`
- `prettier-plugin-tailwindcss@^0.7.3`

Install exact locked versions on the server:

```bash
pnpm install --frozen-lockfile
```

## Build And Run

Build:

```bash
pnpm build
```

Run Next.js on localhost port `3000`:

```bash
PORT=3000 pnpm start
```

Recommended process manager:

```bash
pnpm add -g pm2
PORT=3000 pm2 start "pnpm start" --name my-homepage
pm2 save
pm2 startup
```

## Apache Requirements

Apache should listen on public ports `80` and `443`, then reverse proxy to Next.js on `127.0.0.1:3000`.

Required Apache modules:

- `proxy`
- `proxy_http`
- `proxy_wstunnel`
- `headers`
- `ssl`
- `rewrite`

Ubuntu/Debian:

```bash
sudo a2enmod proxy proxy_http proxy_wstunnel headers ssl rewrite
sudo systemctl restart apache2
```

## Port And Firewall

Expose publicly:

- `80/tcp`
- `443/tcp`

Restrict SSH:

- `22/tcp`, preferably only from your own IP

Do not expose publicly:

- `3000/tcp`

Next.js should be accessed only by Apache through `127.0.0.1:3000`.

## Environment Variables

No required environment variables for the first version.

Before production deployment, update these files with your real domain:

- `src/app/layout.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
