import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layouts/index";
import { Poppins } from "next/font/google";
import theme from "@/libs/theme";
import { AnimatePresence } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <div className={poppins.className}>
        <Layout router={router}>
          <AnimatePresence initial={true} mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </div>
    </ChakraProvider>
  );
}
