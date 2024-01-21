const iconHtml = new Proxy({"src":"/_astro/icon-html.F-qfH98c.png","width":100,"height":106,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/moriel/code/projects/technically.lol/technically.lol/src/assets/icon-html.png";
							}
							
							return target[name];
						}
					});

export { iconHtml as default };
