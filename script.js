// Movie Data with Watch URLs for YouTube and Netflix
const movies = {
    horror: [
        { title: "Tumbbad", image: "movies/Tumbbad.jpg", watchLink: "https://youtu.be/w6A25fu9cWE?si=6kQ-53Vfh9OdyxxQ" },
        { title: "Stree", image: "movies/stree.jpg", watchLink: "https://youtu.be/qP34KvcADWc?si=i6Tb0qeE5hhyZIi6" },
        { title: "Raaz", image: "movies/Raaz.jpg", watchLink: "https://youtu.be/zvjCK5Pq6gU?si=xqCLZFNvVhQrvX6G" },
        { title: "Raat", image: "movies/raat.jpg", watchLink: "https://youtu.be/gOPgZCoFtn8?si=EAKTHAl9VSQkKmnr" },
        { title: "Phobia", image: "movies/Phobia.jpg", watchLink: "https://youtu.be/mbaqOyp2MLY?si=z3FFOJ8PBTxJ4DYV" },
        { title: "Pari", image: "movies/pari.jpg", watchLink: "https://youtu.be/yy1mEJtSnNw?si=pkYkefGNfwR_fiAH" },
        { title: "Ek Thi Daayan", image: "movies/Ek Thi Daayan.jpg", watchLink: "https://youtu.be/hj7cymYNqD0?si=3wP6_B-zWAdgKOd4" },
        { title: "Bhoot", image: "movies/Bhoot.jpg", watchLink: "https://youtu.be/nXsTxaHmmTo?si=HAgCTphzMo-bWMMD" },
        { title: "Bhool Bhulaiyaa", image: "movies/Bhool Bhulaiyaa.jpg", watchLink: "https://youtu.be/jzYxbnHHhY4?si=WtJsnzKKcMIhQEzN" },
    ],
    romantic: [
        { title: "Dilwale Dulhania Le Jayenge", image: "movies/dil.jpg", watchLink: "https://youtu.be/IbwjDTOvwG8?si=AHW78lvV2E0vOJSC" },
        { title: "Kabhi Khushi Kabhie Gham", image: "movies/kabhi.jpg", watchLink: "https://youtu.be/75rfnED_-2o?si=Hfi4L9aXs7kN7kSr" },
        { title: "Jab We Met", image: "movies/jab.jpg", watchLink: "https://youtu.be/jf2gOSORoqU?si=NjK_0zMMXcr7dseu" },
        { title: "Veer-Zaara", image: "movies/veer.jpg", watchLink: "https://youtu.be/NmrJelzJyxc?si=2eiGuBXG4_QDNJPA" },
        { title: "Kal Ho Naa Ho", image: "movies/kal.jpg", watchLink: "https://youtu.be/c4tKB0kfhtw?si=Bi1kJJBBpQvNxcec" },
        { title: "2 States", image: "movies/states.jpg", watchLink: "https://youtu.be/a8B9S-k0ixs?si=q2GDg3eKfTwsPv3F" },
        { title: "Tamasha", image: "movies/tamasha.jpg", watchLink: "https://youtu.be/xO74iZEVoME?si=zMN58Du8rGMDKq-T" },
        { title: "Yel Dil", image: "movies/yeh.jpg", watchLink: "https://youtu.be/TWfz3zfHNCk?si=SUOwJHfh_BPfeHm0" },
        { title: "Aashiqui 2", image: "movies/aashique.jpg", watchLink: "https://youtu.be/Z8L9VuSFXv8?si=fk_QHl3tW8HiQPU8" },
    ],
    hollywood: [
        { title: "Avengers: Endgame", image: "movies/avengers.jpg", watchLink: "https://youtu.be/79ttalcs15k?si=Ca8LWrRCMTmzOpCG" },
        { title: "The Dark Knight", image: "movies/dark.jpg", watchLink: "https://youtu.be/KyXWkoRlthY?si=62ibuoBA0Ao6wn7R" },
        { title: "Titanic", image: "movies/titanic.jpg", watchLink: "https://youtu.be/DbGWQBNrx6c?si=lFLn2hwLQLysHb6J" },
        { title: "The Notebook", image: "movies/notebook.jpg", watchLink: "https://youtu.be/a9TQJHEdBgM?si=O_PfW7pd-XTJnQ7K" },
        { title: "The Hangover", image: "movies/hang.jpg", watchLink: "https://youtu.be/xRm78I8PDnI?si=PqBviadbTovRWbLN" },
        { title: "The Conjuring", image: "movies/conj.jpg", watchLink: "https://youtu.be/yftMYuacQio?si=JAJsd2JhseDxhwe6" },
        { title: "Fight Club", image: "movies/flight.jpg", watchLink: "https://youtu.be/RzuCIUg73Ts?si=0AYqVJNaiTAVFpSE" },
    ],
    punjabi: [
        { title: "Jatt & Juliet", image: "movies/pun1.jpg", watchLink: "https://youtu.be/iRu04tMS_9g?si=r1tdxk8g_JyJEo-1" },
        { title: "Chaar Sahibzaade", image: "movies/pun2.jpg", watchLink: "https://youtu.be/kfbqNTwnZRY?si=BjeeW_FdvGWumFHP" },
        { title: "Angrej", image: "movies/pun3.jpg", watchLink: "https://youtu.be/A2vcDRAdf5I?si=8BtiZfV598YjY_mK" },
        { title: "Punjab 1984", image: "movies/pun4.jpg", watchLink: "https://youtu.be/kfTPVDPzMdU?si=-wuB0I4xOY0tlHkY" },
        { title: "Carry On Jatta", image: "movies/pun5.jpg", watchLink: "https://youtu.be/djNkk3wboz0?si=m3nRZmU6Jh5EnJSs" },
        { title: "Sardarji", image: "movies/pun6.jpg", watchLink: "https://youtu.be/tAXFCvEdGhc?si=b0q_I4Kt0CNJA6xU" },
        { title: "Qismat", image: "movies/pun7.jpg", watchLink: "https://youtu.be/7ESHeW0Rz4I?si=6VDUzGKTa51_EQ8C" },
    ],
    trailers: [
        { title: "Singham Again", image: "movies/new1.jpg", watchLink: "https://youtu.be/MD7v0-igVIM?si=HulDs1izpIobnCPP" },
        { title: "Metro in Dino", image: "movies/new2.avif", watchLink: "https://youtu.be/dXFVOkq41us?si=I_ZPOK5Ay4mORFi3" },
        { title: "Phushpa 2", image: "movies/new3.jpg", watchLink: "https://youtu.be/r588USiDBMc?si=No7HbNFFiObsac1l" },
        { title: "Sabarmati Report", image: "movies/new5.jpg", watchLink: "https://youtu.be/Mjtv0KkgCqM?si=WLLP7vyDO3XwQp2O" },
        { title: "Scoop", image: "movies/new6.jpg", watchLink: "https://youtu.be/mmnQzRP-NZ4?si=81eFg6a5O9pehXDV" },
    ],
};

