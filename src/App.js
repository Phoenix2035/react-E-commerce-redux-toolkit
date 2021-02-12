import React from "react";

// React Router Dom
import {BrowserRouter, Switch, Route} from "react-router-dom";

// Pages
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Error from "./pages/Error";


// Components
import Header from "./components/Header";


function App() {
    return (
        <BrowserRouter>
            <Header/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/about">
                    <About/>
                </Route>

                <Route path="/cart">
                    <Cart/>
                </Route>

                <Route path="/checkout">
                    <Checkout/>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>

                <Route exact path="/products">
                    <Products/>
                </Route>

                <Route path="/products/:productId" children={<ProductDetails/>}/>

                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}


export default App