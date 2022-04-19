//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let drink = document.querySelector('input').value
  const drinkPlus = drink.replace(/\s/g, '-')

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkPlus}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('.name').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('.ingredients-title').innerText = "Ingredients:"
        document.querySelector('.ingredient1').innerText = data.drinks[0].strIngredient1
        document.querySelector('.ingredient2').innerText = data.drinks[0].strIngredient2
        document.querySelector('.ingredient3').innerText = data.drinks[0].strIngredient3
        document.querySelector('.ingredient4').innerText = data.drinks[0].strIngredient4
        document.querySelector('.ingredient5').innerText = data.drinks[0].strIngredient5
        document.querySelector('.ingredient6').innerText = data.drinks[0].strIngredient6
        document.querySelector('.ingredient7').innerText = data.drinks[0].strIngredient7
        document.querySelector('.ingredient8').innerText = data.drinks[0].strIngredient8
        document.querySelector('.ingredient9').innerText = data.drinks[0].strIngredient9
        document.querySelector('.ingredient10').innerText = data.drinks[0].strIngredient10
        document.querySelector('.ingredient11').innerText = data.drinks[0].strIngredient11
        document.querySelector('.ingredient12').innerText = data.drinks[0].strIngredient12
        document.querySelector('.instructions-title').innerText = "Instructions:"
        document.querySelector('.instructions').innerText = data.drinks[0].strInstructions
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + drink + " drink')"
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}