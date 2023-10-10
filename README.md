# ITCrowd Full Stack Challenge

React app developed as part of a Full Stack challenge from IT Crowd

## Stack

### Backend

- NodeJS with express
- Multer for image upload
- MySQL DB
- Bcrypt for hashing password
- Passport-JWT for authentication strategy
- Sequelize

### Frontend

- React (Vite)
- Tailwind CSS
- Axios for HTTP request
- React router for routing
- Framer Motion for animations

## Running instructions

### Backend

1. Clone repo

2. Navigate to server folder and run npm run dev

3. Backend is hosted on https://itcrowdapi.onrender.com but you can use localhost://3000 locally

4. DB was hosted on Clevercloud

5. Sequelize was used as ORM

### Frontend

1. Clone repo

2. Navigate to client and run npm run dev

3. Frontend is hosted on [https://itcrowdcommerce.vercel.app](https://itcrowdecommerce.vercel.app/)

4.React-router-dom was used as navigation and Axios as library for making http requests

# Basic Endpoints

## Products

### GET /products/allProducts

Find all products.

### GET /products/:id

Find product by ID.

### POST /addProduct

Need auth
Create a product.

```
  {
    "name": "string",
    "description": "string",
    "img_Url": "string",
     "price":"number",
  }
```

### PUT /products/:id

Need auth
Update a product by ID.

```
  {
    "name": "string",
    "description": "string",
    "image_url": "string",
    "price":"number",
  }
```

### POST /products/upload

Send through form/data with key file and Type file.

### DELETE /products/:id

Delete a product by ID.

### DELETE /products

Delete all products.

### GET /brands

Find all brands

### GET /brands/:id

Find brand by ID

### POST /brands

Create a brand

```
  {
    "name": "string",
    "logo_url": "string"
  }
```

### PATCH /brands/id

Update a brand by ID

```
  {
    "name": "string",
    "logo_url": "string"
  }
```

### DELETE /brands/id

Delete a brand by ID

### Contact info

-Don't hesitate to contact me on <a href="www.linkedin.com/in/federicorobledo13">Linkedin</a>
