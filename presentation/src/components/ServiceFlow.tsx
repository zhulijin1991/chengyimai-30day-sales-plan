import diagram from '../diagrams/service-flow.svg?raw';

export function ServiceFlow(){
 return <figure className="service-flow"><figcaption>从服务生效，到协作执行</figcaption><div dangerouslySetInnerHTML={{__html:diagram}}/></figure>;
}
