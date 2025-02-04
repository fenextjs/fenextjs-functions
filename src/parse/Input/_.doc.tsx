export default {
    id: "parseInputToQuery",
    name: "parseInputToQuery",
    description:
        "Convierte un objeto en URLSearchParams, teniendo un estandar al manejar el input proporcionado.",
    props: [
        {
            id: "input",
            type: "object",
            require: true,
            description: "El input a combertir en string.",
        },
    ],
    returns: [
        {
            id: "URLSearchParams",
            type: "string",
            description: "La cadena formateada para usar en la query.",
        },
    ],
    useExample: [
        {
            text: "Uso simle",
            content: `const query = parseInputToQuery({a:1,b:"no"});
console.log(query); // "?a=1&b=no"`,
        },
    ],
};
