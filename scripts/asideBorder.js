const borderColorChange = () => {
    let tipDivs = document.querySelectorAll(".tip");

    for (const tip of tipDivs) {
        tip.addEventListener("mouseover", function (event) {
            tip.style.border = "1px dotted yellow";

        })
        
        tip.addEventListener("mouseout", function (event) {
            tip.style.border = "0";
                })

    }
}

export default borderColorChange