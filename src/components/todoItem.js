import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component{
	 constructor(props){
	 	super(props); 
	 }

	 removeTodo(id){
	 	this.props.removeTodo(id);
	 }

	 render(){
	 	return(
	 		<div className = "todoWrapper">
	 			<button className="removeTodo btn" onClick={(e)=> this.removeTodo(this.props.id)}>Remove</button> 
	 			<p> {this.props.todo.text} </p>
	 		</div>
	 	)
	 }
}