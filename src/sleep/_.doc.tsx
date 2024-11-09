export default {
    id: "sleep",
    name: "sleep",
    description: "Función asincrónica que pausa la ejecución durante un tiempo especificado.",
    props: [
        {
            id: "time",
            type: "number",
            require: false,
            description: "Tiempo en milisegundos para pausar la ejecución. El valor predeterminado es 1000 ms (1 segundo).",
        }
    ],
    returns: [
        {
            id: "void",
            type: "Promise<void>",
            description: "La función devuelve una promesa que se resuelve después del tiempo especificado.",
        }
    ],
    useExample: [
        {
            text: "Pausar la ejecución durante 2 segundos",
            content: `await sleep(2000); // Pausa la ejecución por 2 segundos`
        },
        {
            text: "Usar el valor predeterminado (1 segundo)",
            content: `await sleep(); // Pausa la ejecución por 1 segundo`
        }
    ]
};
