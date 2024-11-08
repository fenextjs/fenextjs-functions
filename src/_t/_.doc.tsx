export default {
    id: "_tValidate",
    name: "_tValidate",
    description: "La función _tValidate permite validar un dato y, si es un string, aplicar una función opcional de transformación (_t) sobre él.",
    props: [
        {
            id: "d",
            type: "any",
            require: true,
            description: "Dato que será validado. Si es un string, se aplicará la función de transformación _t si está definida.",
        },
        {
            id: "_t",
            type: "_TFunciton",
            require: false,
            description: "Función opcional que transforma el dato si es un string.",
        }
    ],
    returns: [
        {
            id: "result",
            type: "any",
            description: "Retorna el dato original o el dato transformado si _t fue aplicada.",
        }
    ],
    useExample: [
        {
            text: "Validar y aplicar función de transformación",
            content: `_tValidate("texto", (d) => d.toUpperCase()); // Retorna 'TEXTO'`
        },
        {
            text: "Validar sin función de transformación",
            content: `_tValidate("texto"); // Retorna 'texto'`
        },
        {
            text: "Validar con dato no string",
            content: `_tValidate(123, (d) => d.toString()); // Retorna 123`
        },
        {
            text: "Tranductor",
            content: `_tValidate("Texto a traducir", functionTranslate); // Retorna "Text to translate"`
        }
    ]
};
