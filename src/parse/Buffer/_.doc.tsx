export default {
    id: "parseBufferToBase64",
    name: "parseBufferToBase64",
    description: "Función que convierte un `ArrayBuffer` en una cadena Base64.",
    props: [
        {
            id: "buffer",
            type: "ArrayBuffer",
            require: true,
            description: "El buffer de datos que se convertirá a una cadena Base64.",
        }
    ],
    returns: [
        {
            id: "base64String",
            type: "string",
            description: "Cadena Base64 que representa los datos del `ArrayBuffer`.",
        }
    ],
    useExample: [
        {
            text: "Convertir un ArrayBuffer a Base64",
            content: `const buffer = new ArrayBuffer(8);
const base64String = parseBufferToBase64(buffer);
console.log(base64String);`
        }
    ]
};
