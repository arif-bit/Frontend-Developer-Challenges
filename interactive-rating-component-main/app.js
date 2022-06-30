let ratings = document.querySelectorAll('.circle');
let btn = document.querySelector('.btn'); 
let question = document.querySelector('.question');
let result = document.querySelector('.result'); 
let result_value = document.querySelector('.result_value');


for (let i = 0; i < ratings.length; i++) {

    ratings[i].addEventListener('click', () => {

             
              let rating = ratings[i].innerHTML;
            

              for (let i = 0; i < ratings.length; i++) {
                ratings[i].classList.contains('selected')
                ratings[i].classList.remove('selected');
      }
            
      ratings[i].classList.add('selected');


      btn.addEventListener('click', () => {

        question.classList.add('hide');
        result_value.innerHTML=rating;


      })


      
              
    })

}