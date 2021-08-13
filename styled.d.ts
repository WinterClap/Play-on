import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            main: string
            secondary: string
            terciary: string
            alternative: string
            backgroundDark: string
            text: string
            dimmedText: string
            dimmedTextDark: string
            black: string
            blackDark: string
            dimmedLight: string
            spotifyGreen: string
            spotifyGreenOnHover: string
        }
    }
}