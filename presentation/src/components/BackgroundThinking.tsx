import scenes from '../assets/background-scenes.png';

const stories = [
 { key:'service', number:'01', title:'诚意卖的服务场景', takeaway:'诚意卖明确了售房安排，开通后仍有持续推进的需要。', detail:'这一轮里，业主还要判断客户机会、理解看房反馈，遇到卡点时决定是否调整安排。每一步都会产生需要回应的新问题。', support:'诚意卖有具体房源、明确周期和已表达的售房意愿，这使它适合作为持续服务的起点。', imageLabel:'业主坐在家中查看手机上的售房进展，身旁是房屋模型和日历。' },
 { key:'memory', number:'02', title:'交易决策与上下文', takeaway:'售房决定前后相连，后续服务需要理解已经发生的事。', detail:'业主已经作过什么选择、客户了解过这套房的哪些情况、经纪人核实了什么顾虑，都会影响下一次沟通。后续服务若不了解这些背景，就容易重复询问、忽略已有进展。', support:'Agent需要持续积累并使用上下文，把新的信息用于更新后续服务判断。', imageLabel:'打开的笔记本保存房源、客户、邀请和约定，安住带着既有记录翻开下一页。' },
 { key:'people', number:'03', title:'买卖双方与经纪人', takeaway:'业主在判断怎样卖，买家在判断这套房是否适合自己。', detail:'同一次邀约或看房，连接着双方不同的选择。客户意向是否真实、信息是否准确、分歧在哪里，需要经纪人在实际沟通中核实、判断和协调。', support:'房客两侧应服务于同一段交易关系。先看消费者遇到什么问题，再确定谁在何时提供专业帮助，以及反馈怎样支持下一步选择。', imageLabel:'业主、买家和经纪人围坐在房屋模型旁交流，安住协助整理进展。' },
 { key:'scope', number:'04', title:'人群与交易阶段', takeaway:'同样处在一轮售房中，不同人需要的帮助并不相同。', detail:'有的房源仍在积累客户，有的已有看房反馈或进入商谈；业主的参与意愿、客户需求的明确程度，以及服务者能否承接，也会影响服务的内容与深度。', support:'首期因此选择新开诚意卖、使用安住且关联试点房源的业主，便于观察完整一轮，也有持续互动和经纪人承接。', imageLabel:'住宅群中仅少量试点房源被柔和地照亮，业主在合适的阶段获得服务。' },
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
