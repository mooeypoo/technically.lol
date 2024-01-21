const iconJs = new Proxy({"src":"/_astro/icon-js.ujCcd-_w.png","width":100,"height":106,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/moriel/code/projects/technically.lol/technically.lol/src/assets/icon-js.png";
							}
							
							return target[name];
						}
					});

export { iconJs as default };
