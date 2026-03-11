$(document).ready(() => {
    let grille = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
    let score = 0
    let nbVide = 16
    let enCours = true
    let glisser = false
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
        enCours = true

    }
    function glisse(g){
        for (let i = 0; i < 4; i ++)
        {
            let tab = []
            let c = 0
            for( let j = 0; j < 4; j++)
            {
                if(lire(g, i, j) !== 0)
                {
                    tab[c++] = lire(g, i, j)

                }

            }
            for (let j = 0; j < c - 1; j++)
            {
                if (tab[j] === tab[j + 1])
                {
                    tab[j] = 2 * tab[j]
                    tab[j + 1] = 0
                    score += tab[j]
                    nbVide++
                    j++
                    glisser = true
                }
            }
            let k = 0
            let tab2 = []
            for( let j = 0; j < c; j++)
            {
                if(tab[j] !== 0)
                {
                    tab2[k++] = tab[j]
                }
            }

            for (let j = 0; j < k; j++)
            {
                if(lire(g, i, j) !== tab2[j])
                    glisser = true
                ecrire(g, i, j, tab2[j])
            }
            for (let j = k; j < 4; j++)
            {
                ecrire(g, i, j, 0)
            }
        }

    }
    function lire( dir, i, j)
    {
        if (dir === 'g') return grille[i][j]
        if (dir === 'd') return grille[i][3 -j]
        if (dir === 'h') return grille[j][i]
        if (dir ==='b') return grille[3 -j][i]
    }
    function ecrire (dir, i, j, val)
    {
        if (dir === 'g')
            grille[i][j] = val
        if (dir === 'd')
            grille[i][3 -j] = val
        if (dir === 'h')
            grille[j][i] = val
        if (dir ==='b')
            grille[3 -j][i] = val
    }
    function gameOver() {

        $("#score").after("<p> Game Over</p>")
        enCours = false
    }
    $(document).keydown(function (e){
        if (!enCours) return
        $("#grille").empty()
        if (e.which === 37 )
        {
            glisser =false
            glisse('g')
            if(nbVide === 0)
            {
                gameOver()
            }
            else
            {
                if (glisser){
                    let c1 = Math.floor(Math.random() * nbVide)
                    caseVide(c1, 2)
                }
                construitGrille()
                afficheScore()
            }

        }
        if(e.which  ===  38)
        {
            glisser =false
            glisse('h')
            if(nbVide === 0)
            {
                gameOver()
            }
            else
            {
                if (glisser){
                    let c1 = Math.floor(Math.random() * nbVide)
                    caseVide(c1, 2)
                }
                construitGrille()
                afficheScore()
            }

        }
        if(e.which  ===  39)
        {
            glisser =false
            glisse('d')
            if(nbVide === 0)
            {
                gameOver()
            }
            else
            {
                if (glisser){
                    let c1 = Math.floor(Math.random() * nbVide)
                    caseVide(c1, 2)
                }
                construitGrille()
                afficheScore()
            }
        }
        if(e.which ===  40)
        {
            glisser =false
            glisse('b')
            if(nbVide === 0)
            {
                gameOver()
            }
            else {
                if (glisser){
                    let c1 = Math.floor(Math.random() * nbVide)
                    caseVide(c1, 2)
                }
                construitGrille()
                afficheScore()
            }

        }

    })
    $(function (){
        nouvelle()
    })
    $("div button").click(nouvelle)
    $()

})

