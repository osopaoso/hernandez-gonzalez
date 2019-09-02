var trabajos = [{
    figure: "media/trabajo-01-Macaws.jpg",
    alt: "Comedero de Guacamayos en Zoo Metropolitano de Chile",
    title: "Comedero para guacamayos",
    about: "Proyecto que entrega calidad a los guacamayos, sin pasar a llevar sus jerarquias y conductas. <br><i> -Aldo</i>"
    var URL="https://www.behance.net/gallery/81611447/Portafolio-2017"
}, {
    figure: "media/trabajo-02-Julia.png",
    alt: "Herramienta multiuso Julia desplegada",
    title: "Julia",
    about: "Herramienta tipo cortapluma diseñada ergonómicamente para usuarios de la tercera edad, en contextos de camping o en contacto con la naturaleza. <br><i> -Kris</i>"
}, {
    figure: "media/trabajo-03-Damero.jpg",
    alt: "Corte fugado de proyecto.",
    title: "La reconquista del damero",
    about: "Plan que busca entregar el interior de una cuadra de santiago centro al fluido público.<br><i> -Aldo</i>"
}, {
    figure: "media/trabajo-04-bordadoras de isla negra.png",
    alt: "Packaging, tarjetas y etiquetas de las Bordadoras de Isla Negra",
    title: "Propuesta de rediseño Bordadoras de Isla Negra",
    about: "Propuesta de packaging, tarjetas de contacto y etiquetas de precio para las Bordadoras de Isla Negra, en fin de revalorizar sus históricos productos bordados aprovechando su premiación de sello de origen entregado por INAPI. <br><i> -Kris</i>"
}, {
    figure: "media/trabajo-05-MAT.jpg",
    alt: "Axonometrica ilustrada del producto: Lavaplatos portable",
    title: "MAT",
    about: "Producto que busca entregar una solucion al lavado de utensilios alimenticios despues de una emergencia.<br><i> -Aldo</i>"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Descripción de la imagen",
    title: "Título de sexto trabajo",
    about: "Texto simulado de descripción de sexto trabajo"
}, {
    figure: "media/trabajo-07-Sakumu.jpg",
    alt: "Fotomontaje de Dangos en vitrina de local Sakumu",
    title: "Reformulación: Sakumu",
    about: "Proyecto que busca reposicionar la imagen corporativa de la cafeteria Sakumu. <br><i>-Aldo</i>"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
