import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "poppins",
      },
    },
  },
  colors: {
    primary: {
      400: "#6D6EB9", // light
      500: "#242582", // primary
      600: "#F64C72", //accent
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default theme;
