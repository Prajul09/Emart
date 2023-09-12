
# Project Name: E-Mart

## Overview::::

This project is a simple e-commerce product listing web application built using React and Next.js. It allows users to browse a list of products, search for specific products, apply filters, view product details, and add products to their shopping cart.

## Design Decisions::::

### Technology Stack

- **React and Next.js:** Chose React as the front-end library and Next.js for server-side rendering and routing for improved SEO and performance.

- **LocalStorage:** Utilized browser's `localStorage` for storing cart items persistently across sessions.

- **Tailwind CSS:** Leveraged Tailwind CSS for styling to maintain a clean and responsive design.

### Component-Based Architecture

- Organized the code into reusable components for better maintainability and reusability.

### Product Card Component

- Designed a reusable `ProductCard` component to display product information, including title, company, ratings, prices, and buttons for viewing details and adding to the cart.


### Search and Filters

- Implemented a search bar to allow users to search for products by name.
- Created category and color filters to help users narrow down their product selection.

### Product Details Popup

- Designed a product details popup to display additional information about a product when clicked.
- Users can also add the product to their cart from this popup.

### Shopping Cart

- Implemented a shopping cart icon in the header that displays the number of items in the cart.
- Users can click on the cart icon to view their cart and make changes.

### Dummy Data

- Created a `dummyData` module to simulate product details, including titles, descriptions, images, prices, ratings, and more. This data is used for displaying product information.


## Challenges Faced::::

- **State Management:** Managing and synchronizing state between different components, especially the shopping cart, posed a challenge. Solution: Leveraged React's state management and `localStorage` for cart persistence.

- **Filtering:** Implementing filtering for categories and colors required careful handling of state changes and filter logic. Solution: Created separate filter components and managed filter states within the main `Home` component.

- **Responsiveness:** Ensuring the web application is responsive across different screen sizes and devices was a priority. Solution: Utilized Tailwind CSS classes and breakpoints to achieve responsiveness.

## Solutions Implemented::::

- **State Management:** Utilized React's `useState` and `useEffect` hooks for managing local component states. Persisted the shopping cart data using `localStorage`.

- **Filtering:** Created separate filter components (`SearchBar` and `Filters`) while managing filter states within the `Home` component. Used event handlers to update filter states and filter products accordingly.

- **Responsiveness:** Implemented a responsive design using Tailwind CSS classes and responsive breakpoints. Ensured that the web application looks and works well on various screen sizes.

## Usage::::

1. Clone the repository: `git clone https://github.com/Prajul09/Emart/`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open the application in your browser at `http://localhost:3000`
5. My project is deployed over vercel : `https://emart-prajul09.vercel.app/`

## Conclusion::::

This project demonstrates a basic e-commerce product listing application with essential features. It addresses design and development challenges while prioritizing a responsive and user-friendly interface. Further improvements and feature additions can be made for a complete e-commerce solution.
