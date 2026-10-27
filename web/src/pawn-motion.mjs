// Keep horizontal travel above the board. A stack retains its own vertical offsets.
export function advancePawn(position,goal,dt,clearance,reduced=false){
 if(dt<=0)return;
 if(reduced){position.copy(goal);return;}
 const blend=1-Math.exp(-Math.min(dt,.1)*14),horizontal=Math.hypot(goal.x-position.x,goal.z-position.z);
 if(horizontal>.004){
  const height=Math.max(clearance,goal.y);
  if(position.y<height-.003){position.y+=(height-position.y)*blend;return;}
  position.y=Math.max(position.y,height);position.x+=(goal.x-position.x)*blend;position.z+=(goal.z-position.z)*blend;
 }else{
  if(horizontal>0){position.x=goal.x;position.z=goal.z;return;}
  position.y+=(goal.y-position.y)*blend;if(Math.abs(position.y-goal.y)<.001)position.y=goal.y;
 }
}
export function stackOffsets(poses){return poses.map(p=>p.y-Math.min(...poses.filter(q=>q.team===p.team&&Math.hypot(q.x-p.x,q.z-p.z)<.001).map(q=>q.y)));}
