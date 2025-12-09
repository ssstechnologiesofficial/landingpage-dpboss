# Design Guidelines: Google Play Store App Listing Clone

## Design Approach
**Reference-Based: Google Play Store / Material Design**

This is a direct clone of a Google Play Store app listing page. Follow Material Design principles with Google Play's specific implementation patterns for app store listings.

## Typography
- **Primary Font**: Roboto (Google Fonts CDN)
- **Headers**: Roboto Medium (500 weight)
  - App Title: 24px
  - Section Headers: 20px
- **Body Text**: Roboto Regular (400 weight)
  - App Stats: 14px
  - Description: 14px with 1.5 line height
  - Review Text: 14px
- **Small Text**: Roboto Regular 12px (metadata, dates)

## Layout & Spacing
**Spacing System**: Use Tailwind units of 2, 3, 4, 6, 8, and 12

- **Container**: Max-width 1200px, centered with px-4 padding
- **Section Spacing**: py-6 between major sections
- **Card Padding**: p-4 for content cards
- **Grid Gaps**: gap-4 for screenshot galleries, gap-6 for review cards

## Component Library

### App Header
- Horizontal layout: App icon (80px circle) + App metadata + Action buttons
- App icon with subtle shadow (shadow-md)
- Rating stars (filled/half-filled using Font Awesome icons)
- Three action buttons: Install (primary green), Share (outline), Wishlist (icon)
- Download count and age rating as metadata badges

### Screenshot Gallery
- Horizontal scrollable container (overflow-x-auto with hidden scrollbar)
- 5 placeholder screenshots in 9:19.5 aspect ratio (mobile screens)
- Width: 200px each with gap-3
- Rounded corners (rounded-lg) with shadow-sm
- Smooth scroll behavior

### About Section
- Expandable text with "See more" link
- Initial display: 3 lines with text-ellipsis
- Expand to full description on click
- Update date and category badges below

### Data Safety Card
- Background: bg-gray-50 with rounded-lg and p-6
- Icon + text rows for each safety feature
- "Learn more" links in Material Blue (#1976D2)

### Ratings Section
- Large rating number (48px) with star display
- Horizontal bar chart showing 5-4-3-2-1 star distribution
- Bars use Material Green gradient
- Total review count displayed

### Review Cards
- White background with rounded-lg and shadow-sm
- User avatar (50px circle) with initials fallback
- Username in 16px Roboto Medium
- Date in gray-600, 12px
- Star rating display
- Review text with 14px
- Helpful counter + Yes/No buttons (outline style)
- Bottom border between cards

## Images
**App Icon**: Square logo with rounded corners (80x80px), placed at top of header section

**Screenshots**: 5 mobile app screenshots displayed in horizontal scrollable gallery. Use placeholder images showing app interface screens.

**User Avatars**: Circular avatars in review cards (50x50px). Use colored circles with white initials as fallbacks.

## Color Palette References
- Material Green for Install button and rating bars
- Material Blue (#1976D2) for links
- Gray scale for backgrounds and borders (100, 200, 300, 600)
- White cards on light gray page background

## Interaction Patterns
- Expandable description with smooth transition
- Horizontal scroll for screenshots (touch-friendly)
- Helpful vote buttons toggle state on click
- No complex animations or transitions
- Focus states on all interactive elements for accessibility

## Responsive Behavior
- **Mobile (<768px)**: Single column, full-width cards, smaller text sizes
- **Tablet (768px-1024px)**: Maintain layout, adjust spacing
- **Desktop (>1024px)**: Centered container at max-width, optimal reading width for reviews

## Accessibility
- All buttons have proper ARIA labels
- Star ratings include screen reader text
- Proper heading hierarchy (h1 for app title, h2 for sections)
- Sufficient contrast ratios for all text
- Keyboard navigation support for all interactive elements