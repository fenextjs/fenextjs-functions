export default {
    id: "parseBase64ToImgData",
    name: "parseBase64ToImgData",
    description: "Función para generar múltiples versiones escaladas de una imagen en base64, que varían en tamaño y calidad, y estructurarlas en un objeto de tipo `ImgDataProps`.",
    props: [
        {
            id: "base64",
            type: "string",
            require: true,
            description: "Cadena en formato base64 que representa la imagen original.",
        },
        {
            id: "name",
            type: "string",
            require: false,
            description: "Nombre opcional de la imagen.",
        },
        {
            id: "quality",
            type: "number",
            require: false,
            description: "Calidad de las imágenes generadas, en un rango de 0 a 1. El valor predeterminado es 1.",
        }
    ],
    returns: [
        {
            id: "Img",
            type: "ImgDataProps",
            description: "Objeto `ImgDataProps` que contiene la imagen original en base64 y múltiples versiones escaladas en distintas resoluciones.",
        }
    ],
    useExample: [
        {
            text: "Generar versiones escaladas de una imagen en base64",
            content: `const base64Image = "data:image/jpeg;base64,...";
const imageData = await parseBase64ToImgData({ 
    base64: base64Image, 
    name: "sample_image", 
    quality: 0.8 
});
console.log(imageData);`
        }
    ]
};
