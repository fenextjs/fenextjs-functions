export default {
    id: "parseCSC",
    name: "parseCSC",
    description: "Conjunto de funciones para convertir entre un objeto `CSCProps` (Country, State, City) y su representación en cadena (`CSCStringProps`).",
    functions: [
        {
            id: "parseCSC_to_CSCString",
            name: "parseCSC_to_CSCString",
            description: "Función que convierte un objeto de tipo `CSCProps` en una representación de cadena (`CSCStringProps`).",
            props: [
                {
                    id: "data",
                    type: "CSCProps | undefined | null",
                    require: true,
                    description: "Objeto `CSCProps` que contiene los datos de país, estado y ciudad para convertir a cadena.",
                }
            ],
            returns: [
                {
                    id: "cscStringObject",
                    type: "CSCStringProps | undefined",
                    description: "Objeto `CSCStringProps` con los datos convertidos a cadenas, o `undefined` en caso de entrada inválida.",
                }
            ],
            useExample: [
                {
                    text: "Convertir un objeto CSCProps a representación en cadena",
                    content: `const cscData = { country: {...}, state: {...}, city: {...} };
const cscString = parseCSC_to_CSCString(cscData);
console.log(cscString);`
                }
            ]
        },
        {
            id: "parseCSCString_to_CSC",
            name: "parseCSCString_to_CSC",
            description: "Función que convierte una representación en cadena (`CSCStringProps`) en un objeto `CSCProps`.",
            props: [
                {
                    id: "data",
                    type: "CSCStringProps | undefined | null",
                    require: true,
                    description: "Representación en cadena de un objeto CSC (`CSCStringProps`) que contiene los datos de país, estado y ciudad.",
                }
            ],
            returns: [
                {
                    id: "cscObject",
                    type: "CSCProps | undefined",
                    description: "Objeto `CSCProps` con los datos convertidos de cadena a objetos, o `undefined` en caso de entrada inválida.",
                }
            ],
            useExample: [
                {
                    text: "Convertir una representación en cadena a objeto CSCProps",
                    content: `const cscStringData = { country: "countryString", state: "stateString", city: "cityString" };
const cscObject = parseCSCString_to_CSC(cscStringData);
console.log(cscObject);`
                }
            ]
        }
    ]
};
