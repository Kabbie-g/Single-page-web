
import { useState } from 'react';
import SectionList from './SectionList';

const Home = () => {
    const [name, setName] = useState('');
    const [thankyou, setThankyou] = useState('Good day:)')

    const handleClick = () => {
        setName('Gift');
        setThankyou('Sent me to say Thank you for considering him');
}

    const [sections, setSections] = useState([
            { title: 'Brief Description', body: 'My name is Gift Mcuku, I am based in Johannesburg gauteng and willing to relocate if opportunity presents itself, it excites me to apply for this position at SOVTECH ', id: 1 },
            { title: 'Interests', body: 'If my soul agrees with it, then that can easily become an interest to me.', id: 2 },
            { title: 'Why I would love to be part of SovTech', body: 'I look forward to welcoming and embracing the chance to apply my knowledge and skills acquired over the years of studying to becoming a productive member of SovTech as well as learning from the best in the industry. What better place would I do it other than with SovTech. ', id: 3 }    
    ]);
    return (
     <div className="home">
         <h2>Home Page</h2> 

         <hr />
         <br />
            
            <SectionList sections = {sections}/>

         <br />
         <hr />
         <br />
         <p>{ name }  { thankyou } </p>
         <button onClick = {handleClick}>Click Me</button>
     </div>   
    );
}
 
export default Home;