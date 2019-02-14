import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#eeeeee'
        },
        secondary: {
            main: '#f44336'
        },
    },
    typography: {
        useNextVariants: true
    },
    shadows: Array(25).fill('none')
});

export default theme;