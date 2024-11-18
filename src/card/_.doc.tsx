export default {
    id: "GetCardType",
    name: "GetCardType",
    description:
        "La función GetCardType permite identificar el tipo de tarjeta (VISA, Mastercard, AMEX, etc.) a partir de un número dado.",
    props: [
        {
            id: "n",
            type: "number | string",
            require: true,
            description:
                "Número de la tarjeta que se analizará para determinar su tipo. Puede ser un valor numérico o un string.",
        },
    ],
    extras: [
        {
            id: "Card_Enum",
            title: "Card_Enum",
            description:
                "Enumeración que define los tipos de tarjetas disponibles.",
            tableItems: [
                {
                    Nombre: "VISA",
                    Descripcion: "Tipo de tarjeta VISA.",
                    Default: null,
                },
                {
                    Nombre: "MASTERCARD",
                    Descripcion: "Tipo de tarjeta Mastercard.",
                    Default: null,
                },
                {
                    Nombre: "AMEX",
                    Descripcion: "Tipo de tarjeta American Express.",
                    Default: null,
                },
                {
                    Nombre: "DISCOVER",
                    Descripcion: "Tipo de tarjeta Discover.",
                    Default: null,
                },
                {
                    Nombre: "DINERS",
                    Descripcion: "Tipo de tarjeta Diners Club.",
                    Default: null,
                },
                {
                    Nombre: "DINERS_CARTE_BLANCHE",
                    Descripcion: "Tipo de tarjeta Diners Club Carte Blanche.",
                    Default: null,
                },
                {
                    Nombre: "JCB",
                    Descripcion: "Tipo de tarjeta JCB.",
                    Default: null,
                },
                {
                    Nombre: "VISA_ELECTRON",
                    Descripcion: "Tipo de tarjeta Visa Electron.",
                    Default: null,
                },
                {
                    Nombre: "OTHER",
                    Descripcion: "Tipo de tarjeta desconocido o no reconocido.",
                    Default: null,
                },
            ],
        },
    ],
    returns: [
        {
            id: "Card_Enum",
            type: "Card_Enum",
            description:
                "El tipo de tarjeta identificado, representado por el enumerado Card_Enum.",
        },
    ],
    useExample: [
        {
            text: "Detectar tipo de tarjeta VISA",
            content: `GetCardType("4111111111111111") // Retorna Card_Enum.VISA`,
        },
        {
            text: "Detectar tipo de tarjeta Mastercard",
            content: `GetCardType("5500000000000004") // Retorna Card_Enum.MASTERCARD`,
        },
        {
            text: "Detectar tipo de tarjeta desconocida",
            content: `GetCardType("1234567890") // Retorna Card_Enum.OTHER`,
        },
    ],
};
