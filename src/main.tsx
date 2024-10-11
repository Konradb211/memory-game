import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.tsx"
import "./index.scss"
import GameRules from "./components/GameRules/GameRules.tsx"
import GameDashboard from "./components/GameDashboard/GameDashboard.tsx"
import Game from "./components/Game/Game.tsx"
import GameHistory from "./components/GameHistory/GameHistory.tsx"

const router = createBrowserRouter([
	{
		element: <App />,
		path: "/",
	},
	{
		element: <GameRules />,
		path: "game-rules",
	},
	{
		element: <GameDashboard />,
		path: "game-dashboard",
	},
	{
		element: <Game />,
		path: "game/level/:levelId",
	},
	{
		element: <GameHistory />,
		path: "game-dashboard/game-history",
	},
])

createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
)
