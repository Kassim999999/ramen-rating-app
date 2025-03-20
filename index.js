const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ramen Restuarant", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 5, comment: "Sweet!" },
    { id: 2, name: "Naruto Ramen", restaurant: "Ramen Restuarant", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 4, comment: "love the flavor!" },
    { id: 3, name: "Nirvana Ramen", restaurant: "Ramen Restuarant", image: "https://moringa.instructure.com/courses/967/files/517799/preview", rating: 5, comment: "Taste so good!" },
    { id: 4, name: "Kojiro Ramen", restaurant: "Ramen Restuarant", image: "https://moringa.instructure.com/courses/967/files/517798/preview", rating: 3, comment: "Too much soup in the meal." },
    { id: 5, name: "Gyukotsu Ramen", restaurant: "Ramen Restuarant", image: "https://moringa.instructure.com/courses/967/files/517797/preview", rating: 2, comment: "Not my favorite." }
  ];
  
  
  
    function displayRamens () {
      const ramenMenu = document.getElementById('ramen-menu')
      ramenMenu.innerHTML = ``
      ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
      });
    }
  
    function handleClick(ramen) {
      console.log("clicked ramen:", ramen);
      
    document.querySelector('#ramen-image').src = ramen.image;
    document.querySelector('#ramen-name').textContent = ramen.name;
    document.querySelector('#ramen-restaurant').textContent = ramen.restaurant;
    document.querySelector('#ramen-rating').textContent = ramen.rating;
    document.querySelector('#ramen-comment').textContent = ramen.comment;
    }
  
    function addSubmitListener() {
      newRamen.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const newRamen = {
          id: ramens.length + 1,
          name: document.getElementById("name").value,
          restaurant: document.getElementById("restaurant").value,
          image: document.getElementById("image").value,
          rating: document.getElementById("rating").value,
          comment: document.getElementById("comment").value
        };
  
        ramens.push(newRamen);
  
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.classList.add("ramen-thumbnail");
        img.addEventListener("click", () => handleClick(newRamen));
        ramenMenu.appendChild(img);
  
        newRamen.reset();
      });
    }
  
    function main() {
      displayRamens();
      addSubmitListener()
    }
  
    main();
  





































































