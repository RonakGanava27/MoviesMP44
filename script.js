function playMovie(movieUrl) {
    // Full Google Drive URL me https add karo agar nahi hai
    if (!movieUrl.startsWith("http")) {
        movieUrl = "https:" + movieUrl;
    }
    window.open(movieUrl, "_blank");
}
