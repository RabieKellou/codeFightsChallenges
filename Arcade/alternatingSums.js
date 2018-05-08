//The Task : https://codefights.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9/description
function alternatingSums(a) {
    var team1 = 0;
    var team2 = 0;
    for (i = 0; i < a.length; i++) {
        (i % 2) ? a[i] && (team2 += a[i]): a[i] && (team1 += a[i])
    }
    return [team1, team2];
}