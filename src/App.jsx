import { useState } from 'react';
import './App.css'



export default function App() {
  const [morpion, setMorpion] = useState(Array(9));
  const [move, setMove] = useState(true);

  const Gagnant = Victoire(morpion)
  let tours;

  {Gagnant === null ? tours = (move ? " 🐶 " : "  🐱  ") + " est le prochain joueur" : tours = Gagnant + " est le gagnant"}

  function ClickJeu(i) {
    const prochainmove = morpion.slice();
    prochainmove[i] = " 🐶 ";
    
    if(morpion[i] && Victoire(morpion)){
      return
    }
    {move === false ? prochainmove[i] = "  🐱  " :  prochainmove[i] = " 🐶 "}

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
      [2, 4, 6]
    ]
    for (let i = 0; i < Combinaisons.length; i++) {
      const [a, b, c] = Combinaisons[i];
      if (morpion[a] && morpion[a] === morpion[b] && morpion[a] === morpion[c]) {
        return morpion[a];
      }
    }
    return null;
  }
    
  function Case({value, caseclick}) { 


    return(
      <button className='case' onClick={caseclick}>{value}</button>)
    
  }
  

  return (
    <>
        <div className='Texte'>{tours}</div>
        <div className='container'>
          <Case value={morpion[0]} caseclick={() =>ClickJeu(0)}/>
          <Case value={morpion[1]} caseclick={() =>ClickJeu(1)}/>
          <Case value={morpion[2]} caseclick={() =>ClickJeu(2)}/>
          <Case value={morpion[3]} caseclick={() =>ClickJeu(3)}/>
          <Case value={morpion[4]} caseclick={() =>ClickJeu(4)}/>
          <Case value={morpion[5]} caseclick={() =>ClickJeu(5)}/>
          <Case value={morpion[6]} caseclick={() =>ClickJeu(6)}/>
          <Case value={morpion[7]} caseclick={() =>ClickJeu(7)}/>
          <Case value={morpion[8]} caseclick={() =>ClickJeu(8)}/>         
        </div>
    </>
  )
}

