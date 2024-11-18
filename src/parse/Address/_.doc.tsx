export default {
    id: "parseAddress",
    name: "parseAddress",
    description:
        "Conjunto de funciones para convertir entre un objeto `AddressGoogle` y su representación en cadena JSON.",
    functions: [
        {
            id: "parseAddress_to_String",
            name: "parseAddress_to_String",
            description:
                "Función que convierte un objeto de tipo `AddressGoogle` en una cadena JSON.",
            props: [
                {
                    id: "data",
                    type: "AddressGoogle | undefined | null",
                    require: true,
                    description:
                        "Objeto `AddressGoogle` que se convertirá a cadena JSON.",
                },
            ],
            returns: [
                {
                    id: "jsonString",
                    type: "string",
                    description:
                        "Cadena JSON que representa el objeto `AddressGoogle` o una cadena vacía en caso de error.",
                },
            ],
            useExample: [
                {
                    text: "Convertir un objeto AddressGoogle a cadena",
                    content: `const address = { formatted_address: "123 Main St" };
const jsonString = parseAddress_to_String(address);
console.log(jsonString);`,
                },
            ],
        },
        {
            id: "parseString_to_Address",
            name: "parseString_to_Address",
            description:
                "Función que convierte una cadena JSON en un objeto de tipo `AddressGoogle`. Si la conversión falla, retorna un objeto con la cadena como `formatted_address`.",
            props: [
                {
                    id: "data",
                    type: "string | undefined | null",
                    require: true,
                    description:
                        "Cadena JSON que representa un objeto `AddressGoogle`.",
                },
            ],
            returns: [
                {
                    id: "addressObject",
                    type: "AddressGoogle",
                    description:
                        "Objeto `AddressGoogle` resultante de la cadena JSON, o un objeto con `formatted_address` en caso de error.",
                },
            ],
            useExample: [
                {
                    text: "Convertir una cadena JSON a un objeto AddressGoogle",
                    content: `const jsonString = '{"formatted_address": "123 Main St"}';
const address = parseString_to_Address(jsonString);
console.log(address);`,
                },
            ],
        },
    ],
};
