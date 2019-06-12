// Prvi, drugi i treći red: plaćeno
var prviRedP = document.getElementsByClassName('installment-1 placeno');
var drugiRedP = document.getElementsByClassName('installment-2 placeno');
var treciRedP = document.getElementsByClassName('installment-3 placeno');

// Neplacena druga rata...
var drugiRedN = document.getElementsByClassName('installment-2 neplaceno');

// Neplacena treća rata...
var treciRedN = document.getElementsByClassName('installment-3 neplaceno');

// Ukupno plaćeno prvih rata
var sumPlacenoRata_1 = 0;
for (var i = 0; i < prviRedP.length; i++) {
    sumPlacenoRata_1 += parseInt(prviRedP[i].textContent);
}

// Ukupno plaćeno drugih rata
var sumPlacenoRata_2 = 0;

for (var i = 0; i < drugiRedP.length; i++) {
    sumPlacenoRata_2 += parseInt(drugiRedP[i].textContent);
}

// Ukupno plaćeno trećih rata
var sumPlacenoRata_3 = 0;

for (var i = 0; i < treciRedP.length; i++) {
    sumPlacenoRata_3 += parseInt(treciRedP[i].textContent);
}

//Ukupno neplaćeno drugih rata
var neplaceneDrugeRate = 0;
for (var p = 0; p < drugiRedN.length; p++) {
    if (drugiRedN[p].previousElementSibling.classList.contains('placeno')) {
        neplaceneDrugeRate += parseInt(drugiRedN[p].textContent);
    }
};

//Ukupno neplaćeno trećih rata
var neplaceneTreceRate = 0;
for (var p = 0; p < treciRedN.length; p++) {
    if (treciRedN[p].previousElementSibling.classList.contains('placeno')) {
        neplaceneTreceRate += parseInt(treciRedN[p].textContent);

    }
};

var ukm1 = document.querySelector('.ukm.ukm-1');
var ukm2 = document.querySelector('.ukm.ukm-2');
var ukm3 = document.querySelector('.ukm.ukm-3');

ukm1.innerText = sumPlacenoRata_1;
ukm2.innerText = sumPlacenoRata_2 + '(' + neplaceneDrugeRate + ')';
ukm3.innerText = sumPlacenoRata_3 + '(' + neplaceneTreceRate + ')';