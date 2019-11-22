const addMouseOverEventListeners = () => {

    const fishCards = document.querySelectorAll(".fishies__card")

    for(const card of fishCards) {
        card.addEventListener("mouseover", (theMouseOverEvent) => {
                card.classList.add("highlightFish")
            })

        card.addEventListener("mouseout", (theMouseOverEvent) => {
                card.classList.remove("highlightFish")
            })
    }
}

export default addMouseOverEventListeners