(()=>{"use strict";(async a=>{const o=await fetch("https://api.weatherapi.com/v1/current.json?key=47ac169af086415e85a163023231706&q=London",{mode:"cors"}),t=await o.json();console.log(t)})()})();