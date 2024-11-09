export default {
    id: "parseFile",
    name: "parseFile",
    description: "Función para leer el contenido de un archivo, con soporte para leer como texto o como URL de datos y con una función de progreso opcional.",
    props: [
        {
            id: "file",
            type: "any",
            require: true,
            description: "El archivo a leer.",
        },
        {
            id: "options",
            type: "{ fileText?: boolean; updateProgress: (progress: number) => void; }",
            require: true,
            description: "Opciones de configuración, incluyendo `fileText` y `updateProgress`.",
        }
    ],
    returns: [
        {
            id: "fileContents",
            type: "Promise<any>",
            description: "Una promesa que se resuelve con el contenido del archivo, ya sea en formato texto o base64.",
        }
    ],
    useExample: [
        {
            text: "Leer un archivo como texto con progreso de carga",
            content: `const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });
const updateProgress = (progress) => console.log("Progreso:", progress);
parseFile(file, { updateProgress, fileText: true })
    .then((content) => console.log("Contenido del archivo:", content))
    .catch((error) => console.error("Error al leer el archivo:", error));`
        }
    ]
};
