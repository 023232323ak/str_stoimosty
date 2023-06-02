let mesttt = document.getElementById('mesttt')
let mestt = document.getElementById('mestt')
let mest = document.getElementById('mest')
let result=document.getElementById('stoimost')
let dlina = document.getElementById('dlina')
let mestttt=document.getElementById('mestttt')
let mesttttt=document.getElementById('mesttttt')
let form = document.getElementById('form')
let summa;
let S;
let summa2;
form.addEventListener('change', function (event) {
        S = +dlina.value;

        switch (event.target){
            case mesttt:
                summa=S*800;
                result.value=summa;
                break
            case mestt:
                summa=S*700;
                result.value=summa;
                break
            case mest:
                summa=S*500;
                result.value=summa;
                break
            case mestttt:
                summa=S*900
                result.value=summa
                break
            case mesttttt:
                summa=S*1000
                result.value=summa
        }

        if (cinst.checked && birth.checked){
            summa2 = summa-procentConst-procentBrith
            result.value = summa2
        }
        else if (cinst.checked){
            summa2 = summa-procentConst
            result.value = summa2
        }
        else if (birth.checked){
            summa2 = summa-procentBrith
            result.value = summa2
        }
        else {
            result.value = summa
        }
})
