import React, { useEffect, useState } from 'react'
import { BiCheck, BiTrashAlt } from "react-icons/bi";

function ToDoApp() {
	const API = 'http://localhost:3000/api/commints'
	const [ToDos, setToDos] = useState([])
	const [newToDo, setnewToDo] = useState('')
	useEffect(() => {
		FetchToDo()
	}, [])
	const FetchToDo = async () => {

		const response = await fetch(API)
		const data = await response.json();
		setToDos(data)
		console.log(ToDos)
	}
	const HandelSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(API, {
			method: 'POST',
			body: JSON.stringify({ newCommint: newToDo }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const data = await response.json();
		setToDos(data);
		setnewToDo('');
	}

	const DeleteToDo = async (val) => {
		console.log('clered one ', val);
		const response = await fetch(API, {
			method: 'PATCH',
			body: JSON.stringify({ value: val }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const data = await response.json();
		console.log(data)
		setToDos(data);
		setnewToDo('');
	}
	const ClearAll = async () => {
		console.log('clered');
		const response = await fetch(API, {
			method: 'DELETE',
			body: '',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const data = await response.json();
		console.log(data)
		setToDos(data);
		setnewToDo('');
	}

	if (!ToDos) return (<h1>loadding ...</h1>)
	return (
		<div>
			<div className="wrapper">
				<header> NEXT  Todo App</header>
				<form onSubmit={(e) => HandelSubmit(e)} className='margin_top'>
					<div className="inputField">
						<input type="text"
							placeholder="Add your new todo"
							value={newToDo}
							onChange={(e) => setnewToDo(e.target.value)}
						/>
						<button><BiCheck /></button>
					</div>
				</form>

				<ul className="todoList">
					{
						ToDos.length > 0 ? (ToDos.map((li) => {
							return (<li key={li.id} className='felx_spascer'>
								<div>
									{li.text}
								</div>
								<div className='inputField'>
									<button
										onClick={() => DeleteToDo(li.id)}
									><BiTrashAlt /></button>
								</div>
							</li>)
						})) : null
					}
				</ul>
				<div className="footer">
					<span>You have <span className="pendingTasks"></span> pending tasks</span>
					<button
						onClick={ClearAll}
					>Clear All <BiTrashAlt /> </button>
				</div>
			</div>
		</div >
	)
}

export default ToDoApp
