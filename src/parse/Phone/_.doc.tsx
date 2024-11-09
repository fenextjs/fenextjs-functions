export default {
    id: "parsePhone",
    name: "parsePhone",
    description: "Conjunto de funciones para convertir entre un objeto `PhoneProps` parcial y su representación en cadena JSON.",
    functions: [
        {
            id: "parsePhone_to_String",
            name: "parsePhone_to_String",
            description: "Función que convierte un objeto parcial de tipo `PhoneProps` en una cadena JSON.",
            props: [
                {
                    id: "data",
                    type: "Partial<PhoneProps> | undefined | null",
                    require: true,
                    description: "Objeto `PhoneProps` parcial que se convertirá a cadena JSON.",
                }
            ],
            returns: [
                {
                    id: "jsonString",
                    type: "string",
                    description: "Cadena JSON que representa el objeto `PhoneProps`, o la representación en cadena en caso de error.",
                }
            ],
            useExample: [
                {
                    text: "Convertir un objeto PhoneProps parcial a cadena JSON",
                    content: `const phone = { code: "+1", number: "1234567890" };
const jsonString = parsePhone_to_String(phone);
console.log(jsonString);`
                }
            ]
        },
        {
            id: "parseString_to_Phone",
            name: "parseString_to_Phone",
            description: "Función que convierte una cadena JSON en un objeto parcial de tipo `PhoneProps`. Si la conversión falla, retorna un objeto con `number`, `code` y `tel` parseados de la cadena.",
            props: [
                {
                    id: "data",
                    type: "string | undefined | null",
                    require: true,
                    description: "Cadena JSON que representa un objeto `PhoneProps` parcial.",
                }
            ],
            returns: [
                {
                    id: "phoneObject",
                    type: "Partial<PhoneProps>",
                    description: "Objeto parcial `PhoneProps` resultante de la cadena JSON, o un objeto con `number`, `code` y `tel` extraídos en caso de error.",
                }
            ],
            useExample: [
                {
                    text: "Convertir una cadena JSON a un objeto PhoneProps parcial",
                    content: `const jsonString = '{"code": "+1", "number": "1234567890"}';
const phone = parseString_to_Phone(jsonString);
console.log(phone);`
                }
            ]
        }
    ]
};
