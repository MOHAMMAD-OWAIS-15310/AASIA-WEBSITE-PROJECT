import { paintings } from "./api/paintings.js";
console.log(paintings);

// const container = document.getElementById("cards-container");

// for(let p of paintings){
//     const card = `
//         <main>
//             <div class="parent">
//                 <a href="one_img.html">
//                 <img src="${p.image}" alt="" height="200px" class="g" >
//                 </a>
//                 <div class="b">COST - ${p.price} RS</div>
//                 <div class="c">SIZE - ${p.size}</div>
//                 <div class="e">MEDIUM - ${p.medium.toUpperCase()}</div>
//                 <div class="f">
//                     AVAILABLE ? 
//                     <span class="${p.Available === 'YES' ? 'available-yes' : 'available-no'}">
//                         ${p.Available}
//                     </span>
//                 </div>
//                    <div class="d">
//                     ${
//                         p.Available === "YES"
//                         ? `
//                             <button class="de">Buy Now</button>
//                             <button class="de">Add to Cart</button>
//                           `
//                         : `
//                             <button class="de notify">Notify Me</button>
//                           `
//                     }
//                 </div>
//                 </div>
//         </main>
//     `;

//     container.innerHTML += card;
// };


const container = document.getElementById("cards-container");

for(let p of paintings){
    const card = `
        <main>
            <div class="parent">
                <a href="one_img.html?img=${encodeURIComponent(p.image)}">
                <img src="${p.image}" alt="" height="200px" class="g" >
                </a>
                <div class="b">COST - ${p.price} RS</div>
                <div class="c">SIZE - ${p.size}</div>
                <div class="e">MEDIUM - ${p.medium.toUpperCase()}</div>
                <div class="f">
                    AVAILABLE ? 
                    <span class="${p.Available === 'YES' ? 'available-yes' : 'available-no'}">
                        ${p.Available}
                    </span>
                </div>
                   <div class="d">
                    ${
                        p.Available === "YES"
                        ? `
                            <button class="de">Buy Now</button>
                            <button class="de">Add to Cart</button>
                          `
                        : `
                            <button class="de notify">Notify Me</button>
                          `
                    }
                </div>
                </div>
        </main>
    `;

    container.innerHTML += card;
};
