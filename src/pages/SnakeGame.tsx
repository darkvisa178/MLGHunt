
import React, { useEffect, useState, useRef } from "react";

const DuckHuntGame = () => {
    const canvasRef = useRef(null);
    const [direction, setDirection] = useState("RIGHT");
    const [DuckHunt, setDuckHunt] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [gameOver, setGameOver] = useState(false);

    const gridSize = 20;

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case "ArrowUp":
                    if (direction !== "DOWN") setDirection("UP");
                    break;
                case "ArrowDown":
                    if (direction !== "UP") setDirection("DOWN");
                    break;
                case "ArrowLeft":
                    if (direction !== "RIGHT") setDirection("LEFT");
                    break;
                case "ArrowRight":
                    if (direction !== "LEFT") setDirection("RIGHT");
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [direction]);

    useEffect(() => {
        const updateGame = () => {
            if (gameOver) return;

            setDuckHunt((prev) => {
                const newDuckHunt = [...prev];
                const head = { ...newDuckHunt[0] };

                switch (direction) {
                    case "UP":
                        head.y -= 1;
                        break;
                    case "DOWN":
                        head.y += 1;
                        break;
                    case "LEFT":
                        head.x -= 1;
                        break;
                    case "RIGHT":
                        head.x += 1;
                        break;
                    default:
                        break;
                }

                newDuckHunt.unshift(head);

                if (head.x === food.x && head.y === food.y) {
                    setFood({ x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) });
                } else {
                    newDuckHunt.pop();
                }

                if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize ||
                    newDuckHunt.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
                    setGameOver(true);
                }

                return newDuckHunt;
            });
        };

        const gameInterval = setInterval(updateGame, 150);

        return () => clearInterval(gameInterval);
    }, [direction, gameOver]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "green";
        DuckHunt.forEach((segment) => {
            ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20);
        });

        ctx.fillStyle = "red";
        ctx.fillRect(food.x * 20, food.y * 20, 20, 20);
    }, [DuckHunt, food]);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>DuckHunt Game</h1>
            {gameOver ? <h2>Game Over</h2> : <p>Текущие направление: {direction}</p>}
            <canvas ref={canvasRef} width={400} height={400} style={{ border: "2px solid white", marginTop: "20px" }} />

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
                <button onClick={() => setDirection("UP")} style={buttonStyle}>⬆️</button>
                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                    <button onClick={() => setDirection("LEFT")} style={buttonStyle}>⬅️</button>
                    <button onClick={() => setDirection("RIGHT")} style={buttonStyle}>➡️</button>
                </div>
                <button onClick={() => setDirection("DOWN")} style={{ ...buttonStyle, marginTop: "10px" }}>⬇️</button>
            </div>
        </div>
    );
};

const buttonStyle = {
    fontSize: "24px",
    padding: "15px",
    margin: "5px",
    borderRadius: "10px",
    backgroundColor: "#6200ea",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    width: "60px",
    height: "60px"
};

export default DuckHuntGame;
