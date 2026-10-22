import scenes from '../assets/background-scenes.png';

const stories = [
 { key:'service', number:'01', title:'场景切入', takeaway:'从周期明确的诚意卖切入，补上开通后的持续跟进。', detail:'诚意卖已明确房源、价格和服务周期。开通后，业主仍要知道有没有新客户、邀请有无后续，以及下一步需要作出什么选择。', support:'安住持续核对并主动告知进展，把需要业主确认、经纪人承接的事项带到对话中。', imageLabel:'业主坐在家中查看手机上的售房进展，身旁是房屋模型和日历。' },
 { key:'memory', number:'02', title:'上下文的积累与使用', takeaway:'依据业主选择和经纪人反馈，安排下一步服务。', detail:'同一套房持续保留客户积累、已发邀请、业主确认结果和经纪人回音。', support:'同房同客的短信跨轮次只发一次；维护人反馈复盘方式和时间后，接着告知业主安排。', imageLabel:'打开的笔记本保存房源、客户、邀请和约定，安住带着既有记录翻开下一页。' },
 { key:'people', number:'03', title:'房客协同与经纪人介入', takeaway:'从房客双方需求出发，经纪人承接看房与复盘。', detail:'业主希望获得实际看房与反馈，买家需要判断房子是否适合自己。短信提供房源和联系入口，经纪人承接看房；维护人承接阶段复盘邀约。', support:'带看后的需求、意向和卡点，由客源经纪人核实并反馈，随盘客阶段接入。', imageLabel:'业主、买家和经纪人围坐在房屋模型旁交流，安住协助整理进展。' },
 { key:'scope', number:'04', title:'使用边界与服务阶段', takeaway:'首期聚焦新开服务的试点业主，按本轮进展提供帮助。', detail:'新开诚意卖、使用安住、关联试点房源，三项同时满足才触发：便于完整跟踪一轮，也有持续互动和经纪人承接。', support:'有新匹配客户，准备邀请；阶段检查进度落后，建议复盘；成交或服务到期，结束本轮推进。', imageLabel:'住宅群中仅少量试点房源被柔和地照亮，业主在合适的阶段获得服务。' },
];

export function BackgroundThinking() {
 return <section className="thinking wrap" id="thinking" aria-labelledby="thinking-title">
  <header className="thinking-heading reveal">
   <p className="eyebrow">背景与设计思考</p>
   <h2 id="thinking-title">围绕一轮售房，<em>把服务持续接起来。</em></h2>
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
  <p className="thinking-transition reveal">下面看，同一套房的一轮售房过程怎样接着往前走。<a href="#daily" aria-label="查看原型演示">↓</a></p>
 </section>;
}
