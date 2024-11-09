export default {
    id: "parseNumberCount",
    name: "parseNumberCount",
    description: "Parses una cadena o número a una cadena formateada con comas separando los miles y puntos decimales opcionales.",
    props: [
        {
            id: "n",
            type: "number | string",
            require: true,
            description: "El número o cadena que se debe analizar y formatear.",
        },
        {
            id: "options",
            type: "Intl.NumberFormatOptions",
            require: false,
            description: "Opciones para personalizar el formato del número, como decimales, estilo, etc.",
        }
    ],
    returns: [
        {
            id: "formattedNumber",
            type: "string",
            description: "La representación en cadena del número formateado, con comas separando miles y decimales si se especifica.",
        }
    ],
    useExample: [
        {
            text: "Formatear un número con comas",
            content: `const result = parseNumberCount(1234567.89);
console.log(result); // "1,234,567.89"`
        },
        {
            text: "Formatear una cadena con comas",
            content: `const result = parseNumberCount("1000000");
console.log(result); // "1,000,000"`
        },
        {
            text: "Usar con opciones para formato personalizado",
            content: `const result = parseNumberCount(1234567.89, { style: 'currency', currency: 'USD' });
console.log(result); // "$1,234,567.89"`
        }
    ]
};
