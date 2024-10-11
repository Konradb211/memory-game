import { create } from "zustand"
import { devtools } from "zustand/middleware"

interface Card {
	id: number
	src: string
	alt: string
}

interface GameRecord {
	attempts: number
	duration: number
	pairs: number
	date: string
}

interface GameState {
	shuffledCards: Card[]
	flippedCards: number[]
	matchedCards: number[]
	attempts: number
	timer: number
	timerInterval: number | null
	gameHistory: GameRecord[]
	pairs: number
	startGame: (cards: Card[]) => void
	flipCard: (index: number, cardId: number) => void
	resetFlippedCards: () => void
	incrementAttempts: () => void
	incrementPairs: () => void
	startTimer: () => void
	stopTimer: () => void
	resetTimer: () => void
	saveGameToHistory: () => void
	loadGameHistory: () => void
}

export const useGameStore = create<GameState>()(
	devtools(set => ({
		shuffledCards: [],
		flippedCards: [],
		matchedCards: [],
		attempts: 0,
		timer: 0,
		pairs: 0,
		timerInterval: null,
		gameHistory: [],
		startGame: (cards: Card[]) => {
			set(state => {
				if (state.timerInterval) {
					clearInterval(state.timerInterval)
				}
				return {
					shuffledCards: cards,
					flippedCards: [],
					matchedCards: [],
					attempts: 0,
					timer: 0,
					pairs: 0,
				}
			})
		},
		flipCard: (index: number) =>
			set(state => ({
				flippedCards: [...state.flippedCards, index],
			})),
		resetFlippedCards: () =>
			set(() => ({
				flippedCards: [],
			})),
		incrementAttempts: () =>
			set(state => ({
				attempts: state.attempts + 1,
			})),
		incrementPairs: () =>
			set(state => ({
				pairs: state.pairs + 1,
			})),

		startTimer: () =>
			set(state => {
				if (!state.timerInterval) {
					const timerInterval = setInterval(() => {
						set(state => ({
							timer: state.timer + 1,
						}))
					}, 1000)
					return { timerInterval }
				}
				return {}
			}),
		stopTimer: () =>
			set(state => {
				if (state.timerInterval) {
					clearInterval(state.timerInterval)
				}
				return {
					timerInterval: null,
				}
			}),
		resetTimer: () =>
			set(() => ({
				timer: 0,
			})),
		saveGameToHistory: () => {
			set(state => {
				const newRecord: GameRecord = {
					pairs: state.pairs,
					attempts: state.attempts,
					duration: state.timer,
					date: new Date().toISOString(),
				}
				const updatedHistory = [newRecord, ...state.gameHistory]
				localStorage.setItem("gameHistory", JSON.stringify(updatedHistory))
				return { gameHistory: updatedHistory }
			})
		},
		loadGameHistory: () => {
			set(() => {
				const storedHistory = localStorage.getItem("gameHistory")
				if (storedHistory) {
					return { gameHistory: JSON.parse(storedHistory) }
				}
				return {}
			})
		},
	}))
)
