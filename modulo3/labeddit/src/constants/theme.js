import { createTheme } from '@mui/material/styles';
import {
    primaryColor,
    secondaryColor,
    errorColor,
    succesColor,
    textColor,
} from './colors';



export const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        error: {
            main: errorColor,
        },
        success: {
            main: succesColor,
        },
        text: {
            primary: textColor,
        },
    },
});  