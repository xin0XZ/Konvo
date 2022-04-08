import './css/topicDiagram.css';
import {Topic} from './types/Topic';
import depthToColor from './colorHandler';
import {addTopic} from './addTopic';
import { useState } from "react";



const TopicDiagram = () => {
    const [topics, setTopics] = useState([] as Topic[]);
    return (
        <div className='all-topics'>
            <div onClick={() => {
                topics.push(addTopic('example', 1));
                console.log(topics)
            }}>
                add a topic
            </div>
            {topicDivs(topics)}
        </div>
    )
}
// recursively convert topics to divs
const topicDivs = (topics: Topic[] | undefined) => {
    if (topics === undefined) return;
    return topics.map((topic) => {
        return (
            <div className='topic'>
                <div className='text'>
                    {topic.text}
                </div>
                <div className='time'>
                    {topic.timestamp.toDateString()}
                </div>
                <div>
                    {depthToColor[topic.depth]}
                </div>
                {topicDivs(topic.children)}
            </div>
        )
    });
}


export default TopicDiagram;