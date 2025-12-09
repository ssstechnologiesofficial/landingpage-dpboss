# DP Boss Trusts - Google Play Store Clone

## Overview
A static Google Play Store app listing page clone for the DP Boss Trusts app. The page displays app information, screenshots, ratings, reviews, and allows users to download the APK file.

## Features
- App header with logo, title, rating (4.7 stars), download count (100K+), and action buttons
- Install button downloads the APK file directly
- Horizontal scrolling screenshot gallery with 5 app screenshots
- Expandable app description with "See more/less" toggle
- Data safety section with privacy information
- Ratings section with star distribution chart
- User review cards with interactive helpful voting

## Tech Stack
- Frontend: React + TypeScript + Vite
- Styling: Tailwind CSS + Shadcn UI components
- Routing: Wouter

## Project Structure
```
client/src/
├── components/
│   ├── AppHeader.tsx       # App icon, title, rating, install button
│   ├── ScreenshotGallery.tsx # Horizontal scrolling screenshots
│   ├── AboutSection.tsx    # Expandable description
│   ├── DataSafetySection.tsx # Privacy info cards
│   ├── RatingsSection.tsx  # Rating distribution chart
│   ├── ReviewCard.tsx      # User review with voting
│   └── PageHeader.tsx      # Top navigation bar
├── pages/
│   └── home.tsx            # Main page assembling all components
└── App.tsx                 # Router configuration

client/public/
└── dpboss.apk              # APK file for download

attached_assets/
├── logo_*.png              # App logo
└── WhatsApp_Image_*.jpeg   # App screenshots
```

## Running the App
The app runs on port 5000 using `npm run dev`.
