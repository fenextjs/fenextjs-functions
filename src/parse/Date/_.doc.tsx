export default {
    id: "parseDateTimeFunctions",
    name: "parseDateTimeFunctions",
    description: "Funciones utilitarias para trabajar con fechas y horas, como convertir fechas en cadenas de texto y parsear texto a fechas. Soporta formatos como 'YYYY-MM-DD', 'date', 'month', 'week', y 'time'.",
    functions: [
        {
            id: "parseDateYYYYMMDD",
            name: "parseDateYYYYMMDD",
            description: "Convierte un objeto Date en una cadena con formato 'YYYY-MM-DD'.",
            props: [
                {
                    id: "date",
                    type: "Date",
                    require: true,
                    description: "El objeto Date a convertir.",
                }
            ],
            returns: [
                {
                    id: "result",
                    type: "string",
                    description: "Cadena de texto en formato 'YYYY-MM-DD'.",
                }
            ],
            useExample: [
                {
                    text: "Convertir una fecha a formato 'YYYY-MM-DD'.",
                    content: `const date = new Date(2024, 10, 8);
const formattedDate = parseDateYYYYMMDD(date); // "2024-11-08"`
                }
            ]
        },
        {
            id: "parseTextToDate",
            name: "parseTextToDate",
            description: "Convierte un texto en una fecha según el tipo especificado ('date', 'month', 'week', 'time').",
            props: [
                {
                    id: "props",
                    type: "parseTextToDateProps",
                    require: true,
                    description: "Objeto con el texto a convertir y el tipo de fecha.",
                }
            ],
            returns: [
                {
                    id: "result",
                    type: "Date",
                    description: "Fecha resultante después de la conversión.",
                }
            ],
            useExample: [
                {
                    text: "Convertir un texto en una fecha (por ejemplo, para un formato 'YYYY-MM-DD').",
                    content: `const date = parseTextToDate({ text: "2024-11-08", type: "date" }); // Date object for November 8, 2024`
                }
            ]
        },
        {
            id: "parseDateToText",
            name: "parseDateToText",
            description: "Convierte una fecha en una cadena de texto según el tipo especificado ('date', 'month', 'week', 'time', o 'YYYY-MM-DD').",
            props: [
                {
                    id: "date",
                    type: "Date",
                    require: false,
                    description: "La fecha a convertir en texto. Si no se proporciona, se usará la fecha actual.",
                },
                {
                    id: "type",
                    type: "TypeDate | 'YYYY-MM-DD'",
                    require: true,
                    description: "El tipo de texto a crear a partir de la fecha.",
                }
            ],
            returns: [
                {
                    id: "result",
                    type: "string",
                    description: "La fecha convertida en una cadena de texto.",
                }
            ],
            useExample: [
                {
                    text: "Convertir una fecha en texto con formato 'YYYY-MM-DD'.",
                    content: `const date = new Date(2024, 10, 8);
const formattedDate = parseDateToText({ date, type: 'YYYY-MM-DD' }); // "2024-11-08"`
                }
            ]
        },
        {
            id: "getMonthValue",
            name: "getMonthValue",
            description: "Obtiene el valor del mes en formato 'yyyy-mm' a partir de una fecha dada.",
            props: [
                {
                    id: "date",
                    type: "Date",
                    require: true,
                    description: "La fecha de la cual obtener el valor del mes.",
                }
            ],
            returns: [
                {
                    id: "result",
                    type: "string",
                    description: "El valor del mes en formato 'yyyy-mm'.",
                }
            ],
            useExample: [
                {
                    text: "Obtener el valor del mes de una fecha.",
                    content: `const date = new Date(2024, 10, 8);
const monthValue = getMonthValue(date); // "2024-11"`
                }
            ]
        },
        {
            id: "getWeekValue",
            name: "getWeekValue",
            description: "Obtiene el valor de la semana en formato 'yyyy-Www' a partir de una fecha dada.",
            props: [
                {
                    id: "date",
                    type: "Date",
                    require: true,
                    description: "La fecha de la cual obtener el valor de la semana.",
                }
            ],
            returns: [
                {
                    id: "result",
                    type: "string",
                    description: "El valor de la semana en formato 'yyyy-Www'.",
                }
            ],
            useExample: [
                {
                    text: "Obtener el valor de la semana de una fecha.",
                    content: `const date = new Date(2024, 10, 8);
const weekValue = getWeekValue(date); // "2024-W45"`
                }
            ]
        },
        {
            id: "getTimeValue",
            name: "getTimeValue",
            description: "Obtiene el valor de la hora en formato 'hh:mm' a partir de una fecha dada.",
            props: [
                {
                    id: "date",
                    type: "Date",
                    require: true,
                    description: "La fecha de la cual obtener el valor de la hora.",
                }
            ],
            returns: [
                {
                    id: "result",
                    type: "string",
                    description: "El valor de la hora en formato 'hh:mm'.",
                }
            ],
            useExample: [
                {
                    text: "Obtener el valor de la hora de una fecha.",
                    content: `const date = new Date(2024, 10, 8, 14, 30);
const timeValue = getTimeValue(date); // "14:30"`
                }
            ]
        },
        {
            id: "parseDateTimeFormat",
            name: "parseDateTimeFormat",
            description: "Obtiene una representación de la fecha en un formato personalizado utilizando opciones locales y de formato.",
            props: [
                {
                    id: "date",
                    type: "Date",
                    require: true,
                    description: "La fecha para formatear.",
                },
                {
                    id: "options",
                    type: "parseDateTimeFormatOptions",
                    require: true,
                    description: "Opciones de formato personalizadas.",
                }
            ],
            returns: [
                {
                    id: "result",
                    type: "string",
                    description: "La fecha formateada según las opciones especificadas.",
                }
            ],
            useExample: [
                {
                    text: "Formatear una fecha usando opciones personalizadas.",
                    content: `const date = new Date(2024, 10, 8, 14, 30);
const formattedDate = parseDateTimeFormat(date, { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }); // "Monday, Nov 8, 2024"`
                }
            ]
        }
    ]
};
