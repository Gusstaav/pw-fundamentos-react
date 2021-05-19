import React, {Component} from 'react'
import './App.css'
import Aninhados from '.components/basico/Familia'
import Card from './components/layout/Card'
import Propriedades from './components/basico/Propriedades'
import OlaMundo from './components/basico/OlaMundo'

class App extends Component{
	render(){  
		return(
			  <div className="App">
          <h1>Exemplo React</h1>

       <div className="Cards">

         <Card titulo="Componentes Aninhados" cor="#d1495b">
           <Aninhados sobrenome="Simpson" />
         </Card>

       <Card titulo="Propriedades" cor="#91cb3e">
        <Propriedades nome="Homer" sobrenome="Jay Simpsom" idade={38} />
		   </Card>

       <Card titulo="Ola Mundo!" cor="#226ce0">
		    	<OlaMundo />
        </Card>
			
      </div>
		</div>
		)
	}
}

export default App;