export default {
    id: "parseMoney",
    name: "parseMoney",
    description: "Convierte un número o una cadena a un formato de dinero (por ejemplo, '$1,000.00').",
    props: [
        {
            id: "n",
            type: "number | string",
            require: true,
            description: "El número o cadena que se debe formatear como dinero.",
        },
        {
            id: "options",
            type: "Intl.NumberFormatOptions",
            require: false,
            description: "Opciones para personalizar el formato de número. Se pasa al método Intl.NumberFormat.",
        }
    ],
    returns: [
        {
            id: "formattedMoney",
            type: "string",
            description: "La cadena formateada en formato de dinero, incluyendo el símbolo '$'.",
        }
    ],
    useExample: [
        {
            text: "Formatear un número",
            content: `const money = parseMoney(1000.5);
console.log(money); // "$1,000.50"`
        },
        {
            text: "Formatear una cadena",
            content: `const money = parseMoney("1500");
console.log(money); // "$1,500.00"`
        },
        {
            text: "Usar con opciones",
            content: `const money = parseMoney(2500.75, { style: 'currency', currency: 'USD' });
console.log(money); // "$2,500.75"`
        }
    ]
};
