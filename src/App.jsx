import './App.css'
import Button from './Button.jsx'
import Profile from './Profile'

const App = () => {
    return(
        <>
        <main>
            <div className='container-main'>
                <article>
                    <Profile 
                        img='../assets/images/avatar-jessica.jpeg' 
                        name='Jessica Randall' location='London, United Kingdom' 
                        quote='&#34; Front-end developer and avid reader &#34;'/>
                    <ul>
                        <Button text='Github'/>
                        <Button text='Frontend Mentor'/>
                        <Button text='Linkedin'/>
                        <Button text='Twitter' />
                        <Button text='Instagram' />
                    </ul>
                </article>
            </div>
        </main>
        </>
    )
}


export default App