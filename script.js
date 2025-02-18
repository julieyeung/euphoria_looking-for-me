const textElements = document.querySelectorAll(' .text1, .text3, .text4, .quote9');
        // Add mouseenter event to start the "runaway" effect

        function moveAwayFromCursor(event, element) {
            const elementRect = element.getBoundingClientRect();
            const offsetX = event.clientX - elementRect.left - elementRect.width / 2; // X distance from center of element
            const offsetY = event.clientY - elementRect.top - elementRect.height / 2; // Y distance from center of element
          
            // Calculate the distance from the cursor to the element center
            const distanceFromCursor = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
            
            // Set a dynamic multiplier to move even further away based on cursor distance
            const moveMultiplier = distanceFromCursor / 2; // Divide by 2 to make the effect more intense
            
            const angle = Math.atan2(offsetY, offsetX); // Angle between the element center and the cursor
          
            // Calculate movement based on the angle and dynamic multiplier
            const moveX = Math.cos(angle) * moveMultiplier;
            const moveY = Math.sin(angle) * moveMultiplier;
          
            // Apply the transformation to move the text further away dynamically
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
          }
          
          // Add mouseenter event to start the "runaway" effect
          textElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
              element.style.transition = 'transform 0.3s ease-out'; // Smooth transition with quicker easing
            });
            
            // Add mousemove event to move the text dynamically
            element.addEventListener('mousemove', (event) => {
              moveAwayFromCursor(event, element);
            });
            
            // Add mouseleave event to reset the position
            element.addEventListener('mouseleave', () => {
              element.style.transition = 'transform 0.3s ease-out'; // Smooth transition
              element.style.transform = 'translate(0, 0)'; // Reset to original position
            });
          });







window.onload = function() {
    // Select all elements with the class 'text1' under #text-container
    const textElements = document.querySelectorAll(".text1, .text2, .text3, .text4 ");

    // Set the opacity to 1 for each element to trigger the fade-in
    textElements.forEach((element) => {
        element.style.opacity = 0.2;
    });
};


function typeWriterEffect(element, text, speed, callback) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            element.style.borderRight = "none"; // Remove cursor at the end
            if (callback) callback();
        }
    }

    type();
}

function startTypewriterEffect() {
    const elements = document.querySelectorAll('.quote1, .quote2, .quote3, .quote4, .quote5, .quote6, .quote7, .quote8, .quote9' );
    let delay = 0;

    elements.forEach((element) => {
        const text = element.getAttribute("data-text") || "";
        setTimeout(() => {
            typeWriterEffect(element, text, 50);
        }, delay);
        delay += text.length * 50 + 500; // Delay based on text length
    });
}

startTypewriterEffect();
