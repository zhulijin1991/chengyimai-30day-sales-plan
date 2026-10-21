import { useEffect } from 'react';
import { LivePrototype } from './components/LivePrototype';
import { ServiceFlow } from './components/ServiceFlow';
import './styles/report.css';
export default function App(){
 useEffect(()=>{document.title='诚意卖 · 业主30日销售推进汇报';requestAnimationFrame(()=>{const id=window.location.hash.slice(1);if(id)document.getElementById(id)?.scrollIntoView({behavior:'instant'})});const items=document.querySelectorAll('.reveal');const obs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target)}}),{threshold:.08});items.forEach(n=>obs.observe(n));return()=>obs.disconnect()},[]);
 return <>
  <header className="report-nav wrap"><a className="report-brand" href="#top">诚意卖<span>业主30日销售推进</span></a><nav aria-label="汇报导航"><a href="#daily">每日汇报</a><a href="#invitation">短信邀约</a><a href="#review">阶段复盘</a><a href="#broker">经纪人接手</a></nav></header>
  <main id="top">
   <section className="overview wrap reveal" aria-label="核心功能与整体流程">
    <p className="eyebrow">核心功能与整体流程</p><h1>从服务生效，<em>到协作执行。</em></h1><p className="overview-lead">跟踪新增客户、客户与本房的推进，以及协作动作的实际效果。</p>
    <ServiceFlow/>
   </section>
   <section className="hero wrap" id="daily">
    <div className="hero-copy reveal"><p className="eyebrow">每日主动汇报</p><h2>有新客户，<br/><em>我先告诉你。</em></h2><p className="lead">安住主动报进展，<br/>业主在聊天里做决定。</p><div className="hero-quote"><span>今天帮你找到了</span><b>2<small>位新客户。</small></b></div><p className="muted">10月13日 · 服务第2天<br/>本轮已新增2位，目标20位。</p><a href="#invitation" className="scroll-link">继续往下看 <span>↓</span></a></div>
    <div className="hero-visual reveal"><LivePrototype scene="daily" title="每日主动汇报与新客户名单"/></div>
   </section>
   <div className="service-strip wrap reveal"><div><b>30<span>天</span></b><p>服务生效，就开始积累客户</p></div><svg viewBox="0 0 180 40" aria-hidden="true"><path d="M0 20h170m-13-12 13 12-13 12"/></svg><div><b>每天<span>主动</span></b><p>有授权、有权益就擦亮房源</p></div><svg viewBox="0 0 180 40" aria-hidden="true"><path d="M0 20h170m-13-12 13 12-13 12"/></svg><div><b>有进展<span>就告诉你</span></b><p>新客户、邀约反馈、看房进展</p></div></div>
   <section className="feature feature--reverse wrap" id="invitation">
    <div className="feature-visual reveal"><LivePrototype scene="invitation" title="聊天中确认平台短信邀约"/></div>
    <div className="feature-copy reveal"><p className="eyebrow">短信邀约</p><h2>短信先给你看，<br/><em>发不发，你来定。</em></h2><p className="lead">名单和完整短信都在聊天里。<br/>确认后，由平台发送。</p><div className="sms-identity"><span>【贝壳找房】</span><p>“阳光花园两居室的业主<br/>想邀请你来实地看看……”</p></div><div className="visual-facts"><div><svg viewBox="0 0 32 32" aria-hidden="true"><path d="m12 21-3 3a6 6 0 0 1-8-8l7-7a6 6 0 0 1 8 0m4 2 3-3a6 6 0 0 1 8 8l-7 7a6 6 0 0 1-8 0m-6-1 12-12"/></svg><p>带房源链接，也告诉客户<br/>联系经纪人约看房。</p></div><div><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 3h20v24H9ZM3 9v21h20M14 15l4 4 7-8"/></svg><p>选好想邀请的客户，<br/>一次确认，批量发出看房邀请。</p></div></div></div>
   </section>
   <section className="review-band" id="review"><div className="feature wrap">
    <div className="feature-copy reveal"><p className="eyebrow">阶段性复盘</p><h2>到点看进度，<br/><em>慢了，就一起复盘。</em></h2><div className="review-timeline"><i/><span>开始</span><b>第10天<small>第一次检查</small></b><b>第20天<small>第二次检查</small></b><span>第30天</span></div><div className="review-bars"><div><span>时间已过</span><i><b style={{width:'33.333%'}}/></i><strong>33.3%</strong></div><div><span>新增客户</span><i><b style={{width:'10%'}}/></i><strong>10%</strong></div></div><p className="review-gap">新增 <b>2／20</b> 位，落后 <em>23.3</em> 个百分点。</p><p className="muted">在检查点，落后至少20个百分点才建议复盘。</p></div>
    <div className="feature-visual reveal"><LivePrototype scene="review" title="业主采纳阶段性复盘并收到安排结果"/></div>
   </div></section>
   <section className="feature feature--reverse wrap" id="broker">
    <div className="feature-visual reveal"><LivePrototype scene="echo" title="维护人接收并提交阶段性复盘邀约结果"/></div>
    <div className="feature-copy reveal"><p className="eyebrow">经纪人接手</p><h2>业主点头，<br/><em>经纪人把时间约好。</em></h2><p className="lead">只给负责这套房的维护人，<br/>下发一条邀约任务。</p><ol className="broker-steps"><li><span>1</span><div><b>联系业主</b><p>确认电话或见面，以及日期、时间。</p></div></li><li><span>2</span><div><b>选择方式、日期和时间</b><p>自动生成邀约结果，确认后提交。</p></div></li><li><span>3</span><div><b>邀约任务结束</b><p>实际复盘，按约定时间进行。</p></div></li></ol><p className="muted broker-duration">单条任务有效24小时，整条邀约请求有效7天。</p></div>
   </section>
   <section className="closing wrap reveal"><h2>每天往前推，<br/><em>关键一步你做主。</em></h2><div className="roles"><div><svg viewBox="0 0 80 80" aria-hidden="true"><path d="M12 16h56v40H35L19 68V56h-7Z"/><path d="M24 30h32M24 42h22"/></svg><b>安住来跟</b><p>报新客户 · 跟进展</p></div><span>→</span><div><svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="22" r="12"/><path d="M17 67v-9c0-13 11-20 23-20s23 7 23 20v9M30 55l7 7 15-17"/></svg><b>业主来定</b><p>确认短信 · 决定复盘</p></div><span>→</span><div><svg viewBox="0 0 80 80" aria-hidden="true"><path d="M13 18h54v49H13ZM13 33h54M26 10v15m28-15v15M26 49l9 8 17-17"/></svg><b>经纪人来约</b><p>方式、日期、时间</p></div></div><p className="muted closing-end">成交，或本轮到期，就结束这轮推进。</p></section>
  </main>
  <footer className="wrap report-footer"><span>诚意卖 · 业主30日销售推进</span><a href="#top">回到顶部 ↑</a></footer>
 </>
}
