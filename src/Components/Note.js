import React from 'react'
import styled from "styled-components";

const NoteDiv = styled.div`
	/* width: 30%; */
	padding: 0px 15px;
	border: 1px solid #e0e0e0;
	border-radius: 8px;
	text-align: left;
	font-size: 18px;
	margin: 5px;
	min-height: 100%;
	min-width: 300px;
	word-wrap: break-word;
	white-space: pre-line; 
`;

const H3 = styled.h3`
	font-size:20px;
	font-weight:bold;
`;


const Note = (props) =>{
	return(
		<NoteDiv>
			<H3>{props.note.title}</H3>
			<p>{props.note.text}</p>
		</NoteDiv>
	)
}

export default Note;