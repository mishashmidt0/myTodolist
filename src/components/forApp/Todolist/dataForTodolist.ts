import { PropsStyleForData } from "../../../types/PropsStyle";
import { v1 } from "uuid";


export const task1: PropsStyleForData = [
	{ id: v1(), title: 'HTML&CSS', type: 'checkbox', isDone: true },
	{ id: v1(), title: 'TypeScrypt', type: 'checkbox', isDone: false },
	{ id: v1(), title: 'JavaScrypt', type: 'checkbox', isDone: true },
	{ id: v1(), title: 'React', type: 'checkbox', isDone: false },
	{ id: v1(), title: 'Redux', type: 'checkbox', isDone: true },
]
// export const task2: PropsStyleForData = {
// 	heading: "My skills in programm framwork ",
// 	task: [
// 		{ id: 1, title: 'React', type: 'checkbox', isDone: false },
// 		{ id: 2, title: 'Angular', type: 'checkbox', isDone: false },
// 		{ id: 3, title: 'Vue', type: 'checkbox', isDone: false },
//
// 	],
// }
// export const task3: PropsStyleForData = {
// 	heading: "My skills in sports ",
// 	task: [
// 		{ id: 1, title: 'Footbal', type: 'checkbox', isDone: true },
// 		{ id: 2, title: 'Chess', type: 'checkbox', isDone: true },
// 		{ id: 3, title: 'Swimming', type: 'checkbox', isDone: false },
// 	],
//
// }
