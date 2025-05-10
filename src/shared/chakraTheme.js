import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        brand: {
            500: '#E3092F',
            600: '#294777',
        },
    },
    fonts: {
        heading: 'Poppins, sans-serif',
        body: 'Inter, sans-serif',
    },
})

export default theme
