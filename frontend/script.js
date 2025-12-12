import { paintings } from "./api/paintings.js";
console.log(paintings);

const container = document.getElementById("cards-container");

paintings.forEach(p => {
    const card = `
        <main>
            <div class="parent">
                <img src="${p.image}" alt="" height="200px" class="g">
                <div class="b">COST - ${p.price} RS</div>
                <div class="c">SIZE - ${p.size}</div>
                <div class="e">MEDIUM - ${p.medium.toUpperCase()}</div>
                <div class="f">PAPER THICKNESS - ${p.Paper_Thickness} GSM</div>
                <div class="d">
                    <button class="de">Buy Now</button>
                    <button class="de">Add to Cart</button>
                </div>
            </div>
        </main>
    `;

    container.innerHTML += card;
});
