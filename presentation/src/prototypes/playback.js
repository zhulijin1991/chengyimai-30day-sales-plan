/* Playback walks the existing prototype's real controls; no service call is made. */
(function () {
 const scene=document.documentElement.dataset.reportScene;
 let stopped=false;
 const timers=[];
 const later=(ms,fn)=>timers.push(setTimeout(()=>{if(!stopped)fn()},ms));
 const announce=(label)=>parent.postMessage({type:'cmy-report-step',label},'*');
 const one=(selector)=>document.querySelector(selector);
 const byText=(text)=>[...document.querySelectorAll('button')].find(b=>b.textContent.trim()===text && !b.disabled);
 const scrollTo=(el)=>{if(!el)return;const sc=el.closest('.mobile-scroll');if(sc)sc.scrollTo({top:el.getBoundingClientRect().top-sc.getBoundingClientRect().top+sc.scrollTop-16,behavior:'smooth'})};
 const bottom=()=>{const all=[...document.querySelectorAll('.mobile-scroll')];const sc=all[all.length-1];sc?.scrollTo({top:sc.scrollHeight,behavior:'smooth'})};
 const tap=(el)=>{if(!el || el.disabled)return;const r=el.getBoundingClientRect();const dot=document.createElement('i');dot.className='report-pointer';dot.style.left=(r.left+r.width/2)+'px';dot.style.top=(r.top+r.height/2)+'px';document.body.appendChild(dot);later(550,()=>el.click());later(1400,()=>dot.remove())};
 const replay=()=>parent.postMessage({type:'cmy-report-replay'},'*');
 // An actual viewer interaction keeps their result in place until replay is requested.
 document.addEventListener('pointerdown',e=>{if(!e.isTrusted)return;stopped=true;timers.forEach(clearTimeout);announce('手动操作中')},{capture:true,once:true});
 function start(){
  if(!one('.phone-device')){later(40,start);return}
  if(scene==='daily'){
   document.documentElement.dataset.reportStep='0'; announce('安住主动报新客户');
   later(2400,()=>{document.documentElement.dataset.reportStep='1';announce('给出新客户名单')});
   // Keep the loaded phone in place; remounting its iframe flashes a blank page.
   later(12000,()=>{timers.length=0;start()});
  }else if(scene==='invitation'){
   announce('先核对收件人和完整短信');
   later(900,()=>scrollTo(one('[data-testid=sms-chat-preview]')));
   later(5200,()=>{bottom();announce('业主确认发送')});
   later(8900,()=>tap(byText('发送给2位客户')));
   later(11200,()=>{bottom();if(one('[data-testid=sms-result-message]')){announce('平台发送，聊天中反馈结果');parent.postMessage({type:'cmy-report-completed'},'*')}});
   later(18500,replay);
  }else if(scene==='review'){
   announce('第10天，核对客户与看房进展');
   later(8100,()=>{bottom();announce('进度偏慢，安住建议阶段性复盘')});
   later(13500,()=>{announce('业主同意，让经纪人联系');tap(byText('好，让他们联系我复盘'))});
   later(15300,()=>{bottom();if(one('[data-testid=review-created-message]')){announce('聊天中反馈：已安排经纪人联系');parent.postMessage({type:'cmy-report-completed'},'*')}});
   later(23500,replay);
  }else if(scene==='echo'){
   let prepared=false;const initialForm=new MutationObserver(()=>{const form=one('[data-testid=echo-subtask-detail]');if(stopped){initialForm.disconnect();return}if(!form || prepared)return;prepared=true;one('[data-testid=echo-method-visit]')?.click();for(const [id,value] of [['echo-appointment-date','2026-10-22'],['echo-appointment-time','19:00']]){const select=one('[data-testid='+id+']');if(select){select.value=value;select.dispatchEvent(new Event('change',{bubbles:true}))}}initialForm.disconnect()});initialForm.observe(document.body,{childList:true,subtree:true});
   announce('维护人收到1条邀约任务');
   later(2700,()=>tap(one('[data-testid=echo-invitation-card]')));
   later(4700,()=>announce('查看背景与结束条件'));
   later(8200,()=>{scrollTo(one('[data-testid=echo-next-action]'));announce('联系业主，确认方式和时间')});
   later(11000,()=>tap(byText('去处理')));
   later(13700,()=>{announce('选择邀约方式');tap(one('[data-testid=echo-method-phone]'))});
   later(15500,()=>{const select=one('[data-testid=echo-appointment-date]');if(select){select.value='2026-10-23';select.dispatchEvent(new Event('change',{bubbles:true}))}announce('选择日期和时间')});
   later(16600,()=>{const select=one('[data-testid=echo-appointment-time]');if(select){select.value='14:00';select.dispatchEvent(new Event('change',{bubbles:true}))}});
   later(19200,()=>{announce('确认生成的邀约结果并提交');tap(one('[data-testid=echo-submit-invitation]'))});
   later(21500,()=>{scrollTo(one('[data-testid=echo-next-action]'));if(one('[data-testid=echo-task-detail][data-task-state=closed]')){announce('邀约任务结束，实际复盘按约进行');parent.postMessage({type:'cmy-report-completed'},'*')}});
   later(31000,replay);
  }
 }
 start();
})();
