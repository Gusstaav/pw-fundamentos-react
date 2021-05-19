import React, {Component} from 'react'
import './App.css'

import IndiretaPai from './components/basico/IndiretaPai'
import Estado from './components/basico/Estado'
import FamiliaClone from '/.components/basico/FamiliaClone'
import MembroFamiliaClone from './comnents/basico/MembroFamiliaClone'
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

        <Card titulo="Comunicação indereta (de filho para pai)" cor="#f7673b">
          <IndiretaPai></IndiretaPai>
        </Card>

      <Cards titulo="Estado" cor="#ffb400">
        <Estado />
      </Cards>

        <Card titulo="Componentes Aninhados (CloneElement)" cor="#82212e">
          <FamiliaClone sobrenome="Simpson">
            <MembroFamiliaClone nome="Homer Jay" />
            <MembroFamiliaClone nome="Marjorie" />
            <MembroFamiliaClone nome="Barthlomew Jojo" />
            <MembroFamiliaClone nome="Lisa Marie" />
            <MembroFamiliaClone nome="Margareth" />  
        </FamiliaClone>
        </Card>
    

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