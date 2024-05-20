import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import homePageService from "./services/homePageService";
import cartPageService from "./services/cartService";
import cartReducer from "./reducers/cartReducer";
import filtersService from "./services/filterService";
import collectionService from "./services/collectionService";
// import authService  from "./services/authService";
// import authReducer from "./reducers/authReducer";
// import productService from "./services/productService";


const Store = configureStore({
    reducer: {
        [homePageService.reducerPath]: homePageService.reducer,
        [cartPageService.reducerPath]: cartPageService.reducer,
        [filtersService.reducerPath]: filtersService.reducer,
        [collectionService.reducerPath]: collectionService.reducer,

        "cartReducer": cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homePageService.middleware, cartPageService.middleware, filtersService.middleware, collectionService.middleware),
},
console.log("Store wala console"));
setupListeners(Store.dispatch);
export default Store;