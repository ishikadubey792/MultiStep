import { createTheme } from "@mui/material";

export const theme = createTheme({
    status: {
        danger: "orange",
        warning: "yellow",
        success: "green",
    },
    palette:{
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#2C2C2C",
        },
        background: {
            default: "#E3E9EE",
            primary: "#ffffff"
        },
        text: {
            primary: "#000",
            secondary: "#2C2C2C"
        },
        action: {
            
        },
    }
});