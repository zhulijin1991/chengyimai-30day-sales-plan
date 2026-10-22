import scenes from '../assets/background-scenes.png';

const stories = [
 { key:'service', number:'01', title:'业主需要的，是持续有人跟进', takeaway:'看得懂进展，也知道下一步。', detail:'开通服务后，业主仍需要知道有没有新客户、邀请有无后续、下一步怎么办；这些进展需要持续跟进。', supportLabel:'为什么从诚意卖切入', support:'诚意卖有明确的房源、周期和规则，安住据此持续报进展、跟下一步，并把需要专业服务的环节交给经纪人。', imageLabel:'业主坐在家中查看手机上的售房进展，身旁是房屋模型和日历。' },
 { key:'memory', number:'02', title:'同一轮售房，接着上次往前走', takeaway:'记住发生过什么，再推进下一步。', detail:'持续记录客户积累、已发邀请、业主的选择和经纪人回音，让这些上下文影响下一次服务。', supportLabel:'记住之后，行动有什么不同', support:'已发过邀请的客户不再重复发送；经纪人反馈约定时间，就接着告知业主。', imageLabel:'打开的笔记本保存房源、客户、邀请和约定，安住带着既有记录翻开下一页。' },
 { key:'people', number:'03', title:'三方围绕同一套房共同推进', takeaway:'让双方的选择与专业服务接得上。', detail:'业主要找到合适的买家，客户要判断房子是否适合自己；双方的选择和反馈，需要接成后续的看房与沟通。', supportLabel:'需要专业服务时，由谁接手', support:'短信提供房源和联系入口，经纪人承接看房；需要阶段复盘时，维护人带着背景联系业主，再反馈安排。', note:'带看后的需求、意向和卡点，由客源经纪人核实并反馈，随盘客阶段接入。', imageLabel:'业主、买家和经纪人围坐在房屋模型旁交流，安住协助整理进展。' },
 { key:'scope', number:'04', title:'服务明确的人，把握介入时机', takeaway:'按实际状态，提供对应的帮助。', detail:'新开诚意卖，便于完整跟踪一轮；使用安住，便于持续互动；关联试点房源，便于经纪人承接。三项同时满足，首期才触发。', supportLabel:'实际进展不同，服务也不同', support:'有新匹配客户，准备邀请；已发过的不重复；阶段检查进度落后，再建议复盘。', note:'擦亮须具备授权和权益，短信由业主确认后发送。', imageLabel:'住宅群中仅少量试点房源被柔和地照亮，业主在合适的阶段获得服务。' },
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
     <p className="thinking-takeaway">{story.takeaway}</p>
     <p className="thinking-detail">{story.detail}</p>
     <div className="thinking-support"><span>{story.supportLabel}</span><p>{story.support}</p></div>
     {story.note&&<p className="thinking-note">{story.note}</p>}
    </figcaption>
   </figure>)}
  </div>
  <p className="thinking-transition reveal">下面看，同一套房的一轮售房过程怎样接着往前走。<a href="#daily" aria-label="查看原型演示">↓</a></p>
 </section>;
}
