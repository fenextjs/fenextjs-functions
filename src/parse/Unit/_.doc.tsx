export default {
    id: "parseUnitToText",
    name: "parseUnitToText",
    description: "Convierte una unidad de medida a su representación en texto.",
    props: [
        {
            id: "unit",
            type: "Unit_All",
            require: true,
            description: "La unidad que se debe convertir a su forma en texto. Puede ser una de las unidades definidas en Unit_Distance, Unit_Volumen o Unit_Weight.",
        }
    ],
    extras:[
        {
            id: "Unit_All",
            title: "Unit_All",
            description: "Tipo que agrupa todas las unidades de distancia, volumen y peso disponibles.",
            tableItems: [
                {
                    Nombre: "Unit_Distance",
                    Descripcion: "Unidades relacionadas con distancias (por ejemplo, metros, centímetros).",
                    Default: "CM",
                },
                {
                    Nombre: "Unit_Volumen",
                    Descripcion: "Unidades relacionadas con el volumen (por ejemplo, litros, galones).",
                    Default: "L",
                },
                {
                    Nombre: "Unit_Weight",
                    Descripcion: "Unidades relacionadas con el peso (por ejemplo, kilogramos, gramos).",
                    Default: "KG",
                }
            ]
        }
    ],
    returns: [
        {
            id: "unitText",
            type: "string",
            description: "La representación en texto de la unidad proporcionada.",
        }
    ],
    useExample: [
        {
            text: "Convertir unidad de distancia",
            content: `const result = parseUnitToText("CM");
console.log(result); // "cm"`
        },
        {
            text: "Convertir unidad de volumen",
            content: `const result = parseUnitToText("FT3");
console.log(result); // "pie³"`
        },
        {
            text: "Convertir unidad de peso",
            content: `const result = parseUnitToText("KG");
console.log(result); // "kg"`
        }
    ]
};
