(()=>{"use strict";const e=async e=>{const o=await fetch(`https://api.weatherapi.com/v1/current.json?key=47ac169af086415e85a163023231706&q=${e}`,{mode:"cors"}),n=await o.json();console.log(n),(e=>{const o=e.location.name,{country:n}=e.location,t=e.current.temp_c,c=e.current.wind_kph,r=e.current.wind_dir,{humidity:l}=e.current,i=e.current.cloud,u=e.current.condition.text,s=e.location.localtime;console.log(o),console.log(n),console.log(t),console.log(c),console.log(r),console.log(l),console.log(i),console.log(u),console.log(s),((e,o)=>{const n=document.querySelector(".location");n.innerText="",n.innerText=`${e}, ${o}`})(o,n),((e,o,n)=>{const t=document.querySelector(".temperature"),c=document.querySelector(".condition"),r=document.querySelector(".date");t.innerText="",c.innerText="",r.innerText="",t.innerText=`${e}°`,c.innerText=`${o}`,r.innerText="time"})(t,u)})(n)},o=document.querySelector("form"),n=document.querySelector("#search");e("Seoul"),o.addEventListener("submit",(o=>{o.preventDefault(),e(n.value)}))})();