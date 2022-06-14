function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait, } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' ); 
        //lien sur la carte des photosgraphe pour changer de page
        const link = document.createElement("a");
        link.setAttribute("href", `./photographer.html?id=${id}`);
        link.setAttribute("aria-label", name);

        const articleDescription = document.createElement("article");
        articleDescription.setAttribute("tabindex", "0");   
        /*L'attribut universel tabindex est un entier indiquant si l'élément 
        peut capturer le focus et si c'est le cas, dans quel ordre il le capture 
        lors de la navigation au clavier (généralement à l'aide de la touche Tab )*/

        const img = document.createElement("img");
        img.setAttribute("src", picture);
        img.setAttribute("alt", " ");

        const h2 = document.createElement("h2");
        h2.textContent = name;

        const pLocation = document.createElement("p");
        pLocation.textContent = `${city},${country}`;

        const pTagline = document.createElement("p");
        pTagline.textContent = `${tagline}`;

        const pPrice = document.createElement("p");
        pPrice.textContent = `${price}€/jours`;

        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(articleDescription);
        articleDescription.appendChild(pLocation);
        articleDescription.appendChild(pTagline);
        articleDescription.appendChild(pPrice);
        return article;

    }
    return { name, id, city, country, tagline, price, picture, getUserCardDOM }
}
// destructuring objects javascript (a chercher)
// spread operator
// Json() 
// url search params
// realiser la page photographers.js et prendre les données d'un seul photographe