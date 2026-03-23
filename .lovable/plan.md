

## Plan: Replace Logo with Tricolor Horizontal SVG & Remove "Learn with Uniti" from Navigation

### Summary

Two changes: (1) Replace the current white PNG logo with the uploaded tricolor SVG master brand logo across all locations, and (2) remove "Learn with Uniti" from the navbar and footer navigation while keeping the page/route intact.

### Changes

**1. Copy the new logo into the project**
- Copy `user-uploads://Uniti-MasterBrand-Tricolor-Horizontal.svg` to `src/assets/uniti-masterbrand-tricolor.svg`

**2. Update Navbar (`src/components/Navbar.tsx`)**
- Change the logo import from `logo-uniti-outline.png` to the new tricolor SVG
- Remove `{ label: "Learn with Uniti", path: "/learn" }` from the `navLinks` array
- The route in `App.tsx` stays — the page remains accessible via direct URL

**3. Update Footer (`src/components/Footer.tsx`)**
- Remove the "Learn with Uniti" link from the footer Pages list

**4. Update ActivitiesSection logo (`src/components/home/ActivitiesSection.tsx`)**
- Replace `logo-uniti-white.png` import with the tricolor SVG so the logo is visible against dark backgrounds on the Home page

### Technical Details

- The tricolor SVG uses navy, purple, and blue fills — it will be legible on both the white navbar and dark section backgrounds
- The `/learn` route remains in `App.tsx` so existing links or bookmarks still work

