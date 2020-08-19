var likes = ['dessiner crayon-papier',
            'jouer au volley', 
            'rire',
            'les jeux video',
            "m'amuser avec le CSS",
            'la science-fiction', 
            'le fantastique',
            'relever des challenges'];

textSequence(0);

function textSequence(i) {

    if (likes.length > i) {
        setTimeout(function() {
            document.getElementById("sequence").innerHTML = likes[i];
            textSequence(++i);
        }, 2250);

    } else if (likes.length == i) {
        textSequence(0);
    }
}
