export const theme = {
    colors: {
        primary: {
            50: "#B4FFFF",
            100: "#8EF0FF",
            200: "#68CAFF",
            300: "#43A5FF",
            400: "#1D7FFF",
            500: "#0059F6",
            600: "#0033D0",
            700: "#000EAB",
            800: "#00005F",
            900: "#0A2043",

            opacity: {
                20: "0.20",
                40: "0.40",
                60: "0.60",
                80: "0.80",
                100: "1.00",
            }
        },
        secondary: {
            50: "#FFFFB4",
            100: "#FFFF8E",
            200: "#FFE268",
            300: "#FFBD43",
            400: "#FF971D",
            500: "#F67100",
            600: "#D04B00",
            700: "#AB2600",
            800: "#850000",
            900: "#5F0000",

            opacity: {
                20: "0.20",
                40: "0.40",
                60: "0.60",
                80: "0.80",
                100: "1.00",
            }
        },
        semantic: {
            info: {
                50: "#B4FFFF",
                100: "#8EE7FF",
                200: "#68C1FF",
                300: "#439CFF",
                400: "#1D76FF",
                500: "#0050ED",
                600: "#002AC7",
                700: "#0005A2",
                800: "#00007C",
                900: "#000056",

                opacity: {
                    20: "0.20",
                    40: "0.40",
                    60: "0.60",
                    80: "0.80",
                    100: "1.00",
                }
            },
            success: {
                50: "#C4FFB4",
                100: "#9EFF8E",
                200: "#78FF68",
                300: "#53FF43",
                400: "#2DFF1D",
                500: "#07ED00",
                600: "#00C700",
                700: "#00A200",
                800: "#007C00",
                900: "#005600",

                opacity: {
                    20: "0.20",
                    40: "0.40",
                    60: "0.60",
                    80: "0.80",
                    100: "1.00",
                }
            },
            warning: {
                50: "#FFFFB4",
                100: "#FFFF8E",
                200: "#FFFF68",
                300: "#FFFF43",
                400: "#FFFF1D",
                500: "#E9ED00",
                600: "#C3C700",
                700: "#9EA200",
                800: "#787C00",
                900: "#525600",

                opacity: {
                    20: "0.20",
                    40: "0.40",
                    60: "0.60",
                    80: "0.80",
                    100: "1.00",
                }
            },
            error: {
                50: "#FFB4B4",
                100: "#FF8E8E",
                200: "#FF6868",
                300: "#FF4343",
                400: "#FF1D1D",
                500: "#ED0000",
                600: "#C70000",
                700: "#A20000",
                800: "#7C0000",
                900: "#560000",

                opacity: {
                    20: "0.20",
                    40: "0.40",
                    60: "0.60",
                    80: "0.80",
                    100: "1.00",
                }
            },
        },
        text: {
            black: {
                50: "#C5CCDB",
                100: "#9FA6B5",
                200: "#79808F",
                300: "#545B6A",
                400: "#2E3544",
                500: "#080F1E",
                600: "#000000",
                700: "#000000",
                800: "#000000",
                900: "#000000",

                opacity: {
                    20: "0.20",
                    40: "0.40",
                    60: "0.60",
                    80: "0.80",
                    100: "1.00",
                }
            },
            white: {
                50: "#FFFFFF",
                100: "#FFFFFF",
                200: "#FFFFFF",
                300: "#FFFFFF",
                400: "#FFFFFF",
                500: "#F6F6F6",
                600: "#D0D0D0",
                700: "#ABABAB",
                800: "#858585",
                900: "#5F5F5F",
            }
        },
        background: {
            light: "#f9f9f9",
            dark: "#151515",
        },
        spacing: {
            xs: "0.5rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "2rem",
            xl: "3rem",
            xxl: "4rem",
        },
        typography: {
            titleLg: {
                fontSize: "3rem",
                fontWeight: "SemiBold",
                lineHeight: "120%",                
            },
            titleMd: {
                fontSize: "2.25rem",
                fontWeight: "SemiBold",
                lineHeight: "120%",                
            },
            titleSm: {
                fontSize: "1.5rem",
                fontWeight: "SemiBold",
                lineHeight: "130%",                
            },
            textLg: {
                fontSize: "1.125rem",
                fontWeight: "Regular",
                lineHeight: "140%",                
            },
            textMd: {
                fontSize: "1rem",
                fontWeight: "Regular",
                lineHeight: "140%",                
            },
            textSm: {
                fontSize: "0.875rem",
                fontWeight: "Regular",
                lineHeight: "140%",                
            },
            caption: {
                fontSize: "0.75rem",
                fontWeight: "Regular",
                lineHeight: "140%",                
            },
        },
    },
};

export type ThemeType = typeof theme;