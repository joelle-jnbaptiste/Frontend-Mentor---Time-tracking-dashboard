(self.webpackChunktime_tracking_dashboard=self.webpackChunktime_tracking_dashboard||[]).push([[3272],{3272:(e,t,a)=>{"use strict";a.r(t),a.d(t,{createSwipeBackGesture:()=>s});var r=a(2377),n=a(9461);a(960);const s=(e,t,a,s,i)=>{const c=e.ownerDocument.defaultView;return(0,n.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:a,onMove:e=>{s(e.deltaX/c.innerWidth)},onEnd:e=>{const t=c.innerWidth,a=e.deltaX/t,n=e.velocityX,s=n>=0&&(n>.2||e.deltaX>t/2),o=(s?1-a:a)*t;let d=0;if(o>5){const e=o/Math.abs(n);d=Math.min(e,540)}i(s,a<=0?.01:(0,r.j)(0,a,.9999),d)}})}}}]);