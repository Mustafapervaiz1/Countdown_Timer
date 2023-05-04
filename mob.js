 const enddate = '11 may 2023 10:00 am'

 const dates = document.getElementById("endwali").innerHTML = enddate
 const input = document.querySelectorAll("input")

 let clock = ( )=> {
    const last_day_end = new Date (enddate)
    
    const now = new Date ()
    
//dif check krty hain abhi or us date ma  *2*  milsecond ko second bhi bna diya sath hi

let dif = Math.floor((last_day_end - now)/1000)
console.log(dif);

if (dif < 0)return ; /* ****************************ya line nhi ai smaj */ 

                  /* convert into days*/ 
//console.log(Math.floor(dif/3600/24)) ; firast console sy check kia tha 17 number line ko    
    input[0].value =Math.floor(dif/3600/24) ;      /* ****************************ya line nhi ai smaj */
                      /* convert into hours*/
                      
   input[1].value = Math.floor(dif/3600) % 24 ;   /* ****************************ya line nhi ai smaj */
                     /* convert into minutes*/
   input[2].value = Math.floor(dif/60) % 60 ;   /* ****************************ya line nhi ai smaj */
                    /* convert into seconds*/
   input[3].value = Math.floor(dif) % 60 ;
     
}
clock()
setInterval(
    ()=>{
        clock()
    },
    1000
)
 

