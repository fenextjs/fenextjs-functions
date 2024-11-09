export default {
    id: "parseCsvToJson",
    name: "parseCsvToJson",
    description: "Convierte un archivo CSV a un objeto JSON, usando la primera línea como encabezados y las siguientes como valores. Soporta campos con el carácter de separación '|' y otros posibles errores de formato.",
    props: [
        {
            id: "csv",
            type: "string",
            require: true,
            description: "Cadena de texto que contiene el contenido del archivo CSV.",
        }
    ],
    returns: [
        {
            id: "result",
            type: "{ headers: string[], data: any[] }",
            description: "Objeto que contiene los encabezados y los datos convertidos a formato JSON. Si ocurre un error durante el procesamiento, retorna un objeto vacío.",
        }
    ],
    useExample: [
        {
            text: "Convertir un archivo CSV en formato JSON",
            content: `const csvData = '"Name","Age","Profession"\n"John",25,"Engineer"\n"Jane",30,"Designer"';
const parsedData = parseCsvToJson(csvData);
console.log(parsedData); // { headers: ["Name", "Age", "Profession"], data: [{ Name: "John", Age: 25, Profession: "Engineer" }, { Name: "Jane", Age: 30, Profession: "Designer" }] }`
        }
    ]
}
