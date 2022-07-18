import React from 'react'
import styled from "styled-components";

const ModalCon = styled.div`
height:100%;
width:100%;
position:absolute;
top:0;
overflow:hidden;
display:flex;
align-items:center;
justify-content:center;
background-color:rgba(60, 57, 57, 0.8);
`;

const ModalDiv = styled.div`
background-color:#ffffff;
border-radius:6px;
padding:40px;
width:300px;`

const Modal = ()=>{
	return(
		<ModalCon>
			<ModalDiv>
				<p>Hello Modal</p>
			</ModalDiv>
		</ModalCon>
	)
}

export default Modal;