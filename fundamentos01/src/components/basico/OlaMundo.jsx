import React from 'react'

function OlaMundo() {
	
	const informacao = 'Primeiro componente JSX'
	
	return(
		<div>
			<h2> Componente OlaMundo</h2>
			<p>{ informacao } </p>
		</div>
	)
}

export default OlaMundo