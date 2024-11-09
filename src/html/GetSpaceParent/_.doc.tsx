export default {
    id: "GetSpaceParent",
    name: "GetSpaceParent",
    description: "Función que calcula el espacio entre un elemento y su primer contenedor padre con overflow configurado (hidden, scroll, o auto) o hasta el body.",
    props: [
        {
            id: "element",
            type: "HTMLElement",
            require: true,
            description: "Elemento HTML para el cual se calcularán los espacios relativos a su contenedor padre.",
        }
    ],
    returns: [
        {
            id: "spaces",
            type: "{ spaceTop: number; spaceLeft: number; spaceRight: number; spaceBottom: number; }",
            description: "Objeto que contiene las distancias (en píxeles) entre el elemento y los bordes superior, izquierdo, derecho y inferior de su contenedor padre.",
        }
    ],
    useExample: [
        {
            text: "Calcular espacios de un elemento dentro de su contenedor padre",
            content: `const spaces = GetSpaceParent(document.getElementById("myElement"));
console.log(spaces.spaceTop, spaces.spaceLeft, spaces.spaceRight, spaces.spaceBottom);`
        }
    ]
};
