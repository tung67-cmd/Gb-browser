// GB BROWSER 2.1

const GB = { home: "index.html",

goHome() {
    window.location.href = this.home;
},

goBack() {
    window.history.back();
},

refresh() {
    window.location.reload();
},

saveFavorite(url) {
    let favorites = JSON.parse(
        localStorage.getItem("gb_favorites") || "[]"
    );

    if (!favorites.includes(url)) {
        favorites.push(url);
    }

    localStorage.setItem(
        "gb_favorites",
        JSON.stringify(favorites)
    );
},

getFavorites() {
    return JSON.parse(
        localStorage.getItem("gb_favorites") || "[]"
    );
},

saveHistory(url) {
    let history = JSON.parse(
        localStorage.getItem("gb_history") || "[]"
    );

    history.unshift({
        url: url,
        date: new Date().toLocaleString()
    });

    history = history.slice(0, 30);

    localStorage.setItem(
        "gb_history",
        JSON.stringify(history)
    );
},

getHistory() {
    return JSON.parse(
        localStorage.getItem("gb_history") || "[]"
    );
}


};

window.GB = GB;
