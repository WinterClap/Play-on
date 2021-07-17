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
            black: string
            dimmedLight: string
            spotifyGreen: string
            spotifyGreenOnHover: string
        }
    }
}