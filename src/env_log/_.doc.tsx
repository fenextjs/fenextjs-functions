export default {
    id: "env_log",
    name: "env_log",
    description:
        "Función que imprime un mensaje en la consola si la variable de entorno `NEXT_PUBLIC_LOG` está configurada como 'TRUE'.",
    props: [
        {
            id: "data",
            type: "any",
            require: true,
            description: "El mensaje de log que se imprimirá en la consola.",
        },
        {
            id: "options",
            type: "Object",
            require: false,
            description: "Opciones para personalizar el mensaje de log.",
        },
        {
            id: "options.name",
            type: "string",
            require: false,
            description:
                "Nombre que aparece junto al mensaje de log en la consola, en mayúsculas.",
        },
        {
            id: "options.color",
            type: "string",
            require: false,
            description:
                "Color del texto del mensaje de log en la consola. El valor predeterminado es 'white'.",
        },
    ],
    returns: [
        {
            id: "void",
            type: "void",
            description: "Esta función no tiene valor de retorno.",
        },
    ],
    useExample: [
        {
            text: "Imprimir mensaje de log básico",
            content: `env_log("This is a log message");`,
        },
        {
            text: "Imprimir mensaje de log con nombre y color",
            content: `env_log("This is a log message", { name: "Info", color: "blue" });`,
        },
    ],
};
