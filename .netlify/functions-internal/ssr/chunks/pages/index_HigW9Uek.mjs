import { e as createAstro, f as createComponent, i as defineStyleVars, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent, k as renderSlot, l as renderHead } from '../astro_j8y6DCp3.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Image } from './generic_MzKViaLc.mjs';
/* empty css                          */

const imgLogo = new Proxy({"src":"/_astro/logo.0bNtQfg6.png","width":500,"height":72,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/moriel/code/projects/technically.lol/technically.lol/src/assets/logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Logo;
  const imgWidth = imgLogo.width;
  const imgHeight = imgLogo.height;
  const $$definedVars = defineStyleVars([{ imgWidth, imgHeight }]);
  return renderTemplate`${maybeRenderHead()}<div class="logo" data-astro-cid-tvrurpns${addAttribute($$definedVars, "style")}> <div class="logo-image" data-astro-cid-tvrurpns${addAttribute($$definedVars, "style")}>${renderComponent($$result, "Image", $$Image, { "src": "/src/assets/logo.png", "width": imgWidth, "height": imgHeight, "alt": "logo", "data-astro-cid-tvrurpns": true })}</div> <h1 class="logo-subtitle" data-astro-cid-tvrurpns${addAttribute($$definedVars, "style")}>technically funny.</h1> </div>  `;
}, "/home/moriel/code/projects/technically.lol/technically.lol/src/components/Logo.astro", void 0);

const $$Astro$4 = createAstro();
const $$MenuItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MenuItem;
  const { icon, name, text, currentPage } = Astro2.props;
  const images = {
    "css": () => import('../icon-css_-H6wdxef.mjs'),
    "html": () => import('../icon-html_TSygL6Tl.mjs'),
    "js": () => import('../icon-js_nGmEVcIf.mjs')
  };
  const iconSrc = images[icon || "html"];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["menu-item", { active: currentPage === name }], "class:list")} data-astro-cid-jrov5ssf> <div class="menu-item-icon" data-astro-cid-jrov5ssf> ${renderComponent($$result, "Image", $$Image, { "src": iconSrc(), "alt": "CSS icon", "width": "25", "data-astro-cid-jrov5ssf": true })} </div> <div class="menu-item-text" data-astro-cid-jrov5ssf> <span data-astro-cid-jrov5ssf>${text}</span> </div> </div> `;
}, "/home/moriel/code/projects/technically.lol/technically.lol/src/components/MenuItem.astro", void 0);

const $$Astro$3 = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Menu;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="menu" data-astro-cid-2j44jlrm> ${renderComponent($$result, "MenuItem", $$MenuItem, { "icon": "js", "name": "index", "text": "about_me.js", "currentPage": page, "data-astro-cid-2j44jlrm": true })} ${renderComponent($$result, "MenuItem", $$MenuItem, { "icon": "html", "name": "videos", "text": "funny_videos.html", "currentPage": page, "data-astro-cid-2j44jlrm": true })} ${renderComponent($$result, "MenuItem", $$MenuItem, { "icon": "css", "name": "invite", "text": "invite_me_to_your_event.css", "currentPage": page, "data-astro-cid-2j44jlrm": true })} </div> `;
}, "/home/moriel/code/projects/technically.lol/technically.lol/src/components/Menu.astro", void 0);

const $$Astro$2 = createAstro();
const $$ContentContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContentContainer;
  return renderTemplate`${maybeRenderHead()}<div class="content-container" data-astro-cid-ekim2btj> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/home/moriel/code/projects/technically.lol/technically.lol/src/components/ContentContainer.astro", void 0);

const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { page } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Moriel Schottlender: Technically Funny</title>${renderHead()}</head> <body> ${renderComponent($$result, "Logo", $$Logo, {})} ${renderComponent($$result, "Menu", $$Menu, { "page": page })} ${renderComponent($$result, "ContentContainer", $$ContentContainer, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} <div class="moriel-corner"></div> </body></html>`;
}, "/home/moriel/code/projects/technically.lol/technically.lol/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "page": "index" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>.</p> <p>.</p> <p>.</p> <p>.</p> <p>.</p> <p>.</p> <p>.</p> <p>.</p> <p>.</p> ` })}`;
}, "/home/moriel/code/projects/technically.lol/technically.lol/src/pages/index.astro", void 0);

const $$file = "/home/moriel/code/projects/technically.lol/technically.lol/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
