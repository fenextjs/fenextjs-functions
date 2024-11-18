export default {
    id: "parseCity",
    name: "parseCity",
    description:
        "Conjunto de funciones para convertir entre un objeto `CityProps` y su representación en cadena JSON.",
    functions: [
        {
            id: "parseCity_to_String",
            name: "parseCity_to_String",
            description:
                "Función que convierte un objeto de tipo `CityProps` en una cadena JSON. Si el objeto es nulo o indefinido, retorna `undefined`.",
            props: [
                {
                    id: "data",
                    type: "CityProps | undefined | null",
                    require: true,
                    description:
                        "Objeto `CityProps` que se convertirá a cadena JSON.",
                },
            ],
            returns: [
                {
                    id: "jsonString",
                    type: "string | undefined",
                    description:
                        "Cadena JSON que representa el objeto `CityProps` o `undefined` si el objeto es nulo o indefinido.",
                },
            ],
            useExample: [
                {
                    text: "Convertir un objeto CityProps a cadena",
                    content: `const city = { id: 1, id_country: 10, id_state: 5, text: "New York" };
const jsonString = parseCity_to_String(city);
console.log(jsonString);`,
                },
            ],
        },
        {
            id: "parseString_to_City",
            name: "parseString_to_City",
            description:
                "Función que convierte una cadena JSON en un objeto de tipo `CityProps`. Si la conversión falla o el dato es nulo, retorna un objeto con valores predeterminados.",
            props: [
                {
                    id: "data",
                    type: "string | undefined | null",
                    require: true,
                    description:
                        "Cadena JSON que representa un objeto `CityProps`.",
                },
            ],
            returns: [
                {
                    id: "cityObject",
                    type: "CityProps | undefined",
                    description:
                        "Objeto `CityProps` resultante de la cadena JSON, o un objeto con valores predeterminados en caso de error o datos nulos.",
                },
            ],
            useExample: [
                {
                    text: "Convertir una cadena JSON a un objeto CityProps",
                    content: `const jsonString = '{"id": 1, "id_country": 10, "id_state": 5, "text": "New York"}';
const city = parseString_to_City(jsonString);
console.log(city);`,
                },
            ],
        },
    ],
};
