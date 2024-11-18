export default {
    id: "parseEnum",
    name: "parseEnum",
    description:
        "Conjunto de funciones y tipos para manejar la conversión de enums a valores específicos o cadenas.",
    types: [
        {
            id: "parseEnum_to_V_SW",
            name: "parseEnum_to_V_SW",
            description:
                "Tipo genérico que representa un objeto de mapeo entre claves de un enum (`T`) y valores (`V`).",
            props: [
                {
                    id: "T",
                    type: "string",
                    require: true,
                    description: "Tipo de las claves del enum.",
                },
                {
                    id: "V",
                    type: "string (por defecto)",
                    require: false,
                    description: "Tipo de los valores del mapeo.",
                },
            ],
        },
        {
            id: "parseEnum_to_V_Options",
            name: "parseEnum_to_V_Options",
            description:
                "Opciones adicionales para la función `parseEnum_to_V`.",
            props: [
                {
                    id: "valueNull",
                    type: "V",
                    require: false,
                    description:
                        "Valor que se retornará si el tipo no está definido o es nulo.",
                },
            ],
        },
        {
            id: "parseEnum_to_String_SW",
            name: "parseEnum_to_String_SW",
            description:
                "Tipo que representa un mapeo entre claves de un enum (`T`) y valores de tipo `string`.",
            props: [
                {
                    id: "T",
                    type: "string",
                    require: true,
                    description: "Tipo de las claves del enum.",
                },
            ],
        },
    ],
    functions: [
        {
            id: "parseEnum_to_V",
            name: "parseEnum_to_V",
            description:
                "Función que convierte un valor de enum a un valor específico (`V`) usando un mapeo proporcionado.",
            props: [
                {
                    id: "sw",
                    type: "parseEnum_to_V_SW<T, V>",
                    require: true,
                    description:
                        "Objeto de mapeo entre claves del enum y sus valores.",
                },
                {
                    id: "options",
                    type: "parseEnum_to_V_Options<V>",
                    require: false,
                    description:
                        "Opciones adicionales, incluyendo el valor que se retorna cuando el valor es nulo o indefinido.",
                },
            ],
            returns: [
                {
                    id: "mappedValue",
                    type: "V | string",
                    description:
                        "Valor correspondiente al tipo en el mapeo o el valor por defecto si es nulo/indefinido.",
                },
            ],
            useExample: [
                {
                    text: "Convertir un enum a un valor específico usando parseEnum_to_V",
                    content: `const statusMap = { ACTIVE: "Activo", INACTIVE: "Inactivo" };
const parseStatus = parseEnum_to_V(statusMap, { valueNull: "Desconocido" });
const status = parseStatus("ACTIVE"); // Retorna "Activo"`,
                },
            ],
        },
        {
            id: "parseEnum_to_String",
            name: "parseEnum_to_String",
            description:
                "Función que convierte un valor de enum a una cadena usando un mapeo proporcionado.",
            props: [
                {
                    id: "sw",
                    type: "parseEnum_to_String_SW<T>",
                    require: true,
                    description:
                        "Objeto de mapeo entre claves del enum y sus representaciones en cadena.",
                },
                {
                    id: "options",
                    type: "parseEnum_to_String_Options",
                    require: false,
                    description:
                        "Opciones adicionales para definir un valor de retorno en caso de que sea nulo o indefinido.",
                },
            ],
            returns: [
                {
                    id: "mappedString",
                    type: "string",
                    description:
                        "Cadena correspondiente al tipo en el mapeo o el valor por defecto si es nulo/indefinido.",
                },
            ],
            useExample: [
                {
                    text: "Convertir un enum a una cadena usando parseEnum_to_String",
                    content: `const roleMap = { ADMIN: "Administrador", USER: "Usuario" };
const parseRole = parseEnum_to_String(roleMap, { valueNull: "Desconocido" });
const role = parseRole("ADMIN"); // Retorna "Administrador"`,
                },
            ],
        },
    ],
};
