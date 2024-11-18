export default {
    id: "parseNumber",
    name: "parseNumber",
    description: "Parses una cadena o número a un número formateado.",
    props: [
        {
            id: "n",
            type: "number | string",
            require: true,
            description:
                "El número o cadena que se debe analizar y convertir en número.",
        },
    ],
    returns: [
        {
            id: "parsedNumber",
            type: "number",
            description:
                "El número resultante después de analizar la cadena o número de entrada. Si no es posible convertirlo, se devuelve 0.",
        },
    ],
    useExample: [
        {
            text: "Convertir un número",
            content: `const result = parseNumber(1234.56);
console.log(result); // 1234.56`,
        },
        {
            text: "Convertir una cadena",
            content: `const result = parseNumber("$1,234.56");
console.log(result); // 1234.56`,
        },
        {
            text: "Manejo de entrada inválida",
            content: `const result = parseNumber("abc");
console.log(result); // 0`,
        },
    ],
};
