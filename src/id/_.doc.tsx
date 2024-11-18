export default {
    id: "generateRandomID",
    name: "generateRandomID",
    description:
        "Función que genera un identificador único combinando la marca de tiempo actual y un número aleatorio.",
    props: [],
    returns: [
        {
            id: "randomID",
            type: "string",
            description:
                "Una cadena única generada combinando el tiempo actual y un valor aleatorio.",
        },
    ],
    useExample: [
        {
            text: "Generar un ID único",
            content: `const uniqueID = generateRandomID();
console.log(uniqueID);`,
        },
    ],
};
