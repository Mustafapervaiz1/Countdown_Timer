const enddate = "11 may 2023 10:00 am";

const dates = (document.getElementById("endwali").innerHTML = enddate);
const input = document.querySelectorAll("input");

let clock = () => {
  const last_day_end = new Date(enddate);

  const now = new Date();

  let dif = Math.floor((last_day_end - now) / 1000);
  console.log(dif);

  if (dif < 0) return;

  /* convert into days*/
  //console.log(Math.floor(dif/3600/24)) ; first console sy check kia tha 17 number line ko
  input[0].value = Math.floor(dif / 3600 / 24);
  /* convert into hours*/

  input[1].value = Math.floor(dif / 3600) % 24;
  /* convert into minutes*/
  input[2].value = Math.floor(dif / 60) % 60;
  /* convert into seconds*/
  input[3].value = Math.floor(dif) % 60;
};
clock();
setInterval(() => {
  clock();
}, 1000);
