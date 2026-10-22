import scenes from '../assets/background-scenes.png';

const stories = [
 { key:'service', number:'01', title:'业主需要的，是持续有人跟进', takeaway:'看得懂进展，也知道下一步。', detail:'同一套房 · 一轮周期 · 明确规则', imageLabel:'业主坐在家中查看手机上的售房进展，身旁是房屋模型和日历。' },
 { key:'memory', number:'02', title:'同一轮售房，接着上次往前走', takeaway:'记住发生过什么，再推进下一步。', detail:'客户积累、已发邀请、业主选择、经纪人回音', imageLabel:'打开的笔记本保存房源、客户、邀请和约定，安住带着既有记录翻开下一页。' },
 { key:'people', number:'03', title:'三方围绕同一套房共同推进', takeaway:'让双方的选择与专业服务接得上。', detail:'安住持续跟进，业主和客户作选择，经纪人核实与沟通。', note:'带看后的意向核实，随盘客阶段接入。', imageLabel:'业主、买家和经纪人围坐在房屋模型旁交流，安住协助整理进展。' },
 { key:'scope', number:'04', title:'服务明确的人，把握介入时机', takeaway:'按实际状态，提供对应的帮助。', detail:'首期：新开诚意卖＋使用安住＋试点关联房源。', note:'有授权和权益才擦亮，业主确认后再邀约；阶段检查进度落后，再建议复盘。', imageLabel:'住宅群中仅少量试点房源被柔和地照亮，业主在合适的阶段获得服务。' },
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
     {story.note&&<p className="thinking-note">{story.note}</p>}
    </figcaption>
   </figure>)}
  </div>
  <p className="thinking-transition reveal">下面看，同一套房的一轮售房过程怎样接着往前走。<a href="#daily" aria-label="查看原型演示">↓</a></p>
 </section>;
}
