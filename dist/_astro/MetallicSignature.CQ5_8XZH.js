import{j as C}from"./jsx-runtime.BjG_zV1W.js";import{r as T}from"./index.DwOyh-pa.js";const p={patternScale:2,refraction:.015,edge:1,patternBlur:.005,liquid:.07,speed:.3};function j(h){const y=document.createElement("canvas"),I=y.getContext("2d");return new Promise((v,t)=>{if(!h||!I){t(new Error("Invalid file or context"));return}const d=new Image;d.crossOrigin="anonymous",d.onload=function(){h.type==="image/svg+xml"&&(d.width=1e3,d.height=1e3);const n=1e3,N=500;let r=d.naturalWidth,a=d.naturalHeight;(r>n||a>n||r<N||a<N)&&(r>a?r>n?(a=Math.round(a*n/r),r=n):r<N&&(a=Math.round(a*N/r),r=N):a>n?(r=Math.round(r*n/a),a=n):a<N&&(r=Math.round(r*N/a),a=N)),y.width=r,y.height=a;const u=document.createElement("canvas");u.width=r,u.height=a;const L=u.getContext("2d");L.drawImage(d,0,0,r,a);const z=L.getImageData(0,0,r,a).data,_=new Array(r*a).fill(!1);for(let o=0;o<a;o++)for(let i=0;i<r;i++){const g=(o*r+i)*4,c=z[g+3];_[o*r+i]=c>10}function s(o,i){return o<0||o>=r||i<0||i>=a?!1:_[i*r+o]}const l=new Array(r*a).fill(!1);for(let o=0;o<a;o++)for(let i=0;i<r;i++){const g=o*r+i;if(!_[g])continue;let c=!1;for(let m=o-1;m<=o+1&&!c;m++)for(let A=i-1;A<=i+1&&!c;A++)s(A,m)||(c=!0);c&&(l[g]=!0)}const e=new Float32Array(r*a).fill(0),x=new Float32Array(r*a).fill(0),w=.01,S=300;function M(o,i,g){return o<0||o>=r||i<0||i>=a||!_[i*r+o]?0:g[i*r+o]}for(let o=0;o<S;o++){for(let i=0;i<a;i++)for(let g=0;g<r;g++){const c=i*r+g;if(!_[c]||l[c]){x[c]=0;continue}const m=M(g+1,i,e)+M(g-1,i,e)+M(g,i+1,e)+M(g,i-1,e);x[c]=(w+m)/4}e.set(x)}let E=0;for(let o=0;o<r*a;o++)e[o]>E&&(E=e[o]);const b=2,f=I.createImageData(r,a);for(let o=0;o<a;o++)for(let i=0;i<r;i++){const g=o*r+i,c=g*4;if(!_[g])f.data[c]=255,f.data[c+1]=255,f.data[c+2]=255,f.data[c+3]=255;else{const m=e[g]/E,D=255*(1-Math.pow(m,b));f.data[c]=D,f.data[c+1]=D,f.data[c+2]=D,f.data[c+3]=255}}I.putImageData(f,0,0),y.toBlob(o=>{if(!o){t(new Error("Failed to create PNG blob"));return}v({imageData:f,pngBlob:o})},"image/png")},d.onerror=()=>t(new Error("Failed to load image")),d.src=URL.createObjectURL(h)})}const Q=`#version 300 es
precision mediump float;

in vec2 a_position;
out vec2 vUv;

void main() {
    vUv = .5 * (a_position + 1.);
    gl_Position = vec4(a_position, 0.0, 1.0);
}`,R=`#version 300 es
precision mediump float;

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D u_image_texture;
uniform float u_time;
uniform float u_ratio;
uniform float u_img_ratio;
uniform float u_patternScale;
uniform float u_refraction;
uniform float u_edge;
uniform float u_patternBlur;
uniform float u_liquid;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec3 mod289(vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 permute(vec3 x) { return mod289(((x*34.)+1.)*x); }
float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1., 0.) : vec2(0., 1.);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.);
    m = m*m;
    m = m*m;
    vec3 x = 2. * fract(p * C.www) - 1.;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130. * dot(m, g);
}

vec2 get_img_uv() {
    vec2 img_uv = vUv;
    img_uv -= .5;
    if (u_ratio > u_img_ratio) {
        img_uv.x = img_uv.x * u_ratio / u_img_ratio;
    } else {
        img_uv.y = img_uv.y * u_img_ratio / u_ratio;
    }
    float scale_factor = 1.;
    img_uv *= scale_factor;
    img_uv += .5;
    img_uv.y = 1. - img_uv.y;
    return img_uv;
}
vec2 rotate(vec2 uv, float th) {
    return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
float get_color_channel(float c1, float c2, float stripe_p, vec3 w, float extra_blur, float b) {
    float ch = c2;
    float border = 0.;
    float blur = u_patternBlur + extra_blur;
    ch = mix(ch, c1, smoothstep(.0, blur, stripe_p));
    border = w[0];
    ch = mix(ch, c2, smoothstep(border - blur, border + blur, stripe_p));
    b = smoothstep(.2, .8, b);
    border = w[0] + .4 * (1. - b) * w[1];
    ch = mix(ch, c1, smoothstep(border - blur, border + blur, stripe_p));
    border = w[0] + .5 * (1. - b) * w[1];
    ch = mix(ch, c2, smoothstep(border - blur, border + blur, stripe_p));
    border = w[0] + w[1];
    ch = mix(ch, c1, smoothstep(border - blur, border + blur, stripe_p));
    float gradient_t = (stripe_p - w[0] - w[1]) / w[2];
    float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));
    ch = mix(ch, gradient, smoothstep(border - blur, border + blur, stripe_p));
    return ch;
}
float get_img_frame_alpha(vec2 uv, float img_frame_width) {
    float img_frame_alpha = smoothstep(0., img_frame_width, uv.x) * smoothstep(1., 1. - img_frame_width, uv.x);
    img_frame_alpha *= smoothstep(0., img_frame_width, uv.y) * smoothstep(1., 1. - img_frame_width, uv.y);
    return img_frame_alpha;
}
void main() {
    vec2 uv = vUv;
    uv.y = 1. - uv.y;
    uv.x *= u_ratio;
    float diagonal = uv.x - uv.y;
    float t = .001 * u_time;

    vec2 img_uv = get_img_uv();
    vec4 img = texture(u_image_texture, img_uv);
    vec3 color = vec3(0.);
    float opacity = 1.;
    vec3 color1 = vec3(.98, 0.98, 1.);
    vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, uv.x + uv.y));
    float edge = img.r;
    vec2 grad_uv = uv;
    grad_uv -= .5;
    float dist = length(grad_uv + vec2(0., .2 * diagonal));
    grad_uv = rotate(grad_uv, (.25 - .2 * diagonal) * PI);
    float bulge = pow(1.8 * dist, 1.2);
    bulge = 1. - bulge;
    bulge *= pow(uv.y, .3);
    float cycle_width = u_patternScale;
    float thin_strip_1_ratio = .12 / cycle_width * (1. - .4 * bulge);
    float thin_strip_2_ratio = .07 / cycle_width * (1. + .4 * bulge);
    float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);
    float thin_strip_1_width = cycle_width * thin_strip_1_ratio;
    float thin_strip_2_width = cycle_width * thin_strip_2_ratio;
    opacity = 1. - smoothstep(.9 - .5 * u_edge, 1. - .5 * u_edge, edge);
    opacity *= get_img_frame_alpha(img_uv, 0.01);
    float noise = snoise(uv - t);
    edge += (1. - edge) * u_liquid * noise;
    float refr = 0.;
    refr += (1. - bulge);
    refr = clamp(refr, 0., 1.);
    float dir = grad_uv.x;
    dir += diagonal;
    dir -= 2. * noise * diagonal * (smoothstep(0., 1., edge) * smoothstep(1., 0., edge));
    bulge *= clamp(pow(uv.y, .1), .3, 1.);
    dir *= (.1 + (1.1 - edge) * bulge);
    dir *= smoothstep(1., .7, edge);
    dir += .18 * (smoothstep(.1, .2, uv.y) * smoothstep(.4, .2, uv.y));
    dir += .03 * (smoothstep(.1, .2, 1. - uv.y) * smoothstep(.4, .2, 1. - uv.y));
    dir *= (.5 + .5 * pow(uv.y, 2.));
    dir *= cycle_width;
    dir -= t;
    float refr_r = refr;
    refr_r += .03 * bulge * noise;
    float refr_b = 1.3 * refr;
    refr_r += 5. * (smoothstep(-.1, .2, uv.y) * smoothstep(.5, .1, uv.y)) * (smoothstep(.4, .6, bulge) * smoothstep(1., .4, bulge));
    refr_r -= diagonal;
    refr_b += (smoothstep(0., .4, uv.y) * smoothstep(.8, .1, uv.y)) * (smoothstep(.4, .6, bulge) * smoothstep(.8, .4, bulge));
    refr_b -= .2 * edge;
    refr_r *= u_refraction;
    refr_b *= u_refraction;
    vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);
    w[1] -= .02 * smoothstep(.0, 1., edge + bulge);
    float stripe_r = mod(dir + refr_r, 1.);
    float r = get_color_channel(color1.r, color2.r, stripe_r, w, 0.02 + .03 * u_refraction * bulge, bulge);
    float stripe_g = mod(dir, 1.);
    float g = get_color_channel(color1.g, color2.g, stripe_g, w, 0.01 / (1. - diagonal), bulge);
    float stripe_b = mod(dir - refr_b, 1.);
    float b = get_color_channel(color1.b, color2.b, stripe_b, w, .01, bulge);
    color = vec3(r, g, b);
    color *= opacity;
    fragColor = vec4(color, opacity);
}
`;function k({imageSrc:h,scale:y,params:I=p}){const v=T.useRef(null),[t,d]=T.useState(null),[n,N]=T.useState({}),r=T.useRef(0),a=T.useRef(0),[u,L]=T.useState(null),[O,z]=T.useState(!1);T.useEffect(()=>{h&&fetch(h).then(s=>s.blob()).then(s=>{const l=new File([s],"logo.svg",{type:s.type});return j(l)}).then(s=>{L(s.imageData)}).catch(s=>console.error("Error loading image for MetallicPaint:",s))},[h]);function _(){!t||!n||(t.uniform1f(n.u_edge,I.edge||p.edge),t.uniform1f(n.u_patternBlur,I.patternBlur||p.patternBlur),t.uniform1f(n.u_time,0),t.uniform1f(n.u_patternScale,I.patternScale||p.patternScale),t.uniform1f(n.u_refraction,I.refraction||p.refraction),t.uniform1f(n.u_liquid,I.liquid||p.liquid))}return T.useEffect(()=>{function s(){const l=v.current,e=l?.getContext("webgl2",{antialias:!0,alpha:!0});if(!l||!e){z(!0);return}function x(g,c,m){const A=g.createShader(m);return A?(g.shaderSource(A,c),g.compileShader(A),g.getShaderParameter(A,g.COMPILE_STATUS)?A:(console.error("An error occurred compiling the shaders: "+g.getShaderInfoLog(A)),g.deleteShader(A),null)):null}const w=x(e,Q,e.VERTEX_SHADER),S=x(e,R,e.FRAGMENT_SHADER),M=e.createProgram();if(!M||!w||!S)return;if(e.attachShader(M,w),e.attachShader(M,S),e.linkProgram(M),!e.getProgramParameter(M,e.LINK_STATUS))return console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(M)),null;function E(g,c){let m={},A=c.getProgramParameter(g,c.ACTIVE_UNIFORMS);for(let D=0;D<A;D++){let U=c.getActiveUniform(g,D)?.name;U&&(m[U]=c.getUniformLocation(g,U))}return m}const b=E(M,e);N(b);const f=new Float32Array([-1,-1,1,-1,-1,1,1,1]),o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,f,e.STATIC_DRAW),e.useProgram(M);const i=e.getAttribLocation(M,"a_position");e.enableVertexAttribArray(i),e.bindBuffer(e.ARRAY_BUFFER,o),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0),d(e)}s(),_()},[]),T.useEffect(()=>{!t||!n||_()},[t,I,n]),T.useEffect(()=>{if(!t||!n)return;let s;function l(e){const x=e-a.current;a.current=e,r.current+=x*(I.speed||p.speed),t.uniform1f(n.u_time,r.current),t.drawArrays(t.TRIANGLE_STRIP,0,4),s=requestAnimationFrame(l)}return a.current=performance.now(),s=requestAnimationFrame(l),()=>{cancelAnimationFrame(s)}},[t,I.speed]),T.useEffect(()=>{const s=v.current;if(!s||!t||!n||!u)return;function l(){if(!s||!t||!n||!u)return;const e=u.width/u.height;t.uniform1f(n.u_img_ratio,e);const x=1e3;s.width=x*window.devicePixelRatio,s.height=x*window.devicePixelRatio,t.viewport(0,0,s.height,s.height),t.uniform1f(n.u_ratio,1),t.uniform1f(n.u_img_ratio,e)}return l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[t,n,u]),T.useEffect(()=>{if(!t||!n||!u)return;const s=t.getParameter(t.TEXTURE_BINDING_2D);s&&t.deleteTexture(s);const l=t.createTexture();t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.pixelStorei(t.UNPACK_ALIGNMENT,1);try{t.texImage2D(t.TEXTURE_2D,0,t.RGBA,u.width,u.height,0,t.RGBA,t.UNSIGNED_BYTE,u.data),t.uniform1i(n.u_image_texture,0)}catch(e){console.error("Error uploading texture:",e)}return()=>{l&&t.deleteTexture(l)}},[t,n,u]),O?C.jsx("img",{src:h,alt:"logo",className:"block w-full h-full object-contain",style:{filter:"brightness(1.2) contrast(1.1)"}}):C.jsx("canvas",{ref:v,className:"block w-full h-full object-contain"})}const P="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAyMDAxMDkwNC8vRU4iDQogImh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDEvUkVDLVNWRy0yMDAxMDkwNC9EVEQvc3ZnMTAuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogd2lkdGg9IjEyODAuMDAwMDAwcHQiIGhlaWdodD0iOTE0LjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMTI4MC4wMDAwMDAgOTE0LjAwMDAwMCINCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4NCg0KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsOTE0LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDcwKSINCmZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSI+DQo8cGF0aCBkPSJNNjQwNSA2NzUzIGMtNCAtMTYgLTEwIC0zNiAtMTYgLTQ1IC01IC0xMCAtOSAtMjYgLTkgLTM1IDAgLTE2IC0xOA0KLTc0IC00MCAtMTI4IC01IC0xMSAtMTAgLTI5IC0xMyAtNDAgLTMgLTExIC0xOCAtNTggLTM1IC0xMDUgLTMzIC05NSAtMTUwDQotNDYwIC0xODkgLTU5MCAtMTQgLTQ3IC0yOSAtOTQgLTMzIC0xMDUgLTE0IC0zNiAtMzYgLTEwNSAtODUgLTI3MCAtMTUgLTQ5DQotMzggLTExOSAtNTAgLTE1NSAtMjggLTc4IC05MSAtMjcxIC0xMzAgLTM5NSAtMTUgLTQ5IC00MiAtMTM1IC02MCAtMTkwIC01MQ0KLTE1OSAtNjUgLTIwNiAtNjUgLTIyNCAtMSAtMjIgLTI0IC01MSAtNDEgLTUxIC04IDAgLTQ2IDE5IC04NCA0MSAtMTM4IDgyDQotNTg0IDMzMyAtNzQ1IDQyMSAtMzYgMTkgLTE0NiA4MCAtMjQ1IDEzNSAtOTkgNTUgLTMwNiAxNzAgLTQ2MCAyNTUgLTE1NCA4Ng0KLTMwOSAxNzIgLTM0NSAxOTMgLTY0IDM3IC0zODUgMjE1IC04NTUgNDc0IC0xMzIgNzMgLTI1MCAxMzkgLTI2MiAxNDcgLTI0IDE1DQotNTk2IDMyOSAtNjQ4IDM1NiAtMTYgOCAtNjMgMzQgLTEwMyA1NyAtNDEgMjMgLTc2IDQxIC03OCAzOCAtMiAtMiAyNiAtMzIgNjMNCi02NyAzOCAtMzUgMTUxIC0xNDIgMjUzIC0yMzkgMTAyIC05NyAyMjEgLTIxMCAyNjUgLTI1MSA0NCAtNDEgMTMyIC0xMjQgMTk1DQotMTg1IDYzIC02MSAyMzQgLTIyMyAzODAgLTM2MCAxNDUgLTEzOCAyNzMgLTI1OSAyODUgLTI3MSAzOSAtMzkgNDkzIC00NzANCjcyMCAtNjg0IDEyNiAtMTE4IDMzNyAtMzE4IDQ3MCAtNDQ1IDEzMiAtMTI2IDI3MyAtMjU5IDMxMyAtMjk0IDg3IC03NyA5MA0KLTkxIDQxIC0xODEgLTE1IC0yNiAtNjkgLTE0MSAtNjkgLTE0NSAwIC0yIC0yMiAtNTAgLTQ5IC0xMDcgLTI2IC01NyAtNTYNCi0xMjEgLTY2IC0xNDMgLTEwIC0yMiAtNDAgLTg2IC02NiAtMTQyIC0yNyAtNTcgLTQ5IC0xMDUgLTQ5IC0xMDggMCAtNiAtMzgNCi05MCAtMTA1IC0yMzAgLTI4IC02MCAtNjAgLTEyOCAtNzAgLTE1MCAtMTAgLTIyIC0zNSAtNzggLTU3IC0xMjUgLTIyIC00Nw0KLTQ2IC05OCAtNTMgLTExNSAtMzIgLTc0IC00MSAtOTEgLTU3IC0xMTQgLTEwIC0xMyAtMTggLTI4IC0xOCAtMzMgMCAtMTEgMzANCjggMTgwIDExOCAyMDQgMTQ5IDYzMCA0NTcgODU1IDYxOSAyMDggMTUwIDQxNCAyOTkgNTg2IDQyNSAxMDkgODAgMzk3IDI4OQ0KNTQyIDM5NSA5NCA2OCAxMTEgNzcgMTMwIDY4IDEyIC02IDE4MCAtMTI0IDM3MiAtMjYzIDE5MyAtMTM5IDM5NyAtMjg3IDQ1NA0KLTMyOCA1OCAtNDEgMTY2IC0xMjAgMjQxIC0xNzYgNzUgLTU1IDE5MiAtMTQxIDI2MCAtMTkxIDY4IC00OSAxNTcgLTExNSAxOTkNCi0xNDYgNDIgLTMxIDE4OSAtMTM3IDMyNiAtMjM2IDEzOCAtOTggMjgyIC0yMDMgMzIxIC0yMzEgMzkgLTI5IDc0IC01MiA3Nw0KLTUyIDEzIDAgNiAxOSAtNDkgMTM2IC03OCAxNjUgLTI2NCA1NzAgLTM2OSA4MDQgLTQ4IDEwNyAtMTE2IDI1NiAtMTUwIDMzMA0KLTkwIDE5MyAtMTA4IDIzNyAtMTAwIDI0OSA2IDExIDUyMSA1MDIgMTQ2MCAxMzkxIDI2OCAyNTQgNTc3IDU0NiA3MjUgNjg0DQo0NjYgNDM2IDk0OCA5MDcgODA1IDc4NiAtMjMgLTIwIC05NCAtNjAgLTE4NSAtMTA1IC0zNiAtMTggLTEwMyAtNTQgLTE1MCAtODANCi00NyAtMjYgLTEwNyAtNjAgLTEzNSAtNzUgLTI3IC0xNSAtNzAgLTM4IC05NSAtNTIgLTI1IC0xNCAtMTU3IC04NyAtMjk1DQotMTYzIC0yNDAgLTEzMSAtMzI0IC0xNzkgLTQ0NSAtMjUwIC0zMCAtMTggLTg5IC01MSAtMTMwIC03MyAtNDEgLTIxIC0xMzMNCi03MiAtMjA1IC0xMTIgLTE4MyAtMTAyIC0yMDkgLTExNyAtMzA1IC0xNjcgLTQ3IC0yNSAtODkgLTQ5IC05NSAtNTMgLTUgLTQNCi0zNSAtMjEgLTY1IC0zOCAtMzAgLTE2IC04OSAtNDkgLTEzMCAtNzIgLTIwMSAtMTE0IC00OTggLTI3OSAtNzE1IC0zOTcgLTk5DQotNTQgLTE5MSAtMTA2IC0zMTAgLTE3MyAtNDggLTI3IC0yNjAgLTE0NiAtNDU1IC0yNTUgLTYxIC0zNCAtODggLTQ1IC05OSAtMzgNCi04IDUgLTI3IDQ3IC00MiA5NCAtNjQgMjAwIC0xOTggNjE3IC0yODkgODk5IC01NCAxNjggLTExMSAzNDMgLTEyNSAzOTAgLTE1DQo0NyAtNjQgMjAyIC0xMTAgMzQ1IC00NiAxNDMgLTExMCAzNDIgLTE0MiA0NDMgLTMyIDEwMCAtNjEgMTgyIC02NSAxODIgLTQgMA0KLTEwIC0xMiAtMTMgLTI3eiIvPg0KPC9nPg0KPC9zdmc+DQo=",Y=()=>C.jsxs("a",{href:"https://noprobsystems.com",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 group w-fit bg-black border border-white/10 rounded-2xl pr-5 pl-3 py-2.5 hover:border-white/20 transition-all duration-300 shadow-xl",style:{textDecoration:"none"},children:[C.jsx("div",{className:"relative flex items-center justify-center pointer-events-none",style:{width:"40px",height:"40px"},children:C.jsx("div",{style:{position:"absolute",width:"64px",height:"64px",zIndex:10},children:C.jsx(k,{imageSrc:P,scale:1.4,params:{patternScale:2,refraction:.015,edge:1,patternBlur:.005,liquid:.07,speed:.3}})})}),C.jsxs("div",{className:"flex flex-col items-start translate-y-[-1px]",children:[C.jsx("p",{style:{fontFamily:"Space Mono, monospace",fontSize:"8px",color:"#94a3b8",marginBottom:"2px",textTransform:"uppercase",textAlign:"left",margin:0,lineHeight:"1.2"},children:"CREATED BY"}),C.jsx("h1",{style:{fontFamily:'"Orbitron", sans-serif',fontWeight:900,fontSize:"12px",lineHeight:"1",letterSpacing:"-0.05em",marginTop:"2px",color:"#fff",textTransform:"uppercase"},children:"NO PROB SYSTEMS"})]})]});export{Y as default};
