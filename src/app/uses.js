"use client"
import React from "react"
import {useEffect} from "react";



export default function Uses(props) {

  useEffect(() => {
    var j = document.querySelector('.img-cov')
    var b = document.querySelectorAll('.image-wrapper img')
    var k = document.querySelectorAll('.image-wrapper p')
    var paper = document.querySelector('.img-text')
    var kk = props.kook
    var spoiler = props.su

    k.forEach((element , index, array) => {
      element.innerHTML = kk[index].substring(0, 15) + '<br>' + kk[index].substring(15, 34);
    })

    b.forEach((element, index, array) => {
      element.addEventListener('click', function() {
        j.src = element.src
        paper.innerHTML = spoiler[index].substring(0, 272)
      })
    })




    
})
  

    return(<>
    </>
    )
   
}
   
   
   
   