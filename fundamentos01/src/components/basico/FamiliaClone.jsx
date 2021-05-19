import React, {cloneElement} from 'react'

export default props => {
    return(
        <div>
            {/* Para um unico elementos filho*/}
            {/* cloneElement(props.children, {...props})}  */}

            {/* Para varios elementos filhos*/}
            {props.children.map((child) =>{
                return cloneElement(child, {...props})
            })}
        </div>
    )
}