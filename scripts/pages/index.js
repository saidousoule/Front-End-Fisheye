    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
     const jsonFile = "./data/photographers.json";
        // et bien retourner le tableau photographers seulement une fois
        try{
            let response = await fetch(jsonFile);
            return await response.json();
        }catch(error){
            console.log(error);
        }

    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();

