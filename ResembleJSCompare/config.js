(
    function (document) {
        "use strict";
        let btnOnlyPassed = document.querySelector("#btn-comp-passed");
        btnOnlyPassed.addEventListener("click", () => {
            showAll();
            showOnlyPassed();
        });

        let btnOnlyFailed = document.querySelector("#btn-comp-failed");
        btnOnlyFailed.addEventListener("click", () => {
            showAll();
            showOnlyFailed();
        });

        let btnAll = document.querySelector("#btn-comp-all");
        btnAll.addEventListener("click", () => {
            showAll();
        });

        let btnCollpseAll = document.querySelector("#btn-collapse-all");
        btnCollpseAll.addEventListener("click", () => {
            collapse();
        });

        function showOnlyPassed() {
            document.querySelectorAll('div.collapse-comp-failed').forEach(item => {
                item.style.display = "none";
            });
        }

        function showOnlyFailed() {
            document.querySelectorAll('div.collapse-comp-passed').forEach(item => {
                item.style.display = "none";
            });
        }

        function showAll() {
            document.querySelectorAll('div.collapse-comp-passed, div.collapse-comp-failed').forEach(item => {
                item.style.display = "block";
            });
        }

        function collapse() {
            let classNameCollapse = 'collapsed';
            let classNameMultiCollapse = 'show';
            document.querySelectorAll('button.accordion-button').forEach(item => {
                if (item.classList.contains(classNameCollapse)) {
                    item.classList.remove(classNameCollapse)
                    item.setAttribute("aria-expanded", "true");
                } else {
                    item.classList.add(classNameCollapse)
                    item.setAttribute("aria-expanded", "false");
                }
            });
            document.querySelectorAll('div.accordion-collapse').forEach(item => {
                if (item.classList.contains(classNameMultiCollapse)) {
                    item.classList.remove(classNameMultiCollapse)
                } else {
                    item.classList.add(classNameMultiCollapse)
                }
            });
        }


        const ready = (callback) => {
            if (document.readyState != "loading") callback();
            else document.addEventListener("DOMContentLoaded", callback);
        };
        ready(() => {
            const img = document.getElementById("image");
            const simpleModal = document.getElementById("simple-modal");
            simpleModal.addEventListener("show.bs.modal", (e) => {
                const bigImage = e.relatedTarget.getAttribute('data-bigimage')
                img.src = bigImage;
            });
        });
    }
)(document);