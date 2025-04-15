# 🛍️ ShoppyGlobe - E-commerce Application

A dynamic and clean E-commerce Application built with React and Redux. The app allows users to browse products, view product details, add items to cart, search/filter items, and navigate through different routes — all with smooth performance and responsive design.

---

## 🔗 Links

- **GitHub Repository:** https://github.com/yashagrawaltech/shoppy-globe
- **Live Demo:** https://shoppy-globe-assignment.netlify.app/

---

## 🎯 Objective

To build a fully functional e-commerce platform named **ShoppyGlobe** that includes product listing, detail view, shopping cart functionalities, and routing — all styled and optimized for performance.

---

## 🚀 Features

- 📦 Product listing with data fetched from API
- 🔍 Search and filter functionality
- 🛒 Add and remove items from cart
- 🧾 Detailed product pages
- 📄 404 Not Found page
- 🔄 Dynamic routing with React Router
- 🎯 Redux state management
- ⚙️ Performance optimization with lazy loading
- 📱 Fully responsive UI

---

## 🧩 Component Structure

| Component       | Description                                              |
| --------------- | -------------------------------------------------------- |
| `App`           | Root component managing routes and global structure      |
| `Header`        | Displays navigation menu and shopping cart icon          |
| `ProductList`   | Fetches and displays a list of products                  |
| `ProductItem`   | Represents a single product with an "Add to Cart" button |
| `ProductDetail` | Shows detailed view of a product (uses route parameter)  |
| `Cart`          | Lists cart items with options to modify or remove        |
| `CartItem`      | Represents a single item in the cart                     |
| `NotFound`      | 404 error page for unmatched routes                      |

---

## 📦 Data Fetching

- **API Source**: [`https://dummyjson.com/products`](https://dummyjson.com/products)
- Used `useEffect` to fetch data when components mount
- Created a custom hook for fetching product list
- Implemented error handling for failed requests

---

## 🔄 State Management (Redux)

- Configured Redux for managing cart state and product list
- Created actions, reducers, and selectors
- Managed product addition/removal in cart
- Implemented product search filter functionality

---

## ⚙️ Event Handling

- "Add to Cart" button in `ProductItem`
- "Remove from Cart" button in `CartItem`
- Redux used to handle product manipulation

---

## 🔀 Routing

- Implemented using **React Router**
- Routes:
    - `/` - Home/Product List
    - `/product/:id` - Product Detail
    - `/cart` - Cart
    - `/checkout` - Checkout (optional extension)
    - `*` - 404 Not Found

---

## 📃 List Rendering

- Product lists and cart items rendered using `.map()`
- Unique keys used for list items to ensure optimal rendering

---

## ⚡ Performance Optimization

- Implemented lazy loading using `React.lazy` and `Suspense`
- Code splitting for major components

---

## 🎨 Styling

- Clean and responsive UI using CSS
- Mobile-first approach
- Works well across devices and screen sizes

---

## 📋 Assignment Requirements Breakdown

### 1. Component Structure (20 marks)

- App, Header, ProductList, ProductItem
- ProductDetail, Cart, CartItem, NotFound
- Components are functional and reusable

---

### 2. Props (10 marks)

- Proper use of props to pass data
- Prop types used for validation

---

### 3. Data Fetching with useEffect (40 marks)

- Fetch product list from `https://dummyjson.com/products`
- Custom hook used for fetching product data
- ProductDetail fetches data based on route param
- Error handling implemented

---

### 4. State Management (70 marks)

- Redux used to manage cart state
- Created actions, reducers, selectors
- Implemented search to filter products

---

### 5. Event Handling (20 marks)

- "Add to Cart" button in each ProductItem
- "Remove" button in each CartItem
- Handled through Redux properly

---

### 6. React Routing (20 marks)

- React Router used for navigation
- Routes: Home, Product Detail, Cart, Checkout
- Dynamic route for product details

---

### 7. React Lists (10 marks)

- Products rendered with unique keys
- Cart items rendered with unique keys

---

### 8. Performance Optimization (20 marks)

- Code splitting using `React.lazy` and `Suspense`

---

### 9. Styling (20 marks)

- CSS applied for styling
- Fully responsive design

---

### 📤 Submission (20 marks)

- Application runs without errors
- Code is properly indented and commented
- GitHub repo submitted

---

## 📁 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/yashagrawaltech/shoppy-globe.git
cd shoppy-globe
```

2. **Install dependencies**

```bash
# Use any of the following based on your package manager
bun install
# or
npm install
# or
yarn install
```

3. **Run the development server**

```bash
bun dev
# or
npm run dev
# or
yarn dev
```

4. **Open in browser**

Visit the local development URL (usually `http://localhost:5173`) shown in the terminal.

---

## 👨‍💻 Tech Stack

- React
- Redux Toolkit
- React Router DOM
- JavaScript (ES6+)
- CSS
