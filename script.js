var photo = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
        var brand = ["RX-100","MAC BOOK 11 PRO","i-phone-X","MARUTHI-800","FURNITURES","JPL-headset"];
        var rup = [150000, 100000, 40000, 80000, 3000, 1500];
        var value = 0;

        for (i = 0; i < 6; i++) {

            var first = document.createElement("div");
            first.setAttribute("class", "creat");
            split.appendChild(first);

            var images = document.createElement("img");
            images.setAttribute("src", photo[i]);
            images.setAttribute("width", "100%");
            images.setAttribute("height", "175px");
            images.setAttribute("id", "image")
            first.appendChild(images);

            var second = document.createElement("div");
            second.innerText = brand[i];
            second.setAttribute("id", "seconds")
            first.appendChild(second);

            var third = document.createElement("div");
            third.innerText = "₹" + " " + rup[i];
            third.setAttribute("id", "thirds")
            first.appendChild(third);

            var but = document.createElement("button");
            but.innerText = "Buy";
            but.setAttribute("id", i)
            but.setAttribute("class", "but")
            but.addEventListener("click", function () {

                this.disabled = true;
                var out = document.createElement("div");
                out.setAttribute("class", "show");
                out.setAttribute("id", rup[this.id]);
                out.innerText = brand[this.id] + " - " + "₹" + rup[this.id];
                value = value + rup[this.id];
                center.appendChild(out);
                document.getElementById("last").innerHTML = "Total :" + value;

                var cols = document.createElement("div");
                cols.setAttribute("id", "close");
                out.appendChild(cols);

                var min = document.createElement("button");
                min.innerText = "X";
                min.setAttribute("id", [this.id]);
                min.setAttribute("class", "finish");
                min.addEventListener("click", function () {

                    document.getElementById(this.id).disabled = false;
                    document.getElementById("last").innerHTML = "Total :" + (value = value - rup[this.id])
                    out.style.display = "none";

                })
                cols.appendChild(min);
            })
            first.appendChild(but);
        }