
        const statsCarousel = document.getElementById("statsCarousel");
        let isDownStats = false;
        let startXStats;
        let scrollLeftStats;

        statsCarousel.addEventListener("mousedown", (e) => {
            isDownStats = true;
            statsCarousel.classList.add("dragging");
            startXStats = e.pageX - statsCarousel.offsetLeft;
            scrollLeftStats = statsCarousel.scrollLeft;
        });

        statsCarousel.addEventListener("mouseleave", () => {
            isDownStats = false;
            statsCarousel.classList.remove("dragging");
        });

        statsCarousel.addEventListener("mouseup", () => {
            isDownStats = false;
            statsCarousel.classList.remove("dragging");
        });

        statsCarousel.addEventListener("mousemove", (e) => {
            if (!isDownStats) return;
            e.preventDefault();
            const x = e.pageX - statsCarousel.offsetLeft;
            const walk = (x - startXStats) * 1.5; 
            statsCarousel.scrollLeft = scrollLeftStats - walk;
        });
   


      
        
        const carousel = document.getElementById("smileCarousel");
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener("mousedown", (e) => {
            isDown = true;
            carousel.classList.add("dragging");
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener("mouseleave", () => {
            isDown = false;
            carousel.classList.remove("dragging");
        });

        carousel.addEventListener("mouseup", () => {
            isDown = false;
            carousel.classList.remove("dragging");
        });

        carousel.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 1.5; 
            carousel.scrollLeft = scrollLeft - walk;
        });
  



        
       
        const patientCarousel = document.getElementById("patientCarousel");
        let isDraggingScroll = false;
        let startXScroll;
        let scrollLeftScroll;

        patientCarousel.addEventListener("mousedown", (e) => {
            isDraggingScroll = true;
            patientCarousel.classList.add("dragging");
            startXScroll = e.pageX - patientCarousel.offsetLeft;
            scrollLeftScroll = patientCarousel.scrollLeft;
        });

        patientCarousel.addEventListener("mouseleave", () => {
            isDraggingScroll = false;
            patientCarousel.classList.remove("dragging");
        });

        patientCarousel.addEventListener("mouseup", () => {
            isDraggingScroll = false;
            patientCarousel.classList.remove("dragging");
        });

        patientCarousel.addEventListener("mousemove", (e) => {
            if (!isDraggingScroll) return;
            e.preventDefault();
            const x = e.pageX - patientCarousel.offsetLeft;
            const walk = (x - startXScroll) * 1.5;
            patientCarousel.scrollLeft = scrollLeftScroll - walk;
        });
    