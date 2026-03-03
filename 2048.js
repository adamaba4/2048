$(document).ready(() => {
    let grille = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
    let score = 0
    let nbVide = 16
    function construitGrille() {
        const $table = $("<table>")
        const $tbody = $("<tbody>")


        for (let i = 0; i < 4; i++)
        {
            const $tr = $("<tr>")
            for (let j = 0; j < 4; j++)
            {
                const val = grille[i][j]

                const $td = $("<td>").text(val !== 0 ? val : "")
                $tr.append($td)
            }
            $tbody.append($tr)

        }
        $table.append($tbody)
        $("#grille").append($table)
    }


    function afficheScore() {
        $("span#score").text(score)

    }
    function caseVide(k, x) {
        let compteur = 0
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if ( grille[i][j] === 0) {
                    if (compteur === k )
                    {
                        grille[i][j] = x
                        nbVide--
                        return
                    }
                    compteur++
                }

            }
        }

    }
    function nouvelle() {
        score = 0
        afficheScore()
        $("#grille").empty()
        for (let i = 0; i < 4; i++)
        {
            for (let j = 0; j < 4; j++ )
            {
                grille[i][j] = 0
            }
        }
        nbVide = 16

        let c1 = Math.floor(Math.random() * nbVide)
        caseVide(c1, 2)
        let c2 = Math.floor(Math.random() * nbVide)
        caseVide(c2, 2)

        construitGrille()

    }

    function gameOver() {
        $("#score").after(" Game Over")

    }
    function changerCoulerCase() {
        for(let i= 0; i < 4; i++)
        {
            for (let j = 0; j < 4; j++)
            {
                if (grille[i][j] === 2)
                {

                }
            }
        }

    }

    $(function (){
        nouvelle()
    })
    $("div button").click(nouvelle)

})

