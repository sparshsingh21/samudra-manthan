/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "@reach/router";
import "../../styles/global.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
