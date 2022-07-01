// import React from "react"
// import ReactDOM from "react-dom"

// what is a react component?
// its a function that returns react elemnents. a react Element, even though
// it looks like html elements, under the hood, a react element is a js Object.


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

            <footer> 
                <small> 
                    © 2022 Jude development. All rights reserved.
                </small>  
            </footer>
        </div>
        
    )
}


ReactDOM.render(<Page />, document.getElementById("root"))