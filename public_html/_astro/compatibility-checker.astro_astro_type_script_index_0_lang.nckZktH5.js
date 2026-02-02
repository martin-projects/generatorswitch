const c={manual30:[{name:"Reliance Controls 310CRK",desc:"30A, 10-circuit complete kit",price:"$280-$350",badge:"Best Overall",url:"https://www.amazon.com/dp/B000BQM9HQ?tag=112233445504b-20"},{name:"Reliance Controls 306LRK",desc:"30A, 6-circuit kit",price:"$170-$220",badge:"Budget Pick",url:"https://www.amazon.com/dp/B001GSELEO?tag=112233445504b-20"}],manual50:[{name:"Reliance Controls 510CRK",desc:"50A, 10-circuit kit",price:"$350-$420",badge:"Best 50A",url:"https://www.amazon.com/dp/B003VNTEO4?tag=112233445504b-20"}],autoGenerac:[{name:"Generac RXSW200A3",desc:"200A automatic transfer switch",price:"$500-$650",badge:"Best for Generac",url:"https://www.amazon.com/dp/B007Q0SX4S?tag=112233445504b-20"}],autoOther:[{name:"Generac RXSW200A3",desc:"200A automatic (may need adapter)",price:"$500-$650",badge:"Most Compatible",url:"https://www.amazon.com/dp/B007Q0SX4S?tag=112233445504b-20"}]};document.querySelectorAll('input[name="gen-type"]').forEach(a=>{a.addEventListener("change",r=>{const n=r.target.value==="standby";document.getElementById("brand-section").classList.toggle("hidden",!n),document.getElementById("outlet-section").classList.toggle("hidden",n)})});document.getElementById("check-btn")?.addEventListener("click",()=>{const a=document.querySelector('input[name="gen-type"]:checked')?.value,r=document.getElementById("gen-brand")?.value,n=parseInt(document.getElementById("gen-watts")?.value||"0"),g=document.getElementById("gen-outlet")?.value,i=document.getElementById("panel-size")?.value,o=document.querySelector('input[name="switch-type"]:checked')?.value;if(!n||!i){alert("Please fill in all required fields");return}let p=!0,t=[],s=[];const l=n/240;let d=l<=30?30:l<=50?50:100;o==="automatic"&&a==="portable"&&t.push("Automatic transfer switches are designed for standby generators. Consider a manual switch for portable generators."),a==="standby"&&o==="manual"&&t.push("Standby generators typically use automatic transfer switches for convenience."),g==="L5-30"&&t.push("L5-30 outlets (3-prong) may require a neutral-ground bonding plug for some transfer switches."),l>parseInt(i)&&(p=!1,t.push(`Your generator output (${Math.round(l)}A) exceeds your panel capacity (${i}A).`)),a==="portable"?s.push(`A ${d}A manual transfer switch is ideal for your setup.`):r==="generac"?s.push("Generac generators work best with Generac automatic transfer switches."):s.push("Consider a universal automatic transfer switch or consult with your generator manufacturer.");const b=p?`<div class="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <svg class="w-12 h-12 mx-auto text-green-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-xl font-bold text-green-800">Compatible!</p>
          <p class="text-green-700">Your setup can work with a ${d}A ${o} transfer switch.</p>
        </div>`:`<div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <svg class="w-12 h-12 mx-auto text-red-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p class="text-xl font-bold text-red-800">Compatibility Issues</p>
          <p class="text-red-700">Please review the warnings below.</p>
        </div>`;document.getElementById("result-status").innerHTML=b;let u="";t.length>0&&(u+=`<div class="bg-amber-50 rounded-lg p-4">
        <h4 class="font-semibold text-amber-800 mb-2">Warnings</h4>
        <ul class="text-sm text-amber-700 space-y-1">
          ${t.map(e=>`<li>• ${e}</li>`).join("")}
        </ul>
      </div>`),s.length>0&&(u+=`<div class="bg-blue-50 rounded-lg p-4">
        <h4 class="font-semibold text-blue-800 mb-2">Recommendations</h4>
        <ul class="text-sm text-blue-700 space-y-1">
          ${s.map(e=>`<li>• ${e}</li>`).join("")}
        </ul>
      </div>`),document.getElementById("result-details").innerHTML=u;let m=[];o==="manual"?m=d<=30?c.manual30:c.manual50:m=r==="generac"?c.autoGenerac:c.autoOther,document.getElementById("product-cards").innerHTML=m.map(e=>`
      <div class="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span class="inline-block bg-primary-100 text-primary-700 text-xs font-medium px-2 py-1 rounded mb-2">${e.badge}</span>
          <h4 class="font-bold text-gray-900">${e.name}</h4>
          <p class="text-sm text-gray-600">${e.desc}</p>
          <p class="text-sm font-medium text-gray-900 mt-1">${e.price}</p>
        </div>
        <a href="${e.url}" class="affiliate-btn whitespace-nowrap" target="_blank" rel="sponsored noopener">Check Price</a>
      </div>
    `).join(""),document.getElementById("results")?.classList.remove("hidden"),document.getElementById("results")?.scrollIntoView({behavior:"smooth"})});
