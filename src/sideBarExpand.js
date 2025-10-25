let sidebar = document.querySelector(".sidebar");
let sidebarChildren = sidebar.children;
function addText() {
    for (let i =0; i< sidebarChildren.length; i++) {
        let child = sidebarChildren[i];
        let addition = child.getAttribute("title");
        let icon = child.querySelector("i");
        if (!child.querySelector(".childText")) {
            let textContainer = document.createElement("span");
            textContainer.className = "childText";
            textContainer.textContent = "  " + addition;
            icon.after(textContainer);
        }
    }
}
function removeText(){
    for (let i = 0; i<sidebarChildren.length; i++){
        let child = sidebarChildren[i];
        let textContainer = child.querySelector(".childText");
        if (textContainer) {
            textContainer.remove();
        }
    }
}
sidebar.addEventListener("mouseenter", addText);
sidebar.addEventListener("mouseleave", removeText);
