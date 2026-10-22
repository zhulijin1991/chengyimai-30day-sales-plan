import scenes from '../assets/background-scenes.png';

const stories = [
 { key:'service', number:'01', title:'诚意卖的服务场景', takeaway:'诚意卖明确了售房条件，后续决策仍需要持续跟进与反馈。', detail:'价格和周期确定后，业主仍要知道客户有没有推进、看房后卡在哪里，才能判断下一步。一次沟通难以覆盖这一轮的变化。', support:'明确房源、周期和售房意愿，给持续服务提供了起点；安住持续记录进展、同步经纪人反馈，支持业主作选择。', imageLabel:'业主坐在家中查看手机上的售房进展，身旁是房屋模型和日历。' },
 { key:'people', number:'02', title:'买卖双方与经纪人', takeaway:'业主在判断怎样卖，买家在判断这套房是否适合自己。', detail:'客户愿不愿意看、看后有什么顾虑，影响业主对销售机会的判断；业主是否愿意进一步商谈，也影响客户的下一步选择。', support:'维护人与业主商量销售安排，客源经纪人核实客户意向；遇到具体顾虑与分歧时提供专业判断和协调。', imageLabel:'业主、买家和经纪人围坐在房屋模型旁交流，安住协助整理进展。' },
 { key:'memory', number:'03', title:'交易决策与上下文', takeaway:'售房决定前后相连，后续服务需要理解已经发生的事。', detail:'业主作过的选择、客户看房后的顾虑、经纪人已核实的情况，都应影响下一次沟通。不了解这些背景，就容易重复询问、忽略已有进展。', support:'安住保留并使用这些背景：已发过的邀约短信不重复发送，已核实的顾虑成为后续沟通与复盘的起点。', imageLabel:'打开的笔记本保存房源、客户、邀请和约定，安住带着既有记录翻开下一页。' },
 { key:'scope', number:'04', title:'人群与交易阶段', takeaway:'同样处在一轮售房中，不同人需要的帮助并不相同。', detail:'积累客户时争取看房机会，有看房反馈时核实顾虑，进入商谈时处理具体分歧。服务重点随真实进展改变。', support:'首期选择有身份、有业绩、能持续跟进的经纪人，只向其试点房源中新开诚意卖并使用安住的业主开放。', imageLabel:'住宅群中仅少量试点房源被柔和地照亮，业主在合适的阶段获得服务。' },
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
  <p className="thinking-transition reveal">基于这些背景与判断，下面看诚意卖一轮销售推进的具体方案。<a href="#daily" aria-label="查看原型演示">↓</a></p>
 </section>;
}
