const content={
 portfolio:{eyebrow:"SELECTED WORK",title:"Things I’ve made.",copy:"A few projects, experiments and ideas from my learning journey.",items:[["Project 01","Interactive portfolio website","https://github.com/Nitesh-Datascience/portfolio"],["Project 02","Data analysis dashboard","https://github.com/Nitesh-Datascience"],["Project 03","Machine learning projects","https://github.com/Nitesh-Datascience"]]},
 gallery:{eyebrow:"THE GALLERY",title:"A wall of experiments.",copy:"A collection of visual work, dashboards, designs and things I’m proud to share.",items:[["Design","UI concepts & creative experiments","https://github.com/Nitesh-Datascience"],["Data","Charts, reports & dashboards","https://github.com/Nitesh-Datascience"],["Builds","Small projects with big ideas","https://github.com/Nitesh-Datascience"]]},
 studio:{eyebrow:"THE STUDIO",title:"Currently making.",copy:"This is where ideas turn into real projects. Explore my repositories and learning notes.",items:[["In progress","Building new web experiences","https://github.com/Nitesh-Datascience"],["Learning","Python · SQL · JavaScript","https://github.com/Nitesh-Datascience"],["Next up","More projects coming soon","https://github.com/Nitesh-Datascience"]]},
 about:{eyebrow:"A LITTLE ABOUT ME",title:"Hello, I’m Nitesh.",copy:"I’m a curious creator interested in data science, coding and building useful digital experiences. I’m learning, building and sharing one project at a time.",items:[["My focus","Data science, web development & AI","https://github.com/Nitesh-Datascience"],["My values","Curiosity · consistency · creativity","https://github.com/Nitesh-Datascience"],["Say hello","Visit my GitHub profile","https://github.com/Nitesh-Datascience"]]}
};
const panel=document.getElementById('panel'),eyebrow=document.getElementById('eyebrow'),title=document.getElementById('panel-title'),copy=document.getElementById('panel-copy'),extra=document.getElementById('panel-content');
document.querySelectorAll('.door').forEach(btn=>btn.addEventListener('click',()=>{
 const d=content[btn.dataset.room];eyebrow.textContent=d.eyebrow;title.textContent=d.title;copy.textContent=d.copy;
 extra.innerHTML=d.items.map(([a,b,c])=>`<p><strong>${a}</strong><br>${b}<br><a href="${c}" target="_blank" rel="noreferrer">Explore ↗</a></p>`).join('');
 panel.classList.add('open');
}));
document.getElementById('close').addEventListener('click',()=>panel.classList.remove('open'));
document.addEventListener('keydown',e=>{if(e.key==='Escape')panel.classList.remove('open')});
const world=document.getElementById('world');
document.getElementById('scene').addEventListener('pointermove',e=>{
 if(innerWidth<700)return;
 const x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);
 world.style.transform=`rotateY(${x*3}deg) rotateX(${-y*2}deg)`;
});
document.getElementById('scene').addEventListener('pointerleave',()=>world.style.transform='rotateY(0deg) rotateX(0deg)');