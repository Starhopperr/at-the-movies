async function loadMovies() {
    const response = await fetch("movies.csv");
    const data = await response.text();

    const rows = data.split("\n").slice(1); // Skip header
    let slides = "";

    rows.forEach(row => {
        const [poster, title, review] = row.split(",");
        if (poster && title && review) {
            slides += `
                <div class="swiper-slide">
                    <img src="${poster.trim()}" alt="${title.trim()}">
                    <h3>${title.trim()}</h3>
                    <p>${review.trim()}</p>
                </div>
            `;
        }
    });

    document.getElementById("carousel").innerHTML = slides;

    new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

loadMovies();
               
