# Changelog

All notable changes to trackifi-cart will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-12-10

### Added

- **New button variants**: `success`, `warning`, `danger`, `ghost-red`
- **New input types**: `select`, `textarea`, `checkbox`, `radio`
- **TypeScript definitions** (`index.d.ts`) for better IDE support
- **Accessibility improvements**: Added ARIA labels to all interactive elements
- **Disabled button state**: Buttons can now be disabled with visual feedback
- **Loading states**: Better support for async operations
- **CSS custom properties**: Enhanced theming with more CSS variables
- **Form validation helpers**: Support for required fields and validation states

### Changed

- Button component now accepts `disabled` and `ariaLabel` options
- Input component expanded to support multiple input types
- Improved contrast ratios for better accessibility (WCAG AA compliant)
- Enhanced focus states with better keyboard navigation indicators
- Updated documentation with new examples

### Fixed

- Fixed button click events not preventing default in some cases
- Improved modal overlay z-index to ensure proper layering
- Fixed input field spacing inconsistencies

## [0.1.0] - 2024-11-15

### Added

- Initial release
- `CartUI` class for managing shopping cart items
- `createButton` utility with primary, outline, and ghost variants
- `createInput` utility for text and number inputs
- `createCard` component for displaying content
- `createModal` utility for creating accessible modals
- GearVN-inspired red theme with smooth animations
- Basic CRUD operations for cart items (add, update, delete)
- Responsive grid layout
- Auto-summary calculation (total price and item count)

[0.2.0]: https://github.com/vanphatit/trackifi/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/vanphatit/trackifi/releases/tag/v0.1.0
