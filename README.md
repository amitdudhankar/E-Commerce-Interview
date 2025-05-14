
# E-Commerce Website

This is an e-commerce website built using React and Tailwind CSS, providing users with a responsive and interactive shopping experience. It allows users to browse products, view product details, add items to their cart, and place orders.

## Features

* **Product Listing**: View a list of products fetched from an external API, with filtering options based on category or search query.
* **Product Details**: View detailed information about a product, including images, description, price, and category.
* **Shopping Cart**: Add products to the cart, update quantities, and view the total price.
* **Checkout Process**: Place an order with billing information and a summary of the items in the cart.
* **Order History**: View a list of past orders placed by the user, including product details, quantities, and total price.
* **Responsive Design**: Fully responsive layout that adjusts for mobile, tablet, and desktop screens using Tailwind CSS.

## Technologies Used

* **React**: JavaScript library for building user interfaces.
* **Tailwind CSS**: Utility-first CSS framework for styling the components.
* **React Router**: For routing and navigation between pages (Home, Product Detail, Cart, Checkout, etc.).
* **Local Storage**: Used for saving the cart and order information persistently.
* **Context API**: Used for managing global states like cart items.


## Pages

* **Home Page**: Displays a search bar and lists all the products. The products can be filtered by category or search query.
* **Product Detail Page**: Displays detailed information about a selected product, including its images, price, description, and category.
* **Cart Page**: Shows the products added to the cart and allows users to proceed to checkout.
* **Checkout Page**: Displays a summary of the cart items, total price, and allows users to place an order.
* **Order History Page**: Shows the list of orders that the user has placed, with the ability to view details of each order.

## Mobile and Tablet Responsiveness

The layout of the website is fully responsive, ensuring a seamless experience across mobile, tablet, and desktop screens. Tailwind CSS’s grid and flex utilities are used to create a responsive and adaptive design.

* On mobile devices, products are displayed in a single-column layout.
* On tablet devices, products are displayed in a two-column layout.
* On larger screens (desktop), products are displayed in a four-column layout.

## Future Enhancements

* **User Authentication**: Add login/signup functionality for users to track their orders and manage their account.
* **Payment Integration**: Integrate a payment gateway (e.g., Stripe or PayPal) for real transactions.
* **Admin Panel**: Implement an admin panel for managing products, orders, and users.
* **Product Ratings**: Allow users to rate and review products.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


