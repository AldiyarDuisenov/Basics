
function popup(){

    let blocks = document.querySelectorAll('.block');
    for (i = 0; i < blocks.length; ++i) {

        blocks[i].classList.toggle("blureffect");
    }
    let o_blocks = document.querySelectorAll('.o_block');
    for (i = 0; i < o_blocks.length; ++i) {

        o_blocks[i].classList.toggle("blureffect");
    }




    document.querySelector('.popup').classList.toggle("visible");
    document.querySelector('.z_ind').classList.toggle("visible");

}

function orderimage(a){
    let b = 'url("'+a+'")'
    console.log(b);
    document.getElementsByClassName('o_b_1_c_1_r_image')[0].style.backgroundImage = b;
}
function price(a){
    document.querySelector('.tot').textContent = 'Total price: ' + a;

}
function turn1(){

    document.getElementsByClassName('b_6_c_1_r_t_r_col')[0].innerHTML = '<button onclick="turn1()" type="button" class="btn_b_6 btn btn-outline-secondary ">plaid </button><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Range</h5><h6>628 km (est.)</h6><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>1/4 Mile</h5><h6>9.23@250 km/h trap speed</h6><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Peak Power</h5><h6 >1,020 hp</h6><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Wheels</h5><h6>19" or 21"</h6>';
    document.getElementsByClassName('b_6_c_1_r_t_r_col')[1].innerHTML = '<button onclick="turn2()" type="button" class="btn_b_6 btn btn-outline-secondary ">long range</button><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Acceleration</h5><h6>2.1 s 0-100 km/h</h6><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Top Speed</h5><h6>322 km/h†</h6><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Drag Coefficient</h5><h6>0.208 Cd</h6><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Weight</h5><h6>390 mi (est.)</h6>';
}
function turn2(){

    document.getElementsByClassName('b_6_c_1_r_t_r_col')[0].innerHTML = '<button onclick="turn1()" type="button" class="btn_b_6 btn btn-outline-secondary ">plaid </button><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Range</h5><h6>663 km (est.)</h6><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Peak Power</h5><h6>670 hp</h6><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Acceleration</h5><h6>3.2 s 0-100 km/h</h6><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Wheels</h5><h6>19" or 21"</h6>';
    document.getElementsByClassName('b_6_c_1_r_t_r_col')[1].innerHTML = '<button onclick="turn2()" type="button" class="btn_b_6 btn btn-outline-secondary ">long range</button><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Powertrain</h5><h6>Dual Motor</h6><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Top Speed</h5><h6>250 km/h</h6><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Drag Coefficient</h5><h6>0.208 Cd</h6><hr style="width: 50px; margin: 30px auto 5px 0; border: 1px solid #6c757d;"><h5>Weight</h5><h6>2,069 kg</h6>';
}


