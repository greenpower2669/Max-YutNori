import * as T from 'three';
export class SelectionHalos {
 constructor(){this.group=new T.Group();}
 clear(){for(const child of [...this.group.children]){child.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});this.group.remove(child);}}
 sync(selection,color=0xffe39b){this.clear();if(!selection)return;
  [selection.origin,...selection.destinations].forEach((pos,i)=>{
   const halo=new T.Group();halo.position.set(pos[0],pos[1]+.035,pos[2]);halo.userData.kind=i?'destination':'selection';if(i)halo.userData.pick={node:selection.nodes?.[i-1]};
   const glow=new T.Mesh(new T.RingGeometry(.24,.43,48),new T.MeshBasicMaterial({color,transparent:true,opacity:.22,side:T.DoubleSide,depthWrite:false}));glow.rotation.x=-Math.PI/2;halo.add(glow);
   for(let k=0;k<3;k++){const arc=new T.Mesh(new T.TorusGeometry(.32,.023,6,20,Math.PI*.42),new T.MeshBasicMaterial({color,depthWrite:false}));arc.rotation.x=Math.PI/2;arc.rotation.z=k*Math.PI*2/3;halo.add(arc);}
   this.group.add(halo);
  });
 }
 frame(dt,reduced){if(!reduced)for(const halo of this.group.children)halo.rotation.y+=dt*.7;}
}
