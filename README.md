# E-commerce Page "MUZIK"

This is an e-commerce application built with React, TypeScript, Firebase, Cloudinary, React Router DOM, Tanstack React Query, and TailwindCSS. The application features Google account authentication, product listing by category, product detail pages, a shopping cart, and admin functionalities for adding new products.


## Features

- **User Authentication**: Google account login using Firebase Authentication.
- **Product Viewing**: View all products or filter by instrument categories.
- **Product Details**: Detailed view of each product.
- **Shopping Cart**: Add products to the shopping cart.
- **Admin Functionality**: Add new products (accessible only to admin users).
- **Image Upload**: Save product images using Cloudinary.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Firebase**: Backend services for authentication and realtime database.
- **Cloudinary**: Image and video management in the cloud.
- **React Router DOM**: Declarative routing for React applications.
- **Tanstack React Query**: Data-fetching library for React.
- **TailwindCSS**: Utility-first CSS framework for styling.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Cloudinary account

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/e-commerce-page.git
    cd e-commerce-page
    ```

2. **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure Firebase**:
    - Create a new Firebase project.
    - Enable Authentication with Google.
    - Enable Realtime Database.
    - Copy the Firebase configuration and update `.env` file:
      ```env
      REACT_APP_FIREBASE_API_KEY=your-api-key
      REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
      REACT_APP_FIREBASE_DATABASE_URL=your-database-url
      REACT_APP_FIREBASE_PROJECT_ID=your-project-id
      REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
      REACT_APP_FIREBASE_APP_ID=your-app-id
      ```

4. **Configure Cloudinary**:
    - Sign up for a Cloudinary account.
    - Note your Cloudinary Cloud name, API key, and API secret.
    - Update `.env` file:
      ```env
      REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloud-name
      REACT_APP_CLOUDINARY_API_KEY=your-api-key
      REACT_APP_CLOUDINARY_API_SECRET=your-api-secret
      ```

5. **Start the development server**:
    ```bash
    npm start
    # or
    yarn start
    ```

6. **Open your browser** and navigate to `http://localhost:3000`.

## Usage

- **View Products**: Browse all products or filter by category.
- **Product Details**: Click on a product to see its details.
- **Shopping Cart**: Add products to your cart and view your cart.
- **Admin**: Admin users can add new products through the admin panel.

## Admin Functionality

To access admin functionalities:

1. Log in with an account that has admin privileges.
2. Navigate to the admin panel to add new products.
3. Fill in the product details and upload images using Cloudinary.

## Project Structure

```plaintext
src/
├── assets/           # Static assets
├── components/       # Reusable components
├── hooks/            # Custom hooks
├── pages/            # Page components
├── services/         # Firebase and Cloudinary services
├── styles/           # TailwindCSS styles
├── utils/            # Utility functions
├── App.tsx           # Main App component
├── index.tsx         # Entry point
├── routes.tsx        # Application routes
