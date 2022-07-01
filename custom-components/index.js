// import React from "react"
// import ReactDOM from "react-dom"

// what is a react component?
// its a function that returns react elemnents. a react Element, even though
// it looks like html elements, under the hood, a react element is a js Object.

function Header()
{
    return(
        <header>
            <nav className="nav-items">
                <img src="./react-logo.png" width="40px"/>
                <ul className="hor-list">
                    <li>
                        Pricing
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function Footer()
{
    return(
        <footer> 
            <small> 
                © 2022 Jude development. All rights reserved.
            </small>  
        </footer>
    )
}

function MainContent()
{
    return(
        <div>
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
        </div>
    )
}

// page here is the parent component
// the components rendered by page become the children component
// relative to it.
function Page()
{
    return(
        <div>
            <Header />

            <MainContent />

            <Footer />
        </div>
        
    )
}


ReactDOM.render(<Page />, document.getElementById("root"))