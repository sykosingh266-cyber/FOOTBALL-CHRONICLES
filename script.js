const matches=[
["🔴 LIVE","Manchester City","Arsenal","2 — 1","Second Half"],
["UPCOMING","Barcelona","Real Madrid","— — —","Matchday"],
["FULL TIME","Bayern Munich","Dortmund","3 — 2","Final"],
["UPCOMING","PSG","Marseille","— — —","Matchday"],
["FULL TIME","Liverpool","Chelsea","2 — 2","Final"],
["UPCOMING","Inter","Milan","— — —","Matchday"]
];
const box=document.getElementById("matchesBox");
if(box)box.innerHTML=matches.map((m,i)=>`<article class="match ${i===0?"live":""}"><div class="status">${m[0]}</div><h3>${m[1]}<br>vs<br>${m[2]}</h3><div class="score">${m[3]}</div><small>${m[4]}</small></article>`).join("");
const data=[
["Barcelona vs Real Madrid","Match / fixture"],["Manchester City vs Arsenal","Live match"],["Bayern Munich vs Dortmund","Result"],["PSG vs Marseille","Fixture"],["Liverpool vs Chelsea","Result"],["Inter vs Milan","Fixture"],["Player Rankings","Rankings"],["Tactical Desk","Tactics"],["Transfer Desk","Transfers"],["Champions League","Competition"],["Premier League","Competition"],["World Cup","International football"]
];
function searchAll(){const q=(document.getElementById("q")?.value||"").toLowerCase().trim(),r=document.getElementById("results");if(!r)return;if(!q){r.innerHTML="";return}const a=data.filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(q));r.innerHTML=a.length?a.map(x=>`<div><b>${x[0]}</b> — ${x[1]}</div>`).join(""):"<div>No result in the demo newsroom. Try a team, player, match or section.</div>"}
function setFormation(title,text){document.getElementById("formationTitle").textContent=title;document.getElementById("formationText").textContent=text}
