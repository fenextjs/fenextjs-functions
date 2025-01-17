export default {
    id: "cleanTextForTranslate",
    name: "cleanTextForTranslate",
    description:
        "La función cleanTextForTranslate permite limpiar un string para poder traducirlo.",
    props: [
        {
            id: "text",
            type: "string",
            require: true,
            description: "Texto a tranducir.",
        },
    ],
    returns: [
        {
            id: "text",
            type: "string",
            description: "Texto Limpio para traducir.",
        },
    ],
    useExample: [
        {
            text: "Limpiar espacios",
            content: `cleanTextForTranslate("Text          Text2") // Retorna "Text Text2"`,
        },
        {
            text: "Limpiar espacios iniciales o finales",
            content: `GetCardType(" Text ") // Retorna "Text"`,
        },
        {
            text: "Limpiar saltos de linea",
            content: `cleanTextForTranslate("Text \\n Text2") // Retorna "Text Text2"`,
        },
    ],
};
