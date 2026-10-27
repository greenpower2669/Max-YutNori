import {TEAM_STYLES,defaultPlayer} from './teams.mjs';
export class TeamForm {
 constructor(container,count){this.container=container;this.count=count;count.onchange=()=>{this.capture();this.render();};}
 fill(state){this.draft=Array.from({length:4},(_,t)=>structuredClone(state.teams[t]?.players||[defaultPlayer(t)]));this.count.value=state.teams.length;this.render();}
 capture(){for(const card of this.container.children){const t=+card.dataset.team;this.draft[t]=[...card.querySelectorAll('.participant')].map(row=>({name:row.querySelector('[data-field=name]').value.trim().slice(0,30)||defaultPlayer(t).name,computer:row.querySelector('[data-field=computer]').value==='ai',level:+row.querySelector('[data-field=level]').value,aggression:+row.querySelector('[data-field=aggression]').value}));}}
 readTeams(){this.capture();return this.draft.slice(0,+this.count.value).map(players=>({players}));}
 render(){this.container.replaceChildren();
  for(let t=0;t<+this.count.value;t++){const field=document.createElement('fieldset');field.dataset.team=t;field.style.setProperty('--team-color',TEAM_STYLES[t].css);const legend=document.createElement('legend');legend.textContent=`${TEAM_STYLES[t].symbol} Équipe ${TEAM_STYLES[t].name}`;field.append(legend);
   this.draft[t].forEach((p,i)=>{const row=document.createElement('div');row.className='participant';row.innerHTML='<label>Nom<input data-field="name" maxlength="30"></label><label>Participant<select data-field="computer"><option value="human">Humain</option><option value="ai">IA</option></select></label><div class="ai-settings"><label>Niveau<select data-field="level"><option value="1">Détente</option><option value="2">Équilibré</option><option value="3">Stratégique</option></select></label><label>Agressivité<input data-field="aggression" type="range" min="0" max="100"></label></div>';
    for(const key of ['name','level','aggression'])row.querySelector(`[data-field=${key}]`).value=p[key];const kind=row.querySelector('[data-field=computer]');kind.value=p.computer?'ai':'human';const ai=row.querySelector('.ai-settings');ai.hidden=!p.computer;kind.onchange=()=>{ai.hidden=kind.value!=='ai';};
    const remove=document.createElement('button');remove.type='button';remove.textContent='Retirer ce joueur';remove.disabled=this.draft[t].length===1;remove.onclick=()=>{this.capture();this.draft[t].splice(i,1);this.render();};row.append(remove);field.append(row);
   });
   const add=document.createElement('button');add.type='button';add.textContent='＋ Ajouter un joueur';add.disabled=this.draft[t].length>=6;add.onclick=()=>{this.capture();this.draft[t].push(defaultPlayer(t,this.draft[t].length));this.render();};field.append(add);this.container.append(field);
  }
 }
}
