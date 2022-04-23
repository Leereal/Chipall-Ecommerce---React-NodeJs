#CHIPAMALL

#STEPS

INTRODUCTION

1. Install Tools
   -VSCode
   -React - npx create-react-app Chipamall
2. Push to github
3. Clean up your files and choose the default colors, font and logo

LIST PRODUCTS

1. Create products array
2. Add product images
3. Render Products
4. Style Products

ADD PAGE ROUTING

1. npm i react-router-dom
2. create route for home screen
3. create router for product screen

CREATE NODE.JS SERVER
1 run npm init in root folder 2. Update package.json set type: module 3. Add .js to imports 4. npm install express 5. create server.js 6. add start command as node backend/server.js 7. require express 8. create route for / return backend is ready. 9. move products.js from frontend to backend 10. create route for /api/products 11. return products 12. run npm start

FETCT PRODUCTS FROM BACKEND

1. set proxy in package.json
2. npm install axios
3. use state hook
4. use effect hook
5. use reducer hook

MANAGE STATE BY REDUCER HOOK

1. define reducer
2. update fetch data
3. get state from usReducer
4. Install use-reducer-logger with use-reducer-logger --force

ADD BOOTSTRAP UI FRAMEWORK

1. npm install react-bootstrap bootstrap
2. update App.js
3. npm install react-router-bootstrap
4. Import bootstrap in index.js

CREATE PRODUCT AND RATING COMPONENT

1. create Rating component
2. Create Product component
3. Use Rating component in Product component

CREATE PRODUCT DETAILS SCREEN

1. fetch product from backend
2. create 3 columns for image, info and action
3. Show the product name in the Title of the tab - Use npm install react-helmet-async

CREATE LOADING AND MESSAGE COMPONENT

1. create loading component
2. use spinner component
3. craete message component
4. create utils.js to define getError fuction

IMPLEMENT ADD TO CART

1. Create React Context - To save items in global storage
2. define reducer
3. create store provider
4. implement add to cart button click handler

COMPLETE ADD TO CART

1. check exist item in the cart
2. check count in stock in backend

CREATE CART SCREEN

1. create 2 columns
2. display items list
3. create action column

COMPLETE CART SCREEN

1. click handler for inc/dec item
2. click handler for remove item
3. click handler for checkout

CREATE SIGNIN SCREEN

1. create sign in form
2. add email and password
3. add signin button
