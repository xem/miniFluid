for(C of(G=1,P=3,V=4,a=[],c.width=160,c.height=50,X=c.getContext`2d`,a=[],y=0,x=0,v=O.value))if("\n"===C)y++,x=0;else{if(" "!==C)for(e=0;e<1;e++)for(f=0;f<1;f++)a.push({x:x+e,y:y+f,w:"#"===C,a:0,b:0,c:0,d:0,D:0});x++}setInterval((()=>{for(i=a.length;i--;)for(p=a[i],p.D=p.w?9:0,k=a.length;k--;)q=a[k],e=p.x-q.x,f=p.y-q.y,g=e*e+f*f,g<4&&(W=g**.5/2-1,p.D+=W*W);for(i=a.length;i--;)for(p=a[i],p.d=1,p.c=0,k=a.length;k--;)q=a[k],f=p.y-q.y,e=p.x-q.x,g=f*f+e*e,g<4&&(W=g**.5/2-1,p.d+=(f*(3-p.D-q.D)*3+4*p.b-4*q.b)*W/p.D,p.c+=(e*(3-p.D-q.D)*3+4*p.a-4*q.a)*W/p.D);for(c.width^=0,X.fillStyle="#0008",i=a.length;i--;)p=a[i],x=p.x,y=p.y,p.w||(p.y+=p.b+=p.d/10,p.x+=p.a+=p.c/20),X.fillRect(2*x,2*y,4,4)}),33)