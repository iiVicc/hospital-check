
    const noBtn = document.getElementById("no");
    const yesBtn = document.getElementById("yes");
    const card = document.getElementById("card");

    // Make NO move only when hovered
    noBtn.parentElement.addEventListener("mousemove", () => {
      const x = Math.random() * 180 - 90;
      const y = Math.random() * 60 - 30;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });

    // YES click works reliably
    yesBtn.addEventListener("click", () => {
      card.innerHTML = `
        <div class="emoji">💘🥰</div>
        <h1>Nice one nurse!!! 💖💖💖</h1>
        <p>Three gbosa for you 👊🏾👊🏾👊🏾</p>

        <img
          class="gif"
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzU3MGVwanI1czB4eWQ4bHltMHNpbnh4dnptOXB4MGh2eTZsaW5leSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1xntGUIUXv8ehoj1bu/giphy.gif"
          alt="Celebration GIF"
        >
      `;
    });
 