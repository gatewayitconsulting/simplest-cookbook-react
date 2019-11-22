/*!

=========================================================
* Material Kit PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Theme Coded by Creative Tim
* After initial commit, coding done by John Montanye

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages for this product
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import HomePage from "views/HomePage/HomePage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import RecipesPage from "views/RecipesPage/RecipesPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/recipes" component={RecipesPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
