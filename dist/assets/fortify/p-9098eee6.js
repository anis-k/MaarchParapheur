import{c as t,a as r,u as e}from"./p-7005d10f.js";const n=e(t((function(t,r){!function(t){class r{static isArrayBuffer(t){return"[object ArrayBuffer]"===Object.prototype.toString.call(t)}static toArrayBuffer(t){const r=this.toUint8Array(t);return r.byteOffset||r.length?r.buffer.slice(r.byteOffset,r.byteOffset+r.length):r.buffer}static toUint8Array(t){return this.toView(t,Uint8Array)}static toView(t,r){if("undefined"!=typeof Buffer&&Buffer.isBuffer(t))return new r(t.buffer,t.byteOffset,t.byteLength);if(this.isArrayBuffer(t))return new r(t);if(this.isArrayBufferView(t))return new r(t.buffer,t.byteOffset,t.byteLength);throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'")}static isBufferSource(t){return this.isArrayBufferView(t)||this.isArrayBuffer(t)}static isArrayBufferView(t){return ArrayBuffer.isView(t)||t&&this.isArrayBuffer(t.buffer)}}class e{static isHex(t){return"string"==typeof t&&/^[a-z0-9]+$/i.test(t)}static isBase64(t){return"string"==typeof t&&/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)}static isBase64Url(t){return"string"==typeof t&&/^[a-zA-Z0-9-_]+$/i.test(t)}static ToString(t,e="utf8"){const n=r.toUint8Array(t);switch(e.toLowerCase()){case"utf8":return this.ToUtf8String(n);case"binary":return this.ToBinary(n);case"hex":return this.ToHex(n);case"base64":return this.ToBase64(n);case"base64url":return this.ToBase64Url(n);default:throw new Error(`Unknown type of encoding '${e}'`)}}static FromString(t,r="utf8"){if(!t)return new ArrayBuffer(0);switch(r.toLowerCase()){case"utf8":return this.FromUtf8String(t);case"binary":return this.FromBinary(t);case"hex":return this.FromHex(t);case"base64":return this.FromBase64(t);case"base64url":return this.FromBase64Url(t);default:throw new Error(`Unknown type of encoding '${r}'`)}}static ToBase64(t){const e=r.toUint8Array(t);if("undefined"!=typeof btoa){const t=this.ToString(e,"binary");return btoa(t)}return Buffer.from(e).toString("base64")}static FromBase64(t){const r=this.formatString(t);if(!r)return new ArrayBuffer(0);if(!e.isBase64(r))throw new TypeError("Argument 'base64Text' is not Base64 encoded");return"undefined"!=typeof atob?this.FromBinary(atob(r)):new Uint8Array(Buffer.from(r,"base64")).buffer}static FromBase64Url(t){const r=this.formatString(t);if(!r)return new ArrayBuffer(0);if(!e.isBase64Url(r))throw new TypeError("Argument 'base64url' is not Base64Url encoded");return this.FromBase64(this.Base64Padding(r.replace(/\-/g,"+").replace(/\_/g,"/")))}static ToBase64Url(t){return this.ToBase64(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,"")}static FromUtf8String(t){const r=unescape(encodeURIComponent(t)),e=new Uint8Array(r.length);for(let n=0;n<r.length;n++)e[n]=r.charCodeAt(n);return e.buffer}static ToUtf8String(t){const e=r.toUint8Array(t);let n="";for(let r=0;r<e.length;r++)n+=String.fromCharCode(e[r]);return decodeURIComponent(escape(n))}static FromBinary(t){const r=t.length,e=new Uint8Array(r);for(let n=0;n<r;n++)e[n]=t.charCodeAt(n);return e.buffer}static ToBinary(t){const e=r.toUint8Array(t);let n="";for(let r=0;r<e.length;r++)n+=String.fromCharCode(e[r]);return n}static ToHex(t){const e=r.toUint8Array(t),n=[],s=e.length;for(let r=0;r<s;r++){const t=e[r].toString(16).padStart(2,"0");n.push(t)}return n.join("")}static FromHex(t){let r=this.formatString(t);if(!r)return new ArrayBuffer(0);if(!e.isHex(r))throw new TypeError("Argument 'hexString' is not HEX encoded");r.length%2&&(r="0"+r);const n=new Uint8Array(r.length/2);for(let e=0;e<r.length;e+=2){const t=r.slice(e,e+2);n[e/2]=parseInt(t,16)}return n.buffer}static Base64Padding(t){const r=4-t.length%4;if(r<4)for(let e=0;e<r;e++)t+="=";return t}static formatString(t){return(null==t?void 0:t.replace(/[\n\r\t ]/g,""))||""}}t.BufferSourceConverter=r,t.Convert=e,t.assign=function(t){const r=arguments[0];for(let e=1;e<arguments.length;e++){const t=arguments[e];for(const e in t)r[e]=t[e]}return r},t.combine=function(...t){const r=t.map(t=>t.byteLength).reduce((t,r)=>t+r),e=new Uint8Array(r);let n=0;return t.map(t=>new Uint8Array(t)).forEach(t=>{for(const r of t)e[n++]=r}),e.buffer},t.isEqual=function(t,r){if(!t||!r)return!1;if(t.byteLength!==r.byteLength)return!1;const e=new Uint8Array(t),n=new Uint8Array(r);for(let s=0;s<t.byteLength;s++)if(e[s]!==n[s])return!1;return!0},Object.defineProperty(t,"__esModule",{value:!0})}(r)})));export{n as i}