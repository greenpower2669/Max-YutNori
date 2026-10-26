// Frozen 0.8.1 reference for pixel comparisons, never imported by the game.
import * as T from 'three';
import {createLowMistTexture} from './panorama-v081-noise.mjs';
// Animate local regions of Fab's original image; keep the supplied PNG unchanged.
export class LivingPanorama {
 constructor(texture){
  // atan() crosses the equirectangular seam. Implicit mip derivatives there
  // selected the image average and drew a dotted golden diagonal. Linear
  // background sampling avoids that false mip level; PMREM lighting is separate.
  texture.generateMipmaps=false;texture.minFilter=T.LinearFilter;texture.wrapS=T.RepeatWrapping;texture.needsUpdate=true;
  this.uniforms={picture:{value:texture},lowMistData:{value:createLowMistTexture()},time:{value:0},strength:{value:1}};
  this.mesh=new T.Mesh(new T.SphereGeometry(1,48,24),new T.ShaderMaterial({
   uniforms:this.uniforms,side:T.BackSide,depthWrite:false,depthTest:false,
   vertexShader:`varying vec3 direction;
    void main(){direction=position;vec4 p=projectionMatrix*mat4(mat3(viewMatrix))*modelMatrix*vec4(position,1.);gl_Position=p.xyww;}`,
   fragmentShader:`uniform sampler2D picture;uniform sampler2D lowMistData;uniform float time;uniform float strength;varying vec3 direction;
    float regionMask(vec2 p,vec2 c,vec2 radius){vec2 q=abs(p-c);q.x=min(q.x,1.-q.x);return 1.-smoothstep(.45,1.,length(q/radius));}
    vec3 sampleImage(vec2 uv){return texture2D(picture,vec2(fract(uv.x),clamp(uv.y,.001,.999))).rgb;}
    float randomCell(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    void main(){
     vec3 d=normalize(direction);vec2 uv=vec2(atan(d.z,d.x)*.159154943+.5,asin(clamp(d.y,-1.,1.))*.318309886+.5);
     vec2 p=vec2(uv.x,1.-uv.y);vec3 original=sampleImage(uv);
     float water=max(regionMask(p,vec2(.52,.565),vec2(.27,.085)),regionMask(p,vec2(.745,.64),vec2(.11,.10)));
     water=max(water,regionMask(p,vec2(.30,.61),vec2(.095,.065)));
     water*=smoothstep(.0,.10,original.b-original.r*.55);
     float falls=max(regionMask(p,vec2(.079,.719),vec2(.018,.090)),regionMask(p,vec2(.230,.717),vec2(.023,.066)));
     falls=max(falls,regionMask(p,vec2(.294,.580),vec2(.014,.043)));
     falls=max(falls,regionMask(p,vec2(.600,.746),vec2(.026,.067)));
     falls=max(falls,regionMask(p,vec2(.822,.721),vec2(.026,.085)));
     falls=max(falls,regionMask(p,vec2(.946,.728),vec2(.018,.070)));
     float lowMistExclusion=falls;
     falls*=smoothstep(.12,.38,max(original.b,original.g));
     float mist=max(falls*.8,regionMask(p,vec2(.53,.73),vec2(.24,.055)));
     mist=max(mist,regionMask(p,vec2(.21,.79),vec2(.17,.045)));
     float clouds=smoothstep(.015,.06,p.y)*(1.-smoothstep(.30,.40,p.y));
     clouds*=1.-regionMask(p,vec2(.725,.32),vec2(.055,.075));
     clouds*=smoothstep(.07,.3,max(original.r,original.g));
     vec2 offset=vec2(sin(p.y*240.+time*1.6)*.0038,sin(p.x*260.-time*2.1)*.0017)*water;
     offset+=vec2(sin(p.y*180.-time*3.2)*.0012,sin(time*3.8-p.y*220.)*.0033)*falls;
     offset.x+=(sin(time*.12+p.y*18.)*.005+sin(time*.07)*.003)*clouds;
     vec3 color=sampleImage(uv+offset*strength);
     float foam=.5+.5*sin(p.y*620.-time*9.+sin(p.x*480.+time));
     color+=vec3(.075,.11,.13)*falls*foam*strength;
     float ripples=sin(p.y*900.+sin(p.x*100.-time*1.8)*2.+time*4.);
     color+=vec3(.018,.035,.045)*ripples*water*strength;
     float breath=.5+.5*sin(time*.6+p.x*55.+sin(p.y*40.-time*.4));
     color=mix(color,vec3(.55,.67,.69),mist*(.055+breath*.13)*strength);
     // Soft white spray stays within the waterfalls; no golden particle trails.
     vec2 sprayUV=vec2(p.x*340.,p.y*160.-time*2.5),cell=floor(sprayUV),f=fract(sprayUV);
     vec2 centre=vec2(.2+.6*randomCell(cell),.5);
     float spray=(1.-smoothstep(.025,.20,length(f-centre)))*step(.83,randomCell(cell+13.));
     spray*=smoothstep(0.,.25,f.y)*(1.-smoothstep(.75,1.,f.y))*falls;
     color=mix(color,vec3(.78,.9,.95),spray*.38*strength);
     float lamps=max(regionMask(p,vec2(.04,.51),vec2(.07,.09)),regionMask(p,vec2(.945,.49),vec2(.065,.10)));
     lamps=max(lamps,regionMask(p,vec2(.15,.40),vec2(.055,.09)));
     lamps*=smoothstep(.03,.15,original.r)*smoothstep(.01,.12,original.r-original.b);
     color*=1.+lamps*(.22*sin(time*1.3+p.x*97.)+.08*sin(time*.57))*strength;
     // Independent low clouds over valleys/lake. Keep the approved waterfall
     // treatment above unchanged, including its spray and the whole fall region.
     if(strength>0. && p.y>.49 && p.y<.83 && lowMistExclusion<=0.){
      float valleyMask=texture2D(lowMistData,p).g;
      if(valleyMask>.002){
       float first=texture2D(lowMistData,p*vec2(3.,7.)-vec2(time*.004,0.)).r;
       float second=texture2D(lowMistData,p*vec2(5.,11.)+vec2(time*.002,time*.0004)).r;
       float density=smoothstep(.28,.68,first*.65+second*.35);
       float alpha=valleyMask*density*.18*strength;
       color=mix(color,vec3(.62,.72,.76),alpha);
      }
     }
     gl_FragColor=vec4(color,1.);
     #include <tonemapping_fragment>
     #include <colorspace_fragment>
    }`
  }));
  this.mesh.rotation.y=-Math.PI*.3;this.mesh.frustumCulled=false;this.mesh.renderOrder=-1000;
 }
 frame(dt,reduced,low){if(!reduced)this.uniforms.time.value+=Math.max(0,dt);this.uniforms.strength.value=reduced?0:low?.7:1;}
 diagnostic(){return {time:this.uniforms.time.value,strength:this.uniforms.strength.value,lowClouds:{layers:2,textureBytes:this.uniforms.lowMistData.value.image.data.byteLength},zones:['water','waterfalls','mist','clouds','lamps','spray','low-clouds']};}
}
