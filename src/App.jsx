import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import { CORE_CONCEPTS, EXAMPLES } from './data-with-examples';
import TabButton from './components/TabButton';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handelSelect(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
}
  let tabContent = <p>'Please select a topic'</p>;
  if(selectedTopic) {
    tabContent =  
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
        <section id="examples">
          <h2>
            Examples
          </h2>
          <menu>
            <TabButton label='Components' isSelected={selectedTopic === 'components'} onSelect={() => handelSelect('components')}/>
            <TabButton label='JSX' isSelected={selectedTopic === 'jsx'} onSelect={() => handelSelect('jsx')} />
            <TabButton label='Props' isSelected={selectedTopic === 'props'} onSelect={() => handelSelect('props')} />
            <TabButton label='State' isSelected={selectedTopic === 'state'} onSelect={() => handelSelect('state')} />
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
