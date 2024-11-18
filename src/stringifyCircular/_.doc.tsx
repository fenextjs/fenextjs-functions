export default {
    id: "stringifyCircular",
    name: "stringifyCircular",
    description:
        "Función que convierte un objeto en una cadena JSON, manejando referencias circulares para evitar errores en `JSON.stringify`.",
    props: [
        {
            id: "obj",
            type: "object",
            require: true,
            description:
                "Objeto que se convertirá a cadena JSON, con detección de referencias circulares.",
        },
    ],
    returns: [
        {
            id: "jsonString",
            type: "string",
            description:
                "Cadena JSON resultante del objeto, omitiendo referencias circulares.",
        },
    ],
    useExample: [
        {
            text: "Convertir objeto con referencias circulares a JSON",
            content: `const obj = {};
obj.self = obj;
const jsonString = stringifyCircular(obj);
console.log(jsonString);`,
        },
    ],
};
