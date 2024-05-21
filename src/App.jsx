import { useState } from "react";
import "./App.css";
import Case from "./components/Case.jsx";

export default function App() {
    const [morpion, setMorpion] = useState(Array(9).fill(""));
    const [move, setMove] = useState(true);

    const Gagnant = Victoire(morpion);
    let tours;

    if (Gagnant === null) {
        tours = (move ? " 🐶 " : " 🐱 ") + " est le prochain joueur";
    } else {
        tours = Gagnant + " est le gagnant";
    }

    function ClickJeu(i) {
        if (morpion[i] || Gagnant) {
            return;
        }

        const prochainmove = morpion.slice();
        prochainmove[i] = move ? " 🐶 " : " 🐱 ";

        setMorpion(prochainmove);
        setMove(!move);
    }

    function Victoire(morpion) {
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

    return (
        <>
            <div className="Texte">{tours}</div>
            <div className="container">
                {morpion.map((value, index) => (
                    <Case
                        key={index}
                        disabled={Boolean(Gagnant)}
                        value={value}
                        caseclick={() => ClickJeu(index)}
                    />
                ))}
            </div>
        </>
    );
}
