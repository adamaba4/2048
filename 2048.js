$(document).ready(() => {
    let grille = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
    let score = 12
    let nbVide = 16

    function construitGrille() {
        $("div#grille").append(
            `<table
             <tbody>
              <tr>
                <td>${grille[0][0]}</td> 
                <td>${grille[0][1]}</td> 
                <td>${grille[0][2]}</td> 
                <td>${grille[0][3]}</td>
                </tr>
              <tr>
                <td>${grille[1][0]}</td>
                <td>${grille[1][1]}</td>
                <td>${grille[1][2]}</td>
                <td>${grille[1][3]}</td>
              </tr>
              <tr>
                <td>${grille[2][0]}</td>
                <td>${grille[2][1]}</td>
                <td>${grille[2][2]}</td>
                <td>${grille[2][3]}</td>
              </tr>
              <tr>
                <td>${grille[3][0]}</td>
                <td>${grille[3][1]}</td>
                <td>${grille[3][2]}</td>
                <td>${grille[3][3]}</td>
              </tr>
            </tbody>
            </table>`
        )


    }
    function afficheScore() {
        $("span#score").replaceWith(score)

    }
    function caseVide(k, x) {
        let compteur = 0
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                compteur++
                if (compteur === k && grille[i][j] === 0) {
                    grille[i][j] = x
                    nbVide--
                }
            }
        }


        construitGrille()
    }
    caseVide(5, 7)
    afficheScore()


})
