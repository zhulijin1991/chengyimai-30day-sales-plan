import { useEffect, useMemo, useRef, useState } from 'react';
import base from '../prototypes/base.html?raw';
import playback from '../prototypes/playback.js?raw';
import { reportScenario } from '../reportScenario';
export type Scene = 'daily'|'invitation'|'review'|'echo';
const labels:Record<Scene,string>={daily:'安住主动报新客户',invitation:'核对短信，再确认发送',review:'查看进展，提出复盘建议',echo:'维护人接收并提交邀约结果'};
export function LivePrototype({scene,title}:{scene:Scene;title:string}){
 const host=useRef<HTMLDivElement>(null), frame=useRef<HTMLIFrameElement>(null);
 const [visible,setVisible]=useState(false),[run,setRun]=useState(0),[completed,setCompleted]=useState(0),[scale,setScale]=useState(.8),[label,setLabel]=useState(labels[scene]);
 const [pageVisible,setPageVisible]=useState(!document.hidden);
 const html=useMemo(()=>{
  const mode=scene==='review'?'tracking':scene==='echo'?'echo':'task';
  const sceneStyle=scene==='daily'?'<style>html[data-report-scene=daily] [data-testid=sms-chat-preview],html[data-report-scene=daily] .cmy-chat-customers>p:last-child{display:none!important}</style>':'';
  return base.replace('</head>',sceneStyle+'</head>').replace('<html lang="zh-CN">',`<html lang="zh-CN" data-report-scene="${scene}" data-report-step="0" data-report-customer-target="${reportScenario.customerTarget}"${scene==='echo'?'':' data-report-shell="ann"'}>`).replace('data-prototype="task"',`data-prototype="${mode}"`).replace('</body>',`<script>${playback.replaceAll('</script','<\\/script')}</script></body>`);
 },[scene]);
 useEffect(()=>{const node=host.current;if(!node)return;const obs=new IntersectionObserver(([entry])=>setVisible(entry!.isIntersecting && entry!.intersectionRatio>=.12),{threshold:[0,.12,.25]});obs.observe(node);const resize=new ResizeObserver(([entry])=>setScale(entry!.contentRect.width/511));resize.observe(node);const change=()=>setPageVisible(!document.hidden);document.addEventListener('visibilitychange',change);return()=>{obs.disconnect();resize.disconnect();document.removeEventListener('visibilitychange',change)}},[]);
 useEffect(()=>{const receive=(e:MessageEvent)=>{if(e.source!==frame.current?.contentWindow)return;if(e.data?.type==='cmy-report-step')setLabel(e.data.label);if(e.data?.type==='cmy-report-completed')setCompleted(v=>v+1);if(e.data?.type==='cmy-report-replay'){setRun(v=>v+1);setLabel(labels[scene])}};window.addEventListener('message',receive);return()=>window.removeEventListener('message',receive)},[scene]);
 const active=visible&&pageVisible;
 return <figure className="live-prototype" aria-label={title} data-cycle={run} data-completed={completed}>
  <div className="live-prototype__screen" ref={host} data-scene={scene} data-playing={active}>
   {active&&<iframe key={`${scene}-${run}`} ref={frame} title={title} srcDoc={html} sandbox="allow-scripts" style={{width:511,height:968,transform:`scale(${scale})`}}/>}
  </div>
  <figcaption><span><i/>{label}</span><button onClick={()=>{setRun(v=>v+1);setLabel(labels[scene])}} aria-label={`重播${title}`} title="重播">↻</button></figcaption>
 </figure>
}
