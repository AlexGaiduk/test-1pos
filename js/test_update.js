window.addEventListener("load", function(){
    let tabs = document.querySelectorAll(".feature__tab");
    let featureTable = document.querySelectorAll(".toggle-content");

    function displayContent(e) {
        e.preventDefault();
        let tabIndex = this.dataset.tabIndex;
        for (let i = 0; i < featureTable.length; i++) {
            if (featureTable[i].dataset.tabIndex === tabIndex) {
                featureTable[i].classList.add("is-visible");
            } else {
                featureTable[i].classList.remove("is-visible");
            };
        };

        for (let j = 0; j < tabs.length; j++) {
            if (this !== tabs[j]) {
                tabs[j].classList.remove("is-active");
            } else {
                tabs[j].classList.add("is-active");
            };
        };
    }
    tabs.forEach(item => item.addEventListener("click", displayContent));

    // toggle
    let featureBtn = document.getElementsByClassName("feature__header");
    
    for (let i = 0; i < featureBtn.length; i++) {
        featureBtn[i].addEventListener("click", function() {
        this.classList.toggle("is-open");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
      });
    }
})();