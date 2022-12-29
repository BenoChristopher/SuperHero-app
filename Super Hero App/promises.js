
// const dogeimg=document.getElementById('dogimage')

// getnewdog=()=>{fetch('https://dog.ceo/api/breeds/image/random')
// .then(response=>response.json())
// .then(json=>{
//     console.log(json.message)

//     dogeimg.innerHTML=`<img src='${json.message}'height=400px
//     weith=700px/>`
    

// })}



// const newdog=document.getElementById('newdog')

// newdog.onclick=()=>getnewdog()

// // newdog.onclick=()=>{
// //     window.location.reload()
// // }

// getsuperher=()=>{
//     fetch('https://superheroapi.com/api.php/10223569763528853/245')
//     .then(response=>response.json())
//     .then(json=>console.log(json.image.url))

    

// }
// getsuperher()
const superherotoken='10223569763528853'
const baseurl=`https://superheroapi.com/api.php/${superherotoken}`

fetch(`${baseurl}/${224}`)
.then(response=>response.json())
.then(json=>{console.log(json)})


const superherobutton=document.getElementById('superbutton')
const heroimage=document.getElementById('heroimage')
const searchbar=document.getElementById('searchhero')
const searchinput=document.getElementById('searchinput')
const power=document.getElementById('power')
const heroname=document.getElementById('name')


getsuperher=(id,name)=>{


    fetch(`${baseurl}/${id}`)
    .then(response=>response.json())
    .then(json=>{console.log(json)

       // getpowerstats(json)
       const powers=`<div>Power🐗  :${json.powerstats.power}</div>`
      const streng=`<div>Strength😈:${json.powerstats.strength}</div>`
     const speed=`<div> Speed💪    :${json.powerstats.speed}</div>`
const strength=`<div>Durability⚡ :${json.powerstats.durability}</div>`
power.innerHTML=`<div>Intelligence 🧠:${json.powerstats.intelligence}<div/>${strength}${streng}${powers}${speed}`
       heroname.innerHTML=`<p>${json.name}</p2>`
    heroimage.innerHTML=`<img src='${json.image.url}' height=300px width=500px/>`

})

}

// randomnum=()=>{
    
//     const num=Math.floor(Math.random()*500)
//     return num
// }
// superherobutton.onclick=()=> getsuperher(randomnum())
 

superherobutton.onclick=()=> getsuperher(Math.floor(Math.random()*730))


   
searchsuperhero=(name)=>{
   //console.log(searchinput.value)
    
    fetch(`${baseurl}/search/${name}`)
    .then(response=>response.json())
    .then(json=>{const hero=json.results[0]
      

       console.log(hero)
       console.log(json)
       const powers=`<div>Power🐗  :${hero.powerstats.power}</div>`
       const streng=`<div>Strength😈:${hero.powerstats.strength}</div>`
      const speed=`<div> Speed💪    :${hero.powerstats.speed}</div>`
 const strength=`<div>Durability⚡ :${hero.powerstats.durability}</div>`
 power.innerHTML=`<div>Intelligence 🧠:${hero.powerstats.intelligence}<div/>${strength}${streng}${powers}${speed}`
        heroname.innerHTML=`<p>${hero.name}</p2>`
    heroimage.innerHTML=`<img src='${hero.image.url}' height=300px width=500px/>`
   

})

}

//superherobutton.onclick=()=> getsuperher(Math.floor(Math.random()*500))

searchbar.onclick=()=> searchsuperhero(searchinput.value)

// const getpowerstats=(Char)=>{

//     for(stats in Char.powerstats){
//         console.log(stats)
//     }
// }







// let m=["beno","christopher"].join('')
// //m.join('')
// console.log(m)


 
