# Dicee Challenge 🎲

A small two-player dice game built with **HTML, CSS and vanilla JavaScript**.

Each time the page loads, both players receive a random dice roll. The game compares the results and displays the winner—or a draw if both rolls match.

## Preview

Open `index.html` in your browser to play. Refresh the page to roll the dice again.

## Built with

- **HTML5** — semantic page structure and accessible image descriptions.
- **CSS3** — layout, typography and responsive styling.
- **JavaScript (ES6)** — random number generation, DOM selection and updates, and conditional logic.

## How it works

1. JavaScript generates a random number from 1 to 6 for each player.
2. The numbers determine which dice images are displayed.
3. An `if / else if / else` statement compares the rolls.
4. The heading updates to show Player 1, Player 2, or a draw.

## Run locally

No installation or build tools are required.

1. Download or clone this repository.
2. Open `index.html` in a web browser.
3. Refresh the page to play another round.

## Project structure

```text
dicee-challenge/
├── images/
│   ├── dice1.png
│   ├── dice2.png
│   ├── dice3.png
│   ├── dice4.png
│   ├── dice5.png
│   └── dice6.png
├── index.html
├── index.js
├── styles.css
└── README.md
```

## Learning goals

This project was completed as part of a Full-Stack Web Development course. It provided practice with:

- JavaScript variables and constants
- `Math.random()` and `Math.floor()`
- DOM selection and manipulation
- Updating image attributes and text content
- Conditional statements
- Linking HTML, CSS and JavaScript files

## Notes

This is an educational beginner project. The original game mechanic is intentionally kept simple: a new round is generated whenever the page is refreshed.
