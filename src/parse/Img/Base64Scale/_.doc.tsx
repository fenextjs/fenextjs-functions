export default {
    id: "parseImgBase64Scale",
    name: "parseImgBase64Scale",
    description: "Función para escalar una imagen en formato base64 ajustando su ancho, altura y calidad.",
    props: [
        {
            id: "base64",
            type: "string",
            require: true,
            description: "Cadena en formato base64 que representa la imagen.",
        },
        {
            id: "width",
            type: "number",
            require: true,
            description: "Ancho deseado para la imagen escalada.",
        },
        {
            id: "height",
            type: "number | 'auto'",
            require: false,
            description: "Altura deseada para la imagen escalada. Si se establece en 'auto', se ajustará automáticamente para mantener la proporción.",
            default: "'auto'",
        },
        {
            id: "quality",
            type: "number",
            require: false,
            description: "Calidad de la imagen resultante en un rango de 0 a 1, donde 1 representa la máxima calidad.",
            default: 1,
        }
    ],
    returns: [
        {
            id: "compressedBase64",
            type: "string | undefined",
            description: "Cadena en formato base64 de la imagen escalada y comprimida, o `undefined` si ocurre un error.",
        }
    ],
    useExample: [
        {
            text: "Escalar una imagen en base64 con ancho fijo y altura automática",
            content: `const base64Image = "data:image/jpeg;base64,..."; 
const scaledImage = await parseImgBase64Scale({ 
    base64: base64Image, 
    width: 200, 
    height: "auto", 
    quality: 0.8 
}); 
console.log(scaledImage);`
        }
    ]
};
