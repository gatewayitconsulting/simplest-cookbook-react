/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
// sections for this page
import Recipes from "views/RecipesPage/Sections/Recipes.js";

import Search from "@material-ui/icons/Search";
import Copyright from "@material-ui/icons/Copyright";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Simplest Cookbook"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "rose"
        }}
      />
      <Parallax
        image={require("assets/img/shutterstockPeopleShareFood.jpg")}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.brand}>
                <h1 style={{fontWeight: 500}}>
                  Start cooking sooner
                </h1>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Card plain>
                <CardBody>
                  <form>
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={6}
                        md={6}
                        lg={8}
                      >
                        <CustomInput
                          id="searchRecipes"
                          formControlProps={{
                            fullWidth: true
                          }}
                          white
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Search style={{color: "white"}} />
                              </InputAdornment>
                            ),
                            placeholder: "Search Recipes"
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={4}>
                        <Button
                          color="rose"
                          round
                          block
                          className={classes.submitButton}
                        >
                          Search
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Recipes />
      </div>
      <Footer
        theme="white"
        content={
          <div>
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                <Copyright style={{paddingTop: ".5rem"}} />Copyright {(new Date().getFullYear())} by <a href="https://www.gatewayitconsulting.com" target="_blank">Gateway IT Consulting</a>
                </ListItem>
              </List>
            </div>
          </div>
        }
      />
    </div>
  );
}
