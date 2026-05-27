# CareerXel Platform

Mobile-first CareerXel website built with Next.js, Tailwind CSS, Strapi, and MySQL.

## Apps

- `frontend`: Next.js App Router site with SEO metadata and Strapi-backed page content.
- `backend`: Strapi CMS configured for MySQL.

## Local Setup

1. Create the MySQL database:

```sql
CREATE DATABASE careerxel CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

2. Install dependencies:

```bash
npm install
npm --prefix frontend install
npm --prefix backend install
```

3. Run Strapi:

```bash
npm --prefix backend run develop
```

4. Run the frontend:

```bash
npm --prefix frontend run dev
```

The frontend uses fallback content until matching Strapi entries are published.
