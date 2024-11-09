export default {
    id: "CONFIG",
    name: "CONFIG",
    description: "Objeto de configuración que determina el estado de ciertas funcionalidades en función de las variables de entorno definidas.",
    props: [
        {
            id: "EMPY",
            type: "boolean",
            require: true,
            description: "Indica si la funcionalidad EMPY está habilitada. Se activa si la variable de entorno NEXT_PUBLIC_EMPY es igual a 'TRUE'.",
        },
        {
            id: "MODATA",
            type: "boolean",
            require: true,
            description: "Indica si la funcionalidad MODATA está habilitada. Se activa si la variable de entorno NEXT_PUBLIC_MODATA es igual a 'TRUE'.",
        },
        {
            id: "LOG",
            type: "boolean",
            require: true,
            description: "Indica si la funcionalidad de registro de LOG está habilitada. Se activa si la variable de entorno NEXT_PUBLIC_LOG es igual a 'TRUE'.",
        }
    ],
    useExample: [
        {
            text: "Uso de CONFIG",
            content: `if (CONFIG.LOG) {
    console.log("Logging is enabled.");
}`
        },
        {
            text: "Verificar MODATA",
            content: `if (CONFIG.MODATA) {
    console.log("MODATA functionality is active.");
}`
        },
        {
            text: "Condicionar funcionalidad según EMPY",
            content: `if (CONFIG.EMPY) {
    console.log("EMPY feature is enabled.");
}`
        }
    ]
};
