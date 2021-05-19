import React from 'react';

import FamiliaMembro from './conponents/basico/MembroFamilia'

export default props => {
    return(
        <div>
            <FamiliaMembro nome="Home Jay" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Marjorie" sobrenome="Bouvier" />
            <FamiliaMembro nome="Bartholomew" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Lisa Marie" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Margareth" sobrenome={...props} />
        </div>
    )
}