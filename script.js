const header = document.querySelector('header');

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});



document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    const showMoreBtn = document.getElementById("showMoreBtn");
    let showMore = false;

    items.forEach((item) => {
        const title = item.querySelector(".FAQ-title");
        title.addEventListener("click", () => {
            // If the item is already selected, remove the class, else apply it
            if (item.classList.contains("selected")) {
                item.classList.remove("selected");
            } else {
                // Remove selected class from all items and close them
                items.forEach((el) => {
                    el.classList.remove("selected");
                });
                // Add the selected class to the clicked item
                item.classList.add("selected");
            }
        });
    });

    showMoreBtn.addEventListener("click", () => {
        showMore = !showMore;
        const itemsToShow = showMore ? items.length : 4;
        items.forEach((item, index) => {
            item.style.display = index < itemsToShow ? "block" : "none";
        });
        showMoreBtn.textContent = showMore ? "Show Less" : "Show More";
    });

    // Initialize the FAQ display
    items.forEach((item, index) => {
        item.style.display = index < 4 ? "block" : "none";
    });
});




