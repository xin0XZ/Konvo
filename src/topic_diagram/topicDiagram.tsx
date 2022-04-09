import './css/topicDiagram.css';
import {Topic} from './types/Topic';
import depthToColor from './colorHandler';
import {addTopic} from './addTopic';
import { SetStateAction, useState} from "react";

const TopicDiagram = () => {
    const [topics, setTopics] = useState([] as Topic[]);
    return (
        <div className='all-topics'>
            <div onClick={() => {
                setTopics([addTopic('example', 1), ...topics]);
            }}>
                add a topic
            </div>
            {topicDivs(topics, setTopics)}
        </div>
    )
}

// recursively convert topics to divs
const topicDivs = (topics: Topic[] | undefined, setTopics: (value: (((prevState: Topic[]) => Topic[]) | Topic[])) => void) => {
    if (topics === undefined) return;
    return topics.map((topic, index) => {
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
                {topicDivs(topic.children, setTopics)}
            </div>
        )
    });
}


export default TopicDiagram;