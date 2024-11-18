export default {
    id: "getBase64ForImageDonwload",
    name: "getBase64ForImageDonwload",
    description:
        "Función asincrónica que convierte una imagen de una URL en una cadena en formato Base64.",
    props: [
        {
            id: "url",
            type: "string",
            require: true,
            description:
                "URL de la imagen que se descargará y convertirá a Base64.",
        },
    ],
    returns: [
        {
            id: "Base64String",
            type: "Promise<string>",
            description:
                "Una promesa que se resuelve con la representación en Base64 de la imagen especificada por la URL.",
        },
    ],
    useExample: [
        {
            text: "Convertir imagen a Base64",
            content: `const base64String = await getBase64ForImageDonwload({ url: "https://example.com/image.jpg" });
console.log(base64String);`,
        },
    ],
};
