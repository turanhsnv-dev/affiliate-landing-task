# GCLID Injection Testing Guide

## Overview

This landing page implements GCLID (Google Click ID) injection functionality that automatically appends the `gclid` parameter value from the current page URL to all affiliate links in the Brand Cards section.

## How It Works

1. When a user lands on the page with a `gclid` parameter in the URL (e.g., `/?gclid=TEST_VALUE`)
2. The system extracts only the **value** of the `gclid` parameter (the string after `=`)
3. This value is appended **directly** to all Brand Card affiliate links
4. **No separators** are used (no `?`, `&`, or `=`)

## Example

- **User lands on:** `http://localhost:3000/?gclid=TEST_VALUE`
- **Original affiliate link:** `https://brand-offer.com/click123`
- **Final clickable link:** `https://brand-offer.com/click123TEST_VALUE`

## Testing Instructions

### Method 1: Manual URL Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000/?gclid=TEST_VALUE
   ```

3. Open the browser's Developer Tools (F12)
4. Go to the "Elements" or "Inspector" tab
5. Find any "Visit Site" button in the Brand Cards section
6. Right-click on the button and select "Inspect" or hover to see the link
7. Verify that the `href` attribute shows: `https://brand-offer.com/click123TEST_VALUE`

### Method 2: Console Testing

1. Open the page with a gclid parameter: `http://localhost:3000/?gclid=ABC123XYZ`
2. Open Developer Tools (F12) and go to the Console tab
3. Run this JavaScript code:
   ```javascript
   document.querySelectorAll('a[href*="brand-offer.com"]').forEach(link => {
     console.log('Link:', link.href);
   });
   ```
4. Verify that all links contain the gclid value appended at the end

### Method 3: Network Tab Testing

1. Open Developer Tools (F12) and go to the "Network" tab
2. Navigate to the page with gclid: `http://localhost:3000/?gclid=TEST_VALUE`
3. Click on any "Visit Site" button
4. Check the network request - the URL should include the gclid value appended

## Code Location

The GCLID injection logic is implemented in:
- **Utility function:** `src/utils/gclid.ts`
- **Component usage:** `src/components/BrandCard.tsx`

## Technical Details

- The logic uses `URLSearchParams` to extract the gclid value from the current page URL
- The value is appended using simple string concatenation (no separators)
- The logic runs on the client side using React's `useEffect` hook
- Each Brand Card independently processes its affiliate URL

## Expected Behavior

✅ **Correct:** `https://brand-offer.com/click123TEST_VALUE`  
❌ **Incorrect:** `https://brand-offer.com/click123?gclid=TEST_VALUE`  
❌ **Incorrect:** `https://brand-offer.com/click123&gclid=TEST_VALUE`  
❌ **Incorrect:** `https://brand-offer.com/click123=gclidTEST_VALUE`

