export type PropsStyleForData = Array<PropsStyleForTask>

export type PropsStyleForTask = {
	id: string,
	title: string,
	type: string,
	isDone: boolean
}
export type PropsTypeForFilter = 'all' | 'active' | 'completed'

export type PropsStyleForTodolist = {
	heading: string,
	task: Array<PropsStyleForTask>,
	removeTask: ( el: string ) => void;
	changeFilter: ( value: PropsTypeForFilter ) => void;
	addTask: ( text: string ) => void;
}



