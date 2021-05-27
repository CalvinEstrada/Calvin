 let bg = document.getElementById("bg")
        let moon = document.getElementById("moon")
        let mountain = document.getElementById("mountain")
        let text = document.getElementById("text")

        window.addEventListener('scroll', function(){
            var value = window.scrollY;
            bg.style.top = value * 0.5 + 'px';
            moon.style.left = -value * 0.5 + 'px';
            mountain.style.top= value * 1 + 'px';
            text.style.left = value * 1 + 'px';

        })

      VanillaTilt.init(document.querySelectorAll(".card"), {
		max: 25,
		speed: 400,
    glare: true,
    "max-glare": 1,
	});
      VanillaTilt.init(document.querySelectorAll(".jumbo"), {
		max: .5,
		speed: 400,
    glare: true,
    "max-glare": 1,
	});