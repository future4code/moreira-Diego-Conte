import { createTheme } from '@mui/material/styles';
import {
    primaryColor,
    secondaryColor,
    errorColor,
    succesColor,
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
    },
});  