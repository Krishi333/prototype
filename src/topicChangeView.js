// making it so clicking the change view will change the flex display of them
let topicResultsContain = document.querySelector(".topicResultContainer");
let topicResults = document.querySelectorAll(".topicResults");
let currentViewMode = 1;
function changeViewWrap(){ 

    switch (currentViewMode) {
        case 1:
            currentViewMode = 2;
            topicResultsContain.style.flexWrap = "wrap";
            topicResultsContain.style.flexDirection = "row";
            topicResults.forEach(child => {
                child.style.flex = "0 0 calc(50% - var(--small-Gap))";
                child.style.height = "10rem";
                
            });
            break;
        case 2: 
            currentViewMode = 3;
            topicResultsContain.style.flexWrap = "wrap";
            topicResultsContain.style.flexDirection = "row";
            topicResults.forEach(child => {
                child.style.flex = "0 0 calc(25% - var(--small-Gap))";
                child.style.height = "10rem";

            });
            break;
        case 3: 
            currentViewMode = 1
            topicResultsContain.style.flexWrap = "nowrap";
            topicResultsContain.style.flexDirection = "column";
            topicResults.forEach(child => {
                child.style.height = "5rem";

            });

            break;
        case _:
            console.log("error, in switch view");
    }
}

let changeView = document.querySelector(".changeView");
changeView.addEventListener("click",changeViewWrap)
