import { useEffect, useState } from 'react';
import { getTopics } from './utils/api';




const TopicSelector =()=>{
    const[topics, setTopics] = useState([])

// useEffect(()=>{
//     getTopics().then((topics)=>{
//         setTopics(topics)
//     })
// },[])


//in return map through topics and put a link to each one /articles/?topic=${topicName}
    return (
        <div className='nav'>
            <h2> Topics </h2>
        </div>
    );
}


export default TopicSelector;