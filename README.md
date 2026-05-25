# 1.3 | 2.8 Digital Identity

A modern, minimalistic website for empowering Kerala SMEs with proper online presence and credibility.

## Tech Stack

- **Framework**: Astro (Static Site Generator)
- **Styling**: Tailwind CSS
- **Font**: Quicksand (Google Fonts)
- **Deployment**: Cloudflare Pages

## Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The static files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. **Push to GitHub/GitLab/Bitbucket**

   ```bash
   git remote add origin <your-repository-url>
   git push -u origin master
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
   - Click "Create a project"
   - Connect your Git repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - Click "Save and Deploy"

### Option 2: Direct Upload

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to Cloudflare Pages**
   - Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
   - Click "Create a project"
   - Select "Upload assets"
   - Upload the contents of the `dist/` directory
   - Click "Deploy site"

## Project Structure

```
onethreetwoeight/
├── src/
│   ├── components/
│   │   ├── DigitalIdentity.astro    # Logo component
│   │   └── ServiceCard.astro          # Reusable service card
│   ├── layouts/
│   │   └── Layout.astro               # Main layout
│   └── pages/
│       ├── index.astro                 # Homepage
│       ├── blank.astro                 # Blank page
│       └── platforms.astro            # Platform partners page
├── public/                            # Static assets
├── astro.config.mjs                   # Astro configuration
├── tailwind.config.mjs                # Tailwind configuration
└── package.json                       # Dependencies
```

## Color Palette

- **White**: `#ffffff` (Background)
- **Green**: `#7a9e7e` (Accent text)
- **Dark**: `#2c3e50` (Headings)
- **Blue**: `#74a4bc` (Borders/accents)

## Customization

### Modify Content

Edit the respective files in `src/pages/` to change page content.

### Update Styling

- Modify `tailwind.config.mjs` for Tailwind customization
- Edit component styles in individual `.astro` files
- Update color variables in inline styles

### Add New Pages

Create new `.astro` files in `src/pages/` - they'll automatically become routes.

## License

© 2026 1.3 | 2.8 Digital Identity. All rights reserved.
