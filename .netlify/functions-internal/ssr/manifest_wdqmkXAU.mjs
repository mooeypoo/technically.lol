import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_j8y6DCp3.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@keyframes typing{0%{width:0}to{width:100%}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:orange}}.logo[data-astro-cid-tvrurpns]{position:fixed;display:flex;flex-direction:column;justify-content:center;align-items:center;top:1em;left:0;width:100%}.logo[data-astro-cid-tvrurpns] h1[data-astro-cid-tvrurpns]{display:inline-block;font-family:Courier New,Courier,monospace;overflow:hidden;border-right:.15em solid orange;white-space:nowrap;margin:0 auto;letter-spacing:.15em;animation:blink-caret .75s step-end infinite}@media screen and (max-width: 950px){.logo[data-astro-cid-tvrurpns] img[data-astro-cid-tvrurpns]{width:375px;height:54px}.logo[data-astro-cid-tvrurpns] h1[data-astro-cid-tvrurpns]{font-size:1.5em}}@media screen and (max-width: 400px){.logo[data-astro-cid-tvrurpns]{left:0;width:100%}.logo[data-astro-cid-tvrurpns] h1[data-astro-cid-tvrurpns]{font-size:1.2em}.logo[data-astro-cid-tvrurpns] img[data-astro-cid-tvrurpns]{width:250px;height:36px}}.menu-item[data-astro-cid-jrov5ssf]{display:flex;flex-direction:row;align-items:center;gap:.5em}.menu-item[data-astro-cid-jrov5ssf].active{color:#0ff;font-weight:700}.menu-item-icon[data-astro-cid-jrov5ssf] img[data-astro-cid-jrov5ssf]{width:25px;height:25px}.menu-item-text[data-astro-cid-jrov5ssf]{font-family:Courier New,Courier,monospace}@media screen and (max-width: 950px){.menu-item-icon[data-astro-cid-jrov5ssf] img[data-astro-cid-jrov5ssf]{width:20px;height:20px}.menu-item-text[data-astro-cid-jrov5ssf]{font-size:.9em}}@media screen and (max-width: 400px){.menu-item-icon[data-astro-cid-jrov5ssf] img[data-astro-cid-jrov5ssf]{width:16px;height:16px}.menu-item-text[data-astro-cid-jrov5ssf]{font-size:.8em}}.menu[data-astro-cid-2j44jlrm]{position:fixed;top:10em;left:0;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;gap:1.5em}@media screen and (max-width: 950px){.menu[data-astro-cid-2j44jlrm]{top:8em;gap:1em}}@media screen and (max-width: 400px){.menu[data-astro-cid-2j44jlrm]{top:6em;gap:.5em}}.content-container[data-astro-cid-ekim2btj]{display:flex;position:fixed;top:14em;left:30em;overflow:auto;flex-direction:column;align-items:center;height:100vh;width:calc(100% - 32em);height:calc(100vh - 16em)}@media screen and (max-width: 950px){.content-container[data-astro-cid-ekim2btj]{width:calc(100% - 27em);height:calc(100vh - 14em);left:25em;top:12em}}@media screen and (max-width: 750px){.content-container[data-astro-cid-ekim2btj]{width:calc(100% - 2em);left:1em;top:10em}}body{background-color:#22191f;color:#fff;margin:0;padding:2em}.moriel-corner{position:fixed;bottom:0;left:0;height:700px;width:700px;background-image:url(/_astro/moriel-corner.vBdZ4e9t.png);background-size:contain;background-repeat:no-repeat}@media screen and (max-width: 950px){.moriel-corner{width:600px;height:600px}}@media screen and (max-width: 750px){.moriel-corner{z-index:-1;opacity:.4}}@media screen and (max-width: 400px){.moriel-corner{width:350px;height:350px}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/moriel/code/projects/technically.lol/technically.lol/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_HigW9Uek.mjs","\u0000@astrojs-manifest":"manifest_wdqmkXAU.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_m714UdSo.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_pc6qNbJw.mjs","/home/moriel/code/projects/technically.lol/technically.lol/src/assets/icon-css.png":"chunks/icon-css_-H6wdxef.mjs","/home/moriel/code/projects/technically.lol/technically.lol/src/assets/icon-html.png":"chunks/icon-html_TSygL6Tl.mjs","/home/moriel/code/projects/technically.lol/technically.lol/src/assets/icon-js.png":"chunks/icon-js_nGmEVcIf.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/moriel-corner.vBdZ4e9t.png","/_astro/logo.0bNtQfg6.png","/_astro/icon-css.pYm_di7P.png","/_astro/icon-html.F-qfH98c.png","/_astro/icon-js.ujCcd-_w.png","/favicon.svg"]});

export { manifest };
