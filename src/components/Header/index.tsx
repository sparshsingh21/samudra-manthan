import * as React from "react";
import {
  Box,
  Flex,
  HStack,
  useDisclosure,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  Stack,
} from "@chakra-ui/react";
import { Link, navigate } from "gatsby";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useLocation } from "@reach/router";
import Logo from "../../images/smlogo.png";
import "./Header.css";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCallOutline } from "react-icons/io5";

interface Props {
  children: React.ReactNode;
  path: string;
  pathname: string;
  scrolling: boolean;
}

const Links = ["About", "Services", "Contact"];

const NavLink = (props: Props) => {
  const { children, path, pathname, scrolling } = props;
  return (
    <Link to={`/${path.toLocaleLowerCase()}`}>
      <Box
        className={
          pathname === "/" && !scrolling
            ? "hover-underline-animation landing-page-nav"
            : "hover-underline-animation"
        }
        fontSize="1rem"
        // m="0 1rem"
        rounded="md"
        color={"white"}
        _hover={{
          textDecoration: "none",
          color: pathname === "/" && !scrolling ? "#fff" : "#D65050",
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();

  const handleClick = () => {
    isOpen ? onClose() : onOpen();
  };

  const [scrolling, setScrolling] = React.useState(false);

  React.useEffect(() => {
    // Add a scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check the scroll position and update the state
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <>
      <Box
        display={"flex"}
        zIndex={3}
        h={14}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={20}
        pos={"fixed"}
        w={"100%"}
        color={"white"}
        top={0}
        py={4}
        bgColor={!scrolling ? "transparent" : "black"}
        transition={"background-color 0.5s ease"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          onClick={() => navigate("/")}
          cursor={"pointer"}
        >
          <Image src={Logo} width={14} />
          <Text fontSize={14} fontWeight={"bold"} ml={-6}>
            Samudra Manthan
          </Text>
        </Box>
        <Box display={"flex"} gap={10}>
          {Links.map((link) => {
            return (
              <NavLink
                key={link}
                path={link}
                pathname={pathname}
                scrolling={scrolling}
              >
                {link}
              </NavLink>
            );
          })}
        </Box>
        <Box display={"flex"} gap={5}>
          <FaWhatsapp />
          <SiGmail />
          <IoCallOutline />
        </Box>
      </Box>
    </>
  );
};
export default Header;
