import{e as c,j as r,T as a,d as l,R as u,a as f}from"./vendor.a4f8aec3.js";const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};p();function m(){c.exports.setEditing(!0);const n="https://content.tinajs.io/content/11e2bb0d-e8ae-40e5-ab5a-005e63f52b30/github/temp";return r(c.exports.TinaEditProvider,{editMode:r(a,{apiURL:n,children:r(l.exports.TinaAdmin,{})}),children:r("div",{children:"Need to be in edit mode!"})})}u.render(r(f.StrictMode,{children:r(m,{})}),document.getElementById("root"));
