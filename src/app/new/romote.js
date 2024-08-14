"use client"
import '../Gone.css';
import {useEffect} from 'react';



export default function Usezz(props){
        var i = 1000
        var movieName = props.title
        var addUps = props.votes
        var weekUnderline = props.weekYes
        var weekUnderStars = props.weekDone

        


        useEffect(()=> {
            var alias = document.querySelectorAll('.image-flask p')
            var stars = document.querySelectorAll('.image-flask span')
            var weekFile = document.querySelectorAll('.imgae-flask-week p')
            var weekStars = document.querySelectorAll('.imgae-flask-week span')


            alias.forEach((element, index, array) => {
                element.innerHTML = movieName[index].substring(0, 18) + '<br>' + '...'
            })
            
            stars.forEach((element, index, array) => {
                element.innerHTML = addUps[index] + '☆'
            }) 

            weekFile.forEach((element , index , array) => {
                element.innerHTML = weekUnderline[index].substring(0, 18) + '<br>' + '...'

            })

            weekStars.forEach((element, index, array) => {
                element.innerHTML = weekUnderStars[index] + '☆'
            })


        })

    return(
        <div>
            
        </div>
    )

}

