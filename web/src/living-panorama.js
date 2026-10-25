import * as T from 'three';
// Local effects use the supplied image's coordinates, leaving the source PNG intact.
export class LivingPanorama {
 constructor(texture){
  this.uniforms={picture:{value:texture},time:{value:0},strength:{value:1}};
  this.mesh=new T.Mesh(new T.SphereGeometry(1,48,24),new T.ShaderMaterial({
   uniforms:this.uniforms,side:T.BackSide,depthWrite:false,depthTest:false,
   vertexShader:`varying vec3 direction;
    void main(){direction=position;vec4 p=projectionMatrix*mat4(mat3(viewMatrix))*modelMatrix*vec4(position,1.);gl_Position=p.xyww;}`,
   fragmentShader:`uniform sampler2D picture;uniform float time;uniform float strength;varying vec3 direction;
    float regionMask(vec2 p,vec2 c,vec2 radius){vec2 q=abs(p-c);q.x=min(q.x,1.-q.x);return 1.-smoothstep(.45,1.,length(q/radius));}
    vec3 sampleImage(vec2 uv){return texture2D(picture,vec2(fract(uv.x),clamp(uv.y,.001,.999))).rgb;}
    void main(){
     vec3 d=normalize(direction);vec2 uv=vec2(atan(d.z,d.x)*.159154943+.5,asin(clamp(d.y,-1.,1.))*.318309886+.5);
     vec2 p=vec2(uv.x,1.-uv.y);vec3 original=sampleImage(uv);
     float water=max(regionMask(p,vec2(.52,.59),vec2(.24,.085)),regionMask(p,vec2(.745,.64),vec2(.075,.14)));
     water=max(water,regionMask(p,vec2(.37,.66),vec2(.075,.065)));
     float falls=max(regionMask(p,vec2(.238,.80),vec2(.018,.087)),regionMask(p,vec2(.594,.79),vec2(.025,.10)));
     falls=max(falls,regionMask(p,vec2(.877,.735),vec2(.014,.085)));
     float mist=max(falls,regionMask(p,vec2(.53,.73),vec2(.18,.045)));
     float clouds=smoothstep(.015,.06,p.y)*(1.-smoothstep(.30,.40,p.y));
     clouds*=1.-regionMask(p,vec2(.725,.32),vec2(.055,.075));
     clouds*=smoothstep(.07,.3,max(original.r,original.g));
     vec2 offset=vec2(sin(p.y*240.+time*.7)*.0014,sin(p.x*260.-time*1.1)*.00065)*water;
     offset.y+=sin(time*1.5-p.y*160.)*.0015*falls;
     offset.x+=sin(time*.10+p.y*18.)*.0025*clouds;
     vec3 color=sampleImage(uv+offset*strength);
     float breath=.5+.5*sin(time*.3+p.x*55.+sin(p.y*40.-time*.22));
     color=mix(color,vec3(.55,.67,.69),mist*breath*.10*strength);
     float lamps=max(regionMask(p,vec2(.04,.51),vec2(.07,.09)),regionMask(p,vec2(.945,.49),vec2(.065,.10)));
     lamps=max(lamps,regionMask(p,vec2(.15,.40),vec2(.055,.09)));
     lamps*=smoothstep(.03,.15,original.r)*smoothstep(.01,.12,original.r-original.b);
     color*=1.+lamps*(.10*sin(time*1.3+p.x*97.)+.05*sin(time*.57))*strength;
     gl_FragColor=vec4(color,1.);
     #include <tonemapping_fragment>
     #include <colorspace_fragment>
    }`
  }));
  this.mesh.rotation.y=-Math.PI*.3;this.mesh.frustumCulled=false;this.mesh.renderOrder=-1000;
 }
 frame(dt,reduced,low){if(!reduced)this.uniforms.time.value+=Math.max(0,dt);this.uniforms.strength.value=reduced?0:low?.55:1;}
 diagnostic(){return {time:this.uniforms.time.value,strength:this.uniforms.strength.value,zones:['water','waterfalls','mist','clouds','lamps']};}
}
