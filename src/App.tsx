import './css/App.css';

interface Topic {
  depth: number;
  text: string;
  timestamp: Date;
  children?: Record<string, Topic>
}

const topics: Record<string, Topic> = {
  'first': {
    depth: 1,
    text: 'First topic',
    timestamp: new Date(),
    children: {
      'second': {
        depth: 2,
        text: 'Second topic',
        timestamp: new Date(),
        children: {
          'third': {
            depth: 2,
            text: 'Third topic',
            timestamp: new Date(),
          },
        }
      },
      'fourth': {
        depth: 2,
        text: 'Fourth topic',
        timestamp: new Date(),
      },
    }
  },
  'fift': {
    depth: 1,
    text: 'Fift topic',
    timestamp: new Date(),
  },
  'sixt': {
    depth: 1,
    text: 'Sixt topic',
    timestamp: new Date(),
  },

};

enum Colors {
  Red,
  Blue,
  Green
}

const depthToColor: Record<number, Colors> = {
  1: Colors.Red,
  2: Colors.Green,
  3: Colors.Blue,
}

const App = () => {
  const topicKeys = Object.keys(topics);

  const topicDivs = topicKeys.map((topicKey) => {
    return (
      <div className='topic'>
        <div>
          {topics[topicKey].text}
        </div>
        <div>
          {topics[topicKey].timestamp}
        </div>
        <div>
          {depthToColor[topics[topicKey].depth]}
        </div>
      </div>
    )
  });
  return (
    <div className='all-topics'>
      {topicDivs}
    </div>
  )
}

export default App;
