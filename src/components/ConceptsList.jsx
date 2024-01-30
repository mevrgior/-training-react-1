import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../data-with-examples';

export default function ConceptsList(){
    return (
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => {
            return <CoreConcept key={item.title} {...item} />
          })}
        </ul>
        </section>
    );
}