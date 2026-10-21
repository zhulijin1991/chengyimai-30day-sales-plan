import diagram from '../diagrams/service-flow.svg?raw';

export function ServiceFlow(){
 return <figure className="service-flow" dangerouslySetInnerHTML={{__html:diagram}}/>;
}
