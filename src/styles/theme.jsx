import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            "html, body": {
                fontSize: "20px",
                fontFamily: "Poppins",
            },
        },
    },
});

export { theme };