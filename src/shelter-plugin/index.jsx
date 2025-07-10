const {
	util: { log },
    ui: { injectCSS },
} = shelter;

import css from './couve.theme.css';

export function onLoad() {
	// you can safely run onLoad actions at the top level!
    shelter.plugin.scoped.ui.injectCss(css);
    
    const existingQuickCss = document.getElementById("couve.dev");
    if (existingQuickCss) {
        existingQuickCss.remove();
    }

     const quickStyleElement = document.createElement("style");
    quickStyleElement.id = "couve.dev";
    document.body.insertBefore(quickStyleElement, document.body.firstChild);

    quickStyleElement.innerHTML = css;
}

export function onUnload() {
    // you can safely run onUnload actions at the top level!
    const existingQuickCss = document.getElementById("couve.dev");
    if (existingQuickCss) {
        existingQuickCss.remove();
    }
    log("onUnload called");
}