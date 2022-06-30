// import { createRoot } from 'react-dom/client'

const page = (
    <div>
        <img src="./react-logo.png" width="40px"/>
        <h1>Fun Facts About React</h1>
        <ol>
            <li>
                was first releeased in 2013
            </li>
            <li>
                was originally created by Jordan Walke
            </li>
            <li>
                has weel over 100K stars on Github
            </li>
            <li>
                is maintained by Facebook
            </li>
            <li>
                Powers thousands of enterprise apps, including mobile apps
            </li>
        </ol>
    </div>
 )
//  const container = document.getElementById("root");
//  const root = createRoot(container); 
//  root.render(page)
 ReactDOM.render(
    page,
    document.getElementById("root")
 )