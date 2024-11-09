export default {
    id: "parseState",
    name: "parseState",
    description: "Conjunto de funciones para convertir entre un objeto `StateProps` y su representación en cadena JSON.",
    functions: [
        {
            id: "parseState_to_String",
            name: "parseState_to_String",
            description: "Función que convierte un objeto de tipo `StateProps` en una cadena JSON.",
            props: [
                {
                    id: "data",
                    type: "StateProps | undefined | null",
                    require: true,
                    description: "Objeto `StateProps` que se convertirá a cadena JSON.",
                }
            ],
            returns: [
                {
                    id: "jsonString",
                    type: "string | undefined",
                    description: "Cadena JSON que representa el objeto `StateProps`, o `undefined` si la entrada es inválida.",
                }
            ],
            useExample: [
                {
                    text: "Convertir un objeto StateProps a cadena JSON",
                    content: `const state = { id: 1, id_country: 10, text: "California" };
const jsonString = parseState_to_String(state);
console.log(jsonString);`
                }
            ]
        },
        {
            id: "parseString_to_State",
            name: "parseString_to_State",
            description: "Función que convierte una cadena JSON en un objeto de tipo `StateProps`. Si la conversión falla, retorna un objeto con la cadena como texto.",
            props: [
                {
                    id: "data",
                    type: "string | undefined | null",
                    require: true,
                    description: "Cadena JSON que representa un objeto `StateProps`.",
                }
            ],
            returns: [
                {
                    id: "stateObject",
                    type: "StateProps | undefined",
                    description: "Objeto `StateProps` resultante de la cadena JSON, o un objeto con `text` en caso de error.",
                }
            ],
            useExample: [
                {
                    text: "Convertir una cadena JSON a un objeto StateProps",
                    content: `const jsonString = '{"id": 1, "id_country": 10, "text": "California"}';
const state = parseString_to_State(jsonString);
console.log(state);`
                }
            ]
        }
    ]
};
