import scenes from '../assets/background-scenes.png';

const stories = [
 { key:'service', number:'01', title:'诚意卖的服务场景', takeaway:'诚意卖明确了售房条件和周期，业主仍需要了解进展、判断下一步。', detail:'开通后，业主还会关心：有没有新客户？看完房怎么说？接下来怎么办？', support:'安住持续跟着销售变化，让业主知道进展，有依据作下一步判断。', imageLabel:'业主坐在家中查看手机上的售房进展，身旁是房屋模型和日历。' },
 { key:'people', number:'02', title:'买卖双方与经纪人', takeaway:'业主在判断怎样卖，买家在判断这套房是否适合自己。', detail:'买卖双方的选择相互影响：客户的意向与顾虑影响业主判断，业主的安排也影响客户的下一步。', support:'先看具体卡在哪里，再由维护人与业主商量安排、客源经纪人核实客户意向，提供专业判断与协调。', imageLabel:'业主、买家和经纪人围坐在房屋模型旁交流，安住协助整理进展。' },
 { key:'memory', number:'03', title:'交易决策与上下文', takeaway:'记住已表达的需求和顾虑，后续服务接着已有进展往下走。', detail:'客户已经表达过的需求和顾虑不反复询问，后续沟通带着这些背景接着谈。', support:'把业主的选择、客户反馈和经纪人核实的情况留在上下文里，后续服务据此继续推进。', imageLabel:'打开的笔记本保存房源、客户、邀请和约定，安住带着既有记录翻开下一页。' },
 { key:'scope', number:'04', title:'人群与交易阶段', takeaway:'不同阶段需要不同帮助，服务要有人接得住。', detail:'积累客户时争取看房机会，看过房后核实顾虑，进入商谈再处理分歧。', support:'安住持续跟进销售进展，需要核实、判断和协调时由经纪人承接专业服务。', imageLabel:'住宅群中部分房源被柔和地照亮，业主在不同售房阶段获得服务。' },
];

export function BackgroundThinking() {
 return <section className="thinking wrap" id="thinking" aria-labelledby="thinking-title">
  <header className="thinking-heading reveal">
   <p className="eyebrow">背景与设计思考</p>
   <h2 id="thinking-title">先看业主与买家的处境，<em>再谈服务如何介入。</em></h2>
  </header>
  <div className="thinking-grid">
   {stories.map(story=><figure className="thinking-figure reveal" key={story.key}>
    <div className={'thinking-illustration thinking-illustration--'+story.key} style={{backgroundImage:'url('+scenes+')'}} role="img" aria-label={story.imageLabel}/>
    <figcaption className="thinking-caption">
     <div className="thinking-story-heading"><span>{story.number}</span><h3>{story.title}</h3></div>
     <p className="thinking-takeaway">{story.takeaway.split('，').map((clause,index,clauses)=><span key={index}>{clause}{index<clauses.length-1?'，':''}</span>)}</p>
     <p className="thinking-detail">{story.detail}</p>
     <div className="thinking-support"><p>{story.support}</p></div>
    </figcaption>
   </figure>)}
  </div>
  <p className="thinking-transition reveal">下面看原型，安住怎样把客户进展、业主的选择和经纪人的服务接起来。<a href="#daily" aria-label="查看原型演示">↓</a></p>
 </section>;
}
