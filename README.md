# SafariCode - Modern Web Development

![SafariCode Logo](/src/assets/Zeus%20Corp.svg)

## Overview

SafariCode is a modern web development platform providing lightning-fast, mobile-optimized, and enterprise-grade web solutions. This project showcases a sleek tech-forward design with monospaced typography and modern UI elements.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the application running.

## 🔍 Common Issues & Solutions

### 404 Errors When Navigating

If you're experiencing 404 errors when clicking links while the app is deployed:

1. **Static Export Configuration**

   This is likely because your Next.js app is configured for static export (using `next export`), which doesn't support client-side routing out of the box.

   Add the following to your `next.config.js`:

   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: "standalone",
     trailingSlash: true,
   };

   module.exports = nextConfig;
   ```

2. **Deployment Platform Configuration**

   Ensure your hosting platform is configured to handle client-side routing:

   - **Vercel/Netlify**: Add a `_redirects` file or `vercel.json` with appropriate redirect rules
   - **Apache**: Configure `.htaccess` file
   - **Nginx**: Update server configuration

   Example Vercel configuration (`vercel.json`):

   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/" }]
   }
   ```

   Example Netlify configuration (`_redirects`):

   ```
   /*    /index.html   200
   ```

3. **Custom Server Setup**

   If you're using a custom server, make sure it's configured to serve your `index.html` for all routes.

### Development vs Production Behavior

If the routing works in development but not in production:

- Development uses Next.js development server which handles client-side routing
- Production may use a static file server which requires specific configuration

## 🧩 Project Structure

```
safaricode/
├── components/        # Reusable UI components
│   ├── layout/        # Layout components (Navbar, Footer, etc.)
│   └── ui/            # UI elements (Buttons, Cards, etc.)
├── pages/             # Application pages
├── public/            # Static assets
├── styles/            # Global styles
└── utils/             # Utility functions
```

## ⚙️ Key Features

- **Modern Navbar**: Tech-forward navbar with monospaced typography
- **3D Website Preview**: Interactive website preview with floating feature cards
- **Mobile Responsive**: Fully responsive design for all device sizes
- **Performance Optimized**: Lighthouse score of 95+ for performance

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🛠️ Built With

- Next.js
- React
- Tailwind CSS
- Framer Motion

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📬 Contact

For any questions or support, please contact us at support@szeuscorpeation.ke
