import{h as t,r as i}from"./p-ccfcf823.js";import{g as e}from"./p-eaa13968.js";import{C as r}from"./p-108a29fa.js";
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the BSD 3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */const c=i=>t("svg",Object.assign({},i,{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),t("path",{d:"M16.05 6.95C14.912 5.731 13.287 5 11.5 5 7.925 5 5 7.925 5 11.5S7.925 18 11.5 18c3.006 0 5.525-2.113 6.256-4.875H16.05c-.65 1.869-2.438 3.25-4.55 3.25A4.89 4.89 0 016.625 11.5 4.89 4.89 0 0111.5 6.625c1.381 0 2.519.569 3.412 1.463l-2.6 2.6H18V5l-1.95 1.95z",fill:"#B6C3CC"})),o=class{constructor(t){i(this,t),this.certificates=[]}static renderCertificatesEmpty(){return[t(r,{class:"icon_certificate_empty"}),t("peculiar-fortify-typography",{align:"center",class:"title_certificates_emty",color:"grey_5"},e("certificates.empty.title")),t("peculiar-fortify-typography",{color:"grey_4",type:"c1",align:"center"},e("certificates.empty.description")),t("peculiar-fortify-button",{href:"https://fortifyapp.com",bgType:"clear",class:"button_certificates_emty",colorText:"primary"},e("actions.needHelp"))]}static renderCertificatesLoading(){return t("peculiar-fortify-loader",{class:"loader"})}renderCertificatesList(){return this.certificates.map(i=>t("peculiar-fortify-certificate",{key:i.index,onClick:this.onCertificate.bind(this,i.index),certificate:i,isSelected:this.certificateSelectedIndex===i.index,onDetails:this.onCertificateDetails.bind(this,i.providerID,i.index)}))}render(){let i=null;switch(!0){case this.loading:i=t("div",{class:"certificates_container_center"},o.renderCertificatesLoading());break;case this.certificates.length>0:i=this.renderCertificatesList();break;default:i=t("div",{class:"certificates_container_center"},o.renderCertificatesEmpty())}return t("peculiar-fortify-layout",{type:"dialog",titleValue:e("certificates.title"),slotDialogContent:t("peculiar-fortify-box",{class:"certificates_container",stroke:"grey_3"},i)},t("peculiar-fortify-button",{onClick:this.onUpdate,bgType:"clear",class:"button_refresh",disabled:this.loading},t(c,{slot:"icon"}),e("actions.updateCertificates")),t("peculiar-fortify-button-group",null,t("peculiar-fortify-button",{onClick:this.onCancel,disabled:this.loading},e("actions.cancel")),t("peculiar-fortify-button",{bgType:"fill",color:"secondary",colorText:"light",disabled:this.loading||!this.allowContinue,onClick:this.onContinue},e("actions.continue"))))}};o.style=":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}peculiar-fortify-certificates-list{display:block;width:100%;height:100%}peculiar-fortify-certificates-list .certificates_container{border-radius:3px;height:100%;overflow:auto}peculiar-fortify-certificates-list .certificates_container_center{height:100%;width:100%;padding:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column}peculiar-fortify-certificates-list .icon_certificate_empty{width:20px;height:30px;margin-bottom:34px}peculiar-fortify-certificates-list .title_certificates_emty{margin-bottom:4px}peculiar-fortify-certificates-list .button_certificates_emty{margin-top:18px}peculiar-fortify-certificates-list .button_refresh{--pv-button-padding-end:6px;--pv-button-padding-start:0px}";const s=class{constructor(t){i(this,t),this.downloadAppLink="https://fortifyapp.com#download_app"}render(){return t("peculiar-fortify-layout",{type:"message",titleValue:e("unsupportedVersion.title"),descriptionValue:e("unsupportedVersion.description")},t("peculiar-fortify-button",{href:this.downloadAppLink,bgType:"fill",color:"secondary",colorText:"light"},e("actions.update")))}};s.style=":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}peculiar-fortify-client-update{width:100%;display:block;height:100%}peculiar-fortify-client-update>peculiar-fortify-layout{height:100%}";export{o as peculiar_fortify_certificates_list,s as peculiar_fortify_client_update}