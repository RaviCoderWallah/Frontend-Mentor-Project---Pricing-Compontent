const switchContainer = document.querySelector(".switch-bar-container");
const switchBar = document.querySelector(".inner-switch-circle");


switchBar.addEventListener("click", () => {
    switchContainer.classList.toggle("active");

    if (switchContainer.classList.contains("active")) {
        cardContent();
    }
});


function cardContent(){
    const cardContainer = document.querySelector(".pricing-card-container");
    const cardInnerHTML = `
            <div class="pricing-cards" id="pricing-card-1">
                <h3>Basic</h3>
                <h1>$19.99</h1>
                <hr>
                <p>500 GB Storage</p>
                <hr>
                <p>2 Users Allowed</p>
                <hr>
                <p>Send up to 3 GB</p>
                <div class="btn-container">
                    <button class="btn">Learn More</button>
                </div>
            </div>
            <div class="pricing-cards" id="pricing-card-2">
                <h3>Professional</h3>
                <h1>$24.99</h1>
                <hr>
                <p>1 TB Storage</p>
                <hr>
                <p>5 Users Allowed</p>
                <hr>
                <p>Send up to 10 GB</p>
                <div class="btn-container" id="btn-2">
                    <button class="btn">Learn More</button>
                </div>
            </div>
            <div class="pricing-cards" id="pricing-card-3">
                <h3>Master</h3>
                <h1>$39.99</h1>
                <hr>
                <p>2 TB Storage</p>
                <hr>
                <p>10 Users Allowed</p>
                <hr>
                <p>Send up to 20 GB</p>
                <div class="btn-container">
                    <button class="btn">Learn More</button>
                </div>
            </div>
  `

    cardContainer.innerHTML = cardInnerHTML;
}



