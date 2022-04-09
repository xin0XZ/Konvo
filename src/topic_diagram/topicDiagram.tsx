import './css/topicDiagram.css';
import {Topic} from './types/Topic';
import depthToColor from './colorHandler';
import {addTopic} from './addTopic';
import { SetStateAction, useState} from "react";

const TopicDiagram = () => {
    const [topics, setTopics] = useState<Topic[]>([]);

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
                <input type='text' onChange={(change) => {

                    let newTopicsArray = [...topics];

                    newTopicsArray[index] = {
                        ...newTopicsArray[index],
                        text: change.target.value
                    }

                    setTopics(newTopicsArray)

                }} value={topic.text} className='text'>

                </input>
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