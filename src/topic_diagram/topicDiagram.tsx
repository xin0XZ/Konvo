import './css/topicDiagram.css';
import {Topic} from './types/Topic';
import depthToColor from './colorHandler';
import {createNewTopic} from './topicActions';
import {SetStateAction, useState} from "react";

const TopicDiagram = () => {
    const [topics, setTopics] = useState<Topic[]>([]);

    return (
        <div className='all-topics'>
            <div onClick={(event) => {
                setTopics([createNewTopic('example', 1), ...topics]);
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
            <div key={`${topic.timestamp.getMilliseconds()}`} className='topic' onClick={(event) => {

                if (event.target === event.currentTarget) {
                    let newTopicsArray = [...topics];

                    let newChildrenArray: Topic[] = [];
                    if (topic.children) newChildrenArray = [...topic.children];

                    newChildrenArray =newChildrenArray.concat([createNewTopic('example', topic.depth+1)])
                    newTopicsArray[index] = {
                        ...newTopicsArray[index],
                        children : newChildrenArray
                    }
                    setTopics(newTopicsArray)
                    console.log(newTopicsArray)
                }
            }}>
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
                <div onClick={(event) => {
                    setTopics(topics.filter((filterTopic, filterIndex) => filterIndex !== index));
                }}> x
                </div>
            </div>
        )
    });
}

export default TopicDiagram;