# Boss Burger

Boss Burger is a comprehensive food ordering application designed to provide an easy and enjoyable user experience for browsing and ordering food, while also offering robust administrative functionalities for managing the menu, user permissions, and order statuses. 

## Features

### User Functionality

**Home Page**: The home page features a sleek, user-friendly UI designed to promote the Boss Burger brand. It provides a welcoming introduction to the app with appealing visuals.

**Menu Page**: Users can browse the menu items with detailed information about each food item, including images, ratings, description, cooking time, and prices. They can add items to their cart, search for specific foods, and filter items by tags.

**Cart Page**: Users can view the items in their cart, adjust quantities, remove items, and proceed to checkout.

**Checkout Page**: This page allows users to enter shipping information, review their order, and complete the purchase using integrated payment methods.

**Order Tracking**: Users can track the status of their orders.

**User Profile**: Users can manage their profile information, including updating personal details and changing passwords.

### Admin Functionality

**Manage Users**: Admins can edit user information and manage user permissions, ensuring the application runs smoothly and securely.

**Manage Menu**: Admins have full control over the menu, allowing them to add, edit, and delete menu items as needed.

**Order Management**: Admins can view all orders and their statuses.

### Additional Features

**Payment Integration**: The application integrates Razorpay for secure and efficient payment processing, ensuring a smooth checkout experience.

**Email Notifications**: Using Nodemailer, the application sends order confirmation emails to users, enhancing communication and reliability.

**Authentication**: The app includes robust user authentication using JWT, enabling secure login, registration, and session management.

## Admin Dashboard

The admin dashboard provides a centralized interface for managing various aspects of the application. Admins can:
- Edit and manage user permissions.
- Oversee and update the menu.
- Monitor order statuses.

## Payment Integration

The application is integrated with Razorpay, allowing users to make secure and seamless payments during checkout. This integration ensures a smooth transaction experience and supports various payment methods.

## Order Notification

Using Nodemailer, the application sends order confirmation emails to users after a successful purchase. This feature enhances user communication and keeps users informed about their order status.

## Technologies Used

- **Frontend**: React, React Router, React Hook Form, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, Nodemailer
- **Payment Gateway**: Razorpay
- **Styling**: CSS Modules

Boss Burger is an attemptto create a website that has sleek UI and deliver a top-notch food ordering experience for users while providing comprehensive tools for administrators to manage the application's content and operations efficiently.
