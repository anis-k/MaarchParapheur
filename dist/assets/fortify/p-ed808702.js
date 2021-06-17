import{A as t,d as s,e as r,N as e,E as i,f as n,g as o,h as a,R as h,j as u,k as c,l as m}from"./p-d1e2b384.js";import{d as g}from"./p-566511ea.js";import{m as f,f as l}from"./p-e1655586.js";
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */class p extends t{constructor(t){super(s(t),f),this.thumbprints={};const{tbsCertificate:i}=this.asn;this.serialNumber=r.Convert.ToHex(i.serialNumber),this.subject=new e(i.subject).toJSON(),this.issuer=new e(i.issuer).toJSON(),this.version=i.version+1;const n=i.validity.notBefore.utcTime||i.validity.notBefore.generalTime;if(!n)throw new Error("Cannot get 'notBefore' value");this.notBefore=n;const o=i.validity.notAfter.utcTime||i.validity.notAfter.generalTime;if(!o)throw new Error("Cannot get 'notAfter' value");this.notAfter=o,this.validity=g(this.notBefore,this.notAfter)}parseExtensions(){const{tbsCertificate:t}=this.asn;t.extensions&&(this.extensions=t.extensions.map(t=>new i(l.serialize(t))))}get publicKey(){const{subjectPublicKey:t,algorithm:s}=this.asn.tbsCertificate.subjectPublicKeyInfo;let r;return s.algorithm===n&&s.parameters&&(r=l.parse(s.parameters,o)),s.algorithm===a&&(r=l.parse(t,h)),{params:r,value:l.serialize(this.asn.tbsCertificate.subjectPublicKeyInfo),algorithm:s.algorithm}}get signature(){const{signatureValue:t,signatureAlgorithm:s}=this.asn;return{value:t,algorithm:s.algorithm}}exportAsBase64(){return r.Convert.ToBase64(this.raw)}exportAsHexFormatted(){return u(r.Convert.ToHex(this.raw))}exportAsPemFormatted(){return`-----BEGIN CERTIFICATE-----\n${c(this.exportAsBase64())}\n-----END CERTIFICATE-----`}async getThumbprint(t="SHA-1"){try{const s=await m(t,this.raw);this.thumbprints[t.name||t]=r.Convert.ToHex(s)}catch(s){console.error("Error thumbprint get:",s)}}get commonName(){if(!this.subject)return"";for(let t=0;t<this.subject.length;t+=1){const s=this.subject[t];if("CN"===s.shortName||"E"===s.shortName||"O"===s.shortName)return s.value}return""}get issuerCommonName(){if(!this.issuer)return"";for(let t=0;t<this.issuer.length;t+=1){const s=this.issuer[t];if("CN"===s.shortName)return s.value;if("E"===s.shortName)return s.value}return""}get isRoot(){return JSON.stringify(this.issuer)===JSON.stringify(this.subject)}subjectToString(){return this.subject?this.subject.map(t=>`${t.shortName}=${t.value}`).join(", "):""}issuerToString(){return this.issuer?this.issuer.map(t=>`${t.shortName}=${t.value}`).join(", "):""}}export{p as X}