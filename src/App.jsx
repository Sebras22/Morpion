import { useState } from "react";
import "./App.css";
import Case from "./components/Case.jsx";

export default function App() {
    const [morpion, setMorpion] = useState(Array(9));
    const [move, setMove] = useState(true);

    const Gagnant = Victoire(morpion);
    let tours;

    {
        Gagnant === null
            ? (tours = (move ? " 🐶 " : "  🐱  ") + " est le prochain joueur")
            : (tours = Gagnant + " est le gagnant");
    }

    function ClickJeu(i) {
        const prochainmove = morpion.slice();
        prochainmove[i] = " 🐶 ";

        if (morpion[i] && Victoire(morpion)) {
            return;
        }
        {
            move === false
                ? (prochainmove[i] = "  🐱  ")
                : (prochainmove[i] = " 🐶 ");
        }

        setMorpion(prochainmove);
        setMove(!move);
    }
    function Victoire() {
        const Combinaisons = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < Combinaisons.length; i++) {
            const [a, b, c] = Combinaisons[i];
            if (
                morpion[a] &&
                morpion[a] === morpion[b] &&
                morpion[a] === morpion[c]
            ) {
                return morpion[a];
            }
        }
        return null;
    }

    // function Case({ value, caseclick }) {
    //     return (
    //         <button className="case" disabled={Gagnant} onClick={caseclick}>
    //             {value}
    //         </button>
    //     );
    // }

    return (
        <>
            <div className="Texte">{tours}</div>
            <div className="container">
                <Case
                    disabled={Gagnant}
                    value={morpion[0]}
                    caseclick={() => ClickJeu(0)}
                />
                <Case
                    disabled={Gagnant}
                    value={morpion[1]}
                    caseclick={() => ClickJeu(1)}
                />
                <Case
                    disabled={Gagnant}
                    value={morpion[2]}
                    caseclick={() => ClickJeu(2)}
                />
                <Case
                    disabled={Gagnant}
                    value={morpion[3]}
                    caseclick={() => ClickJeu(3)}
                />
                <Case
                    disabled={Gagnant}
                    value={morpion[4]}
                    caseclick={() => ClickJeu(4)}
                />
                <Case
                    disabled={Gagnant}
                    value={morpion[5]}
                    caseclick={() => ClickJeu(5)}
                />
                <Case
                    disabled={Gagnant}
                    value={morpion[6]}
                    caseclick={() => ClickJeu(6)}
                />
                <Case
                    disabled={Gagnant}
                    value={morpion[7]}
                    caseclick={() => ClickJeu(7)}
                />
                <Case
                    disabled={Gagnant}
                    value={morpion[8]}
                    caseclick={() => ClickJeu(8)}
                />
            </div>
        </>
    );
}
