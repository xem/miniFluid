x=y=a=[];for(C of O.value)++x,C<" "?x=!++y:C>" "&&a.push({x,y,C,w:"#"==C,u:0,v:0});M=o=>a.map(p=>{p.t=.1;p.s=0;o||(p.D=9*p.w);for(q of a)(g=Math.hypot(e=p.x-q.x,f=p.y-q.y)/2-1)<0?o?(g/=p.D,p.t+=(f*(z=3-p.D-q.D)+p.v-q.v)*g,p.s+=(e*z+p.u-q.u)*g):p.D+=g*g:1});setInterval`M(c.width^=M());for(p of a)with(p)c.getContext("2d").fillText(C,3*x,5*y),w||(y+=v+=t/4,x+=u+=s/2)`
