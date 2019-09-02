var trabajos = [{
    figure: "media/trabajo-01-Macaws.jpg",
    alt: "Comedero de Guacamayos en Zoo Metropolitano de Chile",
    title: "Comedero para guacamayos",
    about: "Proyecto que entrega calidad a los guacamayos, sin pasar a llevar sus jerarquias y conductas."
}, {
    figure: "media/trabajo-02-Julia.png",
    alt: "Descripción de la imagen",
    title: "Título de segundo trabajo",
    about: "Texto simulado de descripción de segundo trabajo"
}, {
    figure: "media/trabajo-03-damero.jpg",
    alt: "Corte fugado de proyecto.",
    title: "La reconquista del damero",
    about: "Plan que busca entregar el interior de una cuadra de santiago centro al fluido público."
}, {
    figure: "media/trabajo-04-editorial.jpg",
    alt: "Descripción de la imagen",
    title: "Título de cuarto trabajo",
    about: "Texto simulado de descripción de cuarto trabajo"
}, {
    figure: "media/trabajo-05-artesania.jpg",
    alt: "Descripción de la imagen",
    title: "Título de quinto trabajo",
    about: "Texto simulado de descripción de quinto trabajo"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Descripción de la imagen",
    title: "Título de sexto trabajo",
    about: "Texto simulado de descripción de sexto trabajo"
}, {
    figure: "media/trabajo-07-materiales.jpg",
    alt: "Descripción de la imagen",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