// Function to Populate Movies
function populateMovies() {
    const categoriesContainer = document.getElementById("categories");
    categoriesContainer.innerHTML = ""; // Clear container before repopulating

    Object.keys(movies).forEach((category) => {
        // Create Category Section
        const categorySection = document.createElement("div");
        categorySection.classList.add("category");
        categorySection.id = category;

        // Add Category Title
        const title = document.createElement("h2");
        title.textContent = category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, " $1");
        categorySection.appendChild(title);

        // Create Movie Carousel
        const movieCarousel = document.createElement("div");
        movieCarousel.classList.add("movie-carousel");

        // Add Movies to Carousel
        movies[category].forEach((movie) => {
            const movieCard = createMovieCard(movie, category === "newReleases");
            movieCarousel.appendChild(movieCard);
        });

        // Append Carousel to Category Section
        categorySection.appendChild(movieCarousel);

        // Append Category Section to Categories Container
        categoriesContainer.appendChild(categorySection);
    });
}

// Helper Function to Create a Movie Card
function createMovieCard(movie, isNew = false) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    // Add "New" Badge for New Releases
    if (isNew) {
        const newBadge = document.createElement("span");
        newBadge.classList.add("new-badge");
        newBadge.textContent = "New";
        movieCard.appendChild(newBadge);
    }

    // Movie Image
    const img = document.createElement("img");
    img.src = movie.image;
    img.alt = movie.title;

    // Movie Info
    const movieInfo = document.createElement("div");
    movieInfo.classList.add("movie-info");

    const movieTitle = document.createElement("h3");
    movieTitle.textContent = movie.title;

    const watchNowBtn = document.createElement("button");
    watchNowBtn.textContent = "Watch Now";

    // Set Watch Now button to navigate to movie's watchLink
    watchNowBtn.onclick = () => {
        window.location.href = movie.watchLink; // Directly navigate to the watch URL
    };

    // Append to Movie Info
    movieInfo.appendChild(movieTitle);
    movieInfo.appendChild(watchNowBtn);

    // Append to Movie Card
    movieCard.appendChild(img);
    movieCard.appendChild(movieInfo);

    return movieCard;
}

// Event Listener for Search Bar
document.querySelector(".search-bar button").addEventListener("click", () => {
    const query = document.querySelector(".search-bar input").value.trim();
    if (query) {
        searchMovies(query);
    } else {
        populateMovies(); // Reset to default view if search is empty
    }
});

// Function to Search Movies
function searchMovies(query) {
    const searchResults = [];
    Object.values(movies).forEach(categoryMovies => {
        categoryMovies.forEach(movie => {
            if (movie.title.toLowerCase().includes(query.toLowerCase())) {
                searchResults.push(movie);
            }
        });
    });

    displaySearchResults(searchResults);
}

// Function to Display Search Results
function displaySearchResults(searchResults) {
    const categoriesContainer = document.getElementById("categories");

    // Create a single "Search Results" section
    const searchSection = document.createElement("div");
    searchSection.classList.add("search-results");

    // Add Results Header
    const resultsHeader = document.createElement("h2");
    resultsHeader.textContent = "Search Results";
    searchSection.appendChild(resultsHeader);

    // Add Movie Cards for Search Results
    const searchCarousel = document.createElement("div");
    searchCarousel.classList.add("movie-carousel");

    searchResults.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        searchCarousel.appendChild(movieCard);
    });

    searchSection.appendChild(searchCarousel);
    categoriesContainer.innerHTML = ""; // Clear the container
    categoriesContainer.appendChild(searchSection); // Display search results
}

// Initialize the Page with Movies
populateMovies();




// GSAP Animation for Navbar
gsap.from(".navbar", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "bounce"
});

// Scroll Animation for Categories
document.querySelectorAll(".category").forEach((category, index) => {
    gsap.from(category, {
        duration: 1,
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        delay: 0.5 + index * 0.3
    });
});
