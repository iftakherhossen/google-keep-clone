import React, { useRef, useState } from 'react';
import styled from "styled-components";
import Modal from './Modal';
import Note from './Note';


const NoteInput = styled.form`
	box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15);
	width: 600px;
	border-radius: 8px;
	margin: 20px auto;
	padding: 20px;
`

const Title = styled.input`
	border: none;
	color: #e8eaed;
	background-color: #202124;
	display: block;
	width: 100%;
	font-size: 18px;
	margin: 10px 0;
	// display: none;
	outline: none;
	&::placeholder {
		color: #aaa;
		opacity: 1;
	}
`;

const TextArea = styled.textarea`
	border: none;
	color: #e8eaed;
	background-color: #202124;
	display: block;
	width: 100%;
	font-family: 'Noto Sans', sans-serif;
	font-size: 13px;
	font-weight: bold;
	outline: none;
	/* height: 100%; */
	resize: none;
	overflow: hidden;
	min-height: 10px;
	&::placeholder {
		color: #aaa;
		opacity: 1;
	}
`;

const NoteContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`

const Main = (props) =>{
	const [isModal, setIsModal] = useState(false)
	const textAreaRef = useRef(null);
	// const titleRef = useRef(null);

	const autoGrow = (elem) => {
		elem.current.style.height = "5px";
    		elem.current.style.height = (10 + elem.current.scrollHeight)+"px";
	}

	const openModal = ()=>{
		setIsModal(true); 
	}

	return(
		<main style={{ paddingTop: '1.2rem' }}>
			<NoteInput action="">
				{
					props.showInput ? <Title 
						type="text"
						placeholder="Title" 
						value={props.titleValue}
						onFocus={()=>props.onTitleFocus(true)}
						onBlur={()=>props.onTitleFocus(false)}
						onChange={(e)=>props.onTitleChange(e.target.value)}
					/> : ''
				}
				<TextArea 
					name="" 
					id="" 
					cols="30" 
					rows="1" 
					placeholder="Take a note..." 
					value={props.textValue} 
					onFocus={()=> {
						props.onShowInput(true);
						props.onTextFocus(true)
						textAreaRef.current.focus();
					}} 
					onInput={()=>autoGrow(textAreaRef)} 
					ref={textAreaRef} 	
					onBlur={()=>props.onTextFocus(false)}
					onChange={(e)=>props.onTextChange(e.target.value)}
				/>
			</NoteInput>

			<NoteContainer>
				{props.notes.map((note, index)=><Note note={note} key={index} />)}
			</NoteContainer>

			{	
				isModal ? <Modal /> : ''
			}
		</main>
	)
}

export default Main