
import './App.css';
import React, {  useState } from "react";
import $ from 'jquery'

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and saved to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  const [style] = useState("contbase");

//https://dev.to/nicm42/react-refs-in-a-loop-1jk4



  var xs = 30;
  var ys = 40;

  const x1 = [

                {
                  "x": xs + 65,
                  "y": ys + 130,
                  "txt" : "Acheivements",
                  "head" : "This is test ",
                  "desc" : "We are the best"
                },
                {
                  "x": xs +125,
                  "y": ys +  50,
                  "txt" : "experience"
                },
                {
                  "x": xs + 179,
                  "y": ys + 130,
                  "txt" : "me"
                },
                {
                  "x": xs + 233,
                  "y": ys + 50,
                  "txt" : "interests"
                },
                {
                  "x": xs + 287,
                  "y": ys + 130,
                  "txt" : "projects"
                },
                {
                  "x": xs + 125,
                  "y": ys + 210,
                  "txt" : "$ expectation"
                },
                {
                  "x": xs + 233,
                  "y": ys + 210,
                  "txt" : "Certs"
                }
]

    var wid = window.innerWidth;
    var hgt = window.innerHeight;


    const changeStyle = (i) => {

    var cclass = document.getElementById("polu"+i).className.baseVal

    if (cclass == "hc") {

          }
    else {
            document.getElementById("polu"+i).className.baseVal = "cont2";
            document.getElementById("golu"+i).className.baseVal = "cont3";
            document.getElementById("bolu"+i).className.baseVal = "cont2";

          }
        };
  const revertStyle = (i) => {

            var cclass = document.getElementById("polu"+i).className.baseVal


      if (cclass == "hc") {

                }
      else {
              document.getElementById("polu"+i).className.baseVal = "cont";
              document.getElementById("golu"+i).className.baseVal = "cont4";
              document.getElementById("bolu"+i).className.baseVal = "cont";
            }
      };

  const hideall = (i) => {

    const hlist = document.querySelectorAll("[id^='polu']");

          hlist.forEach(function(iv) {
                iv.className.baseVal = "hc";
            })

    const hlist2 = document.querySelectorAll("[id^='golu']");

          hlist2.forEach(function(iv) {
            iv.className.baseVal = "hc";
            })

    const hlist3 = document.querySelectorAll("[id^='bolu']");


          hlist3.forEach(function(iv) {
              iv.className.baseVal = "hc";
            })

          document.getElementById("polu"+i).className.baseVal = "cont2";
          document.getElementById("golu"+i).className.baseVal = "cont3";
          document.getElementById("bolu"+i).className.baseVal = "cont2";

          setTimeout(function (){

              document.getElementById("text"+i).scrollIntoView({behavior: "smooth"})

                }, 500)

      ;

          };



  return (
    <div>
	     <svg  id="mainsvg" width={wid} height={hgt} xmlns="<http://www.w3.org/2000/svg>"	>




        { x1.map((crd, i) => (

            <>


              {/* fill="url(#pattern1)" /> */}

                <polygon

                    id={`polu${i}`}
                    className={style}
                    onMouseOver={() => changeStyle(i)}
                    onMouseOut={() => revertStyle(i)}
                    onClick={() => hideall(i)}

                    points={`${crd.x} ${crd.y}, ${crd.x + 50} ${crd.y + 25},${crd.x +50} ${crd.y + 75}, ${crd.x } ${crd.y + 100}, ${crd.x -50} ${crd.y + 75} , ${crd.x -50} ${crd.y + 25}`}
                    fill="#fff"
                />

                <polygon
                  onMouseOver={() => changeStyle(i)}
                  onMouseOut={() => revertStyle(i)}
                  id={`golu${i}`}
                  points={`${crd.x } ${crd.y +7}, ${crd.x + 50 -6} ${crd.y + 25 +4 },${crd.x +50 -6 } ${crd.y + 75 - 4}, ${crd.x } ${crd.y + 100 -7}, ${crd.x -50 +6} ${crd.y + 75 -4} , ${crd.x -50 +6} ${crd.y + 25 +4 }`}
                  strokeWidth="2" stroke="tomato"
                  fill="none"

                />


                <text onMouseOver={() => changeStyle(i)}
                      onMouseOut={() => revertStyle(i)}
                      id={`bolu${i}`}
                      x={crd.x} y={crd.y + 55}
                      textAnchor="middle"
                      fontSize="12"
                >
                          {crd.txt}
                </text>




              </>
  ))}


	</svg>

    <div class="sfill" id="text1">


    </div>
    <div class="sfill" id="text2">


    </div>
</div>
);


}

export default App;
