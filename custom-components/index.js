// import React from "react"
// import ReactDOM from "react-dom"

function CustomComp()
{
    return(
        <div>
            <h1>Reasons i love React  <img src="./react-logo.png" width="40px"/> </h1>
            <ol>
                <li>
                    It is a highly hireable skill
                </li>
                <li>
                    it is composable
                </li>
                <li>
                    it is declarative
                </li>
            </ol>
        </div>
        
    )
}


ReactDOM.render(<CustomComp />, document.getElementById("root"))