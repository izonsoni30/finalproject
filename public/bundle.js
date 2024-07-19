(() => {
  "use strict";
  document.addEventListener("DOMContentLoaded", async () => {
    const t = document.getElementById("akuKu"),
      e = async () => {
        try {
          const e = await (async () => {
            try {
              return (await axios.get("https://webdev-be.vercel.app/products")).data;
            } catch (t) {
              throw t;
            }
          })();
          (t.innerHTML = ""),
            e.data.slice(0, 12).forEach((e, a) => {
              a % 4 == 0 && t.innerHTML;
              const c = document.createElement("div");
              c.classList.add("col-md-3"),
                (c.innerHTML = `<div class="card">\n                <div class="card-body">\n                  <h5 class="card-title">${e.name}</h5>\n                  <p class="card-text">$ ${e.price}</p>\n                </div>\n              </div>`),
                t.appendChild(c);
            });
        } catch (t) {
          console.log("err", t);
        }
      };
    await e();
    const a = document.getElementById("submitForm");
    a.addEventListener("submit", async (t) => {
      t.preventDefault();
      const c = new FormData(a),
        n = { name: c.get("name"), price: c.get("price"), currency: "USD" };
      try {
        await (async (t) => {
          try {
            return (await axios.post("https://webdev-be.vercel.app/products", t)).data;
          } catch (t) {
            throw t;
          }
        })(n),
          await e();
      } catch (t) {
        console.log("err", t);
      }
    });
  });
})();
