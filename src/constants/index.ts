import witch from "../assets/images/1.svg"
import second from "../assets/images/2.jpg"
import third from "../assets/images/3.jpg"
import fourth from "../assets/images/4.jpg"
import Fifth from "../assets/images/5.svg"
import Sixth from "../assets/images/6.jpg"
import Seventh from "../assets/images/7.svg"
import Eighth from "../assets/images/8.svg"
import Ninth from "../assets/images/9.png"
import Tenth from "../assets/images/10.png"
import Eleventh from "../assets/images/11.jpg"
import Twelfth from "../assets/images/12.jpg"
import Thirteenth from "../assets/images/13.jpg"
import Fourteenth from "../assets/images/14.jpg"
import Fifteenth from "../assets/images/15.png"

interface DifficultyLevel {
	level: number
	cardNumbers: number
	pairNumber: number
}

interface Cards {
	src: string
	alt: string
	id: number
}

export const difficultyLevel: DifficultyLevel[] = [
	{ level: 1, cardNumbers: 12, pairNumber: 6 },
	{ level: 2, cardNumbers: 16, pairNumber: 8 },
	{ level: 3, cardNumbers: 20, pairNumber: 10 },
	{ level: 4, cardNumbers: 24, pairNumber: 12 },
	{ level: 5, cardNumbers: 30, pairNumber: 15 },
]

export const cards: Cards[] = [
	{
		src: witch,
		alt: "Witch",
		id: 1,
	},
	{
		src: second,
		alt: "A ghost who has a witch's hat and a pumpkin-shaped candy basket",
		id: 2,
	},
	{
		src: third,
		alt: "A shocked ghost on red background",
		id: 3,
	},
	{
		src: fourth,
		alt: "Dog dressed as a ghost who holds a pumpkin-shaped candy bucket in his mouth",
		id: 4,
	},
	{
		src: Fifth,
		alt: "Family of bats",
		id: 5,
	},
	{
		src: Sixth,
		alt: "Raven perched on a pumpkin",
		id: 6,
	},
	{
		src: Seventh,
		alt: "Smiling scarecrow",
		id: 7,
	},
	{
		src: Eighth,
		alt: "Angry ghost",
		id: 8,
	},
	{
		src: Ninth,
		alt: "Cute smiling ghost",
		id: 9,
	},
	{
		src: Tenth,
		alt: "Scary witch's house",
		id: 10,
	},
	{
		src: Eleventh,
		alt: "Witch on a broomstick in the background of an old abandoned house",
		id: 11,
	},
	{
		src: Twelfth,
		alt: "Lots of hats of witches, bats, skulls, ghosts and moons",
		id: 12,
	},
	{
		src: Thirteenth,
		alt: "Cute white pumpkins family",
		id: 13,
	},
	{
		src: Fourteenth,
		alt: "Three black cats climbing on pumpkins",
		id: 14,
	},
	{
		src: Fifteenth,
		alt: "A large orange pumpkin and a smaller white pumpkin",
		id: 15,
	},
]
