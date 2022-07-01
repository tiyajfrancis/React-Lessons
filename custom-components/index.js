// import React from "react"
// import ReactDOM from "react-dom"

function Page()
{
    return(
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px"/>
                </nav>
            </header>

            <h1>Reasons i love React </h1>
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

            <footer> <small> © 2022 Jude development. All rights reserved.</small>  </footer>
        </div>
        
    )
}


ReactDOM.render(<Page />, document.getElementById("root"))