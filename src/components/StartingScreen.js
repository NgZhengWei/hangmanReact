import styles from './StartingScreen.module.css';

const StartingScreen = (props) => {
  const topics = Object.keys(props.wordDict);

  const topicHandler = (e) => {
    props.setTopic(e.target.attributes.topic.value);
  };

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className='container'>
      <h1 className={styles.title}>Select a Topic</h1>
      <div className={styles.topics}>
        {topics.map((topic) => {
          return (
            <button
              className={styles.button}
              onClick={topicHandler}
              topic={topic}
              key={Math.random().toString()}
            >
              {capitalize(topic)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StartingScreen;
