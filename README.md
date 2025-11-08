# Skardu Organic - E-Commerce Platform

A modern, responsive e-commerce web application for premium organic products sourced from the pristine Himalayan regions of Skardu, Gilgit-Baltistan.

## Overview

Skardu Organic is a fully-featured online store specializing in natural and organic products including Shilajit, cold-pressed oils, dry fruits, and organic groceries. The platform offers a seamless shopping experience with an intuitive interface and comprehensive product catalog.

## Features

### Core Functionality
- **Product Catalog**: Browse a curated collection of premium organic products
- **Advanced Search**: Real-time product search by name or category
- **Shopping Cart**: Full cart management with quantity adjustment
- **User Authentication**: Account creation and login system
- **Checkout Process**: Streamlined ordering via WhatsApp or Email
- **Product Details**: Detailed product pages with image galleries and reviews

### User Experience
- **Responsive Design**: Mobile-first approach with full desktop support
- **Interactive UI**: Smooth animations and hover effects
- **Hero Slider**: Dynamic homepage carousel showcasing featured products
- **Recently Viewed**: Track and display recently browsed products
- **Product Reviews**: Customer review system with ratings
- **FAQ Section**: Comprehensive help and information pages

### Additional Pages
- About Us
- Contact Form
- FAQ
- Refund Policy
- Privacy Policy
- Terms & Conditions

## Tech Stack

- **Frontend Framework**: React 19.2.0 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite 6.2.0
- **State Management**: React Context API
- **Routing**: Hash-based routing
- **Storage**: Browser localStorage for cart and user data

## Project Structure

```
├── App.tsx                 # Main application component
├── types.ts               # TypeScript type definitions
├── constants.ts           # Product data and static content
├── assets.ts              # Image assets
├── components/
│   └── Icons.tsx         # Icon components
├── index.tsx             # Application entry point
├── index.html            # HTML template
└── vite.config.ts        # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd skardu-organic
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Key Components

### Cart System
- Add/remove products
- Quantity management
- Real-time total calculation
- Persistent cart data

### Authentication
- User registration
- Login/logout functionality
- Session persistence
- Protected checkout flow

### Checkout
- Billing information collection
- Order via WhatsApp integration
- Order via Email integration
- Order confirmation system

### Product Features
- Multi-image galleries with zoom
- Customer reviews and ratings
- Related products
- Recently viewed tracking

## Configuration

### Product Management
Products are defined in `constants.ts`. To add or modify products, update the `PRODUCTS` array with the following structure:

```typescript
{
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  imageUrl: string;
  imageUrls: string[];
  description: string;
  benefits: string[];
}
```

### Contact Information
Update store contact details in the Footer component within `App.tsx`:
- Email: support@skarduorganic.com
- Phone: +923488875456
- Store location map embed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Code splitting with React lazy loading
- Optimized images with lazy loading
- Memoized components and callbacks
- Efficient state management
- Minimal re-renders

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

## Contact

For business inquiries or support:
- Email: support@skarduorganic.com
- Phone: +923488875456
- Location: Skardu, Gilgit-Baltistan, Pakistan

## Acknowledgments

- Product images from Unsplash
- Montserrat font from Google Fonts
- Icons and UI components custom-built for the project
