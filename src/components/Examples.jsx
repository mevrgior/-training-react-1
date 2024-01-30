import { useState } from 'react';
import { EXAMPLES } from '../data-with-examples';
import TabButton from './TabButton';
import Section from './Section';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState(null);

    function handelSelect(selectedButton){
      setSelectedTopic(selectedButton)
      // console.log(selectedTopic)
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

    return(
        <Section id="examples" title="Exaples">
        <menu>
          <TabButton label='Components' isSelected={selectedTopic === 'components'} onSelect={() => handelSelect('components')}/>
          <TabButton label='JSX' isSelected={selectedTopic === 'jsx'} onClick={() => handelSelect('jsx')} />
          <TabButton label='Props' isSelected={selectedTopic === 'props'} onClick={() => handelSelect('props')} />
          <TabButton label='State' isSelected={selectedTopic === 'state'} onClick={() => handelSelect('state')} />
        </menu>
        {tabContent}
      </Section>
    );
}