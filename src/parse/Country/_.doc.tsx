export default {
    id: "parseCountry",
    name: "parseCountry",
    description:
        "Conjunto de funciones para convertir entre un objeto `CountryProps` y su representación en cadena JSON.",
    functions: [
        {
            id: "parseCountry_to_String",
            name: "parseCountry_to_String",
            description:
                "Función que convierte un objeto de tipo `CountryProps` en una cadena JSON. Si el objeto es nulo o indefinido, retorna `undefined`.",
            props: [
                {
                    id: "data",
                    type: "CountryProps | undefined | null",
                    require: true,
                    description:
                        "Objeto `CountryProps` que se convertirá a cadena JSON.",
                },
            ],
            returns: [
                {
                    id: "jsonString",
                    type: "string | undefined",
                    description:
                        "Cadena JSON que representa el objeto `CountryProps` o `undefined` si el objeto es nulo o indefinido.",
                },
            ],
            useExample: [
                {
                    text: "Convertir un objeto CountryProps a cadena",
                    content: `const country = { id: 1, code: "US", text: "United States" };
const jsonString = parseCountry_to_String(country);
console.log(jsonString);`,
                },
            ],
        },
        {
            id: "parseString_to_Country",
            name: "parseString_to_Country",
            description:
                "Función que convierte una cadena JSON en un objeto de tipo `CountryProps`. Si la conversión falla o el dato es nulo, retorna un objeto con valores predeterminados. También, si el objeto no tiene una imagen asignada, la obtiene usando la función `getRuteCountryImg`.",
            props: [
                {
                    id: "data",
                    type: "string | undefined | null",
                    require: true,
                    description:
                        "Cadena JSON que representa un objeto `CountryProps`.",
                },
            ],
            returns: [
                {
                    id: "countryObject",
                    type: "CountryProps | undefined",
                    description:
                        "Objeto `CountryProps` resultante de la cadena JSON, o un objeto con valores predeterminados en caso de error o datos nulos. Si el objeto no tiene una imagen asignada, se obtiene usando la función `getRuteCountryImg`.",
                },
            ],
            useExample: [
                {
                    text: "Convertir una cadena JSON a un objeto CountryProps y obtener la imagen del país",
                    content: `const jsonString = '{"id": 1, "code": "US", "text": "United States"}';
const country = parseString_to_Country(jsonString);
console.log(country);`,
                },
            ],
        },
    ],
};
