function ObliczKwadrat() 
{
    const bok = document.getElementById('KwadratBok').value;
    if (bok > 0) {
        const pole = bok * bok;
        const obwod = bok * 4;
        document.getElementById('KwadratWynik').innerText = `Pole: ${pole}, Obwód: ${obwod}`;
    } 
    else 
    {
        document.getElementById('KwadratWynik').innerText = `Długość boku nie może być mniejsza od 0.`;
    }
}

function ObliczProstokat() 
{
    const bok1 = document.getElementById('ProstokatBok1').value;
    const bok2 = document.getElementById('ProstokatBok2').value;

    if (bok1 > 0 && bok2 > 0) 
    {
        const pole = bok1 * bok2;
        const obwod = 2 * bok1 + 2 * bok2;
        document.getElementById('ProstokatWynik').innerText = `Pole: ${pole}, Obwód: ${obwod}`;
    } 
    else 
    {
        document.getElementById('ProstokatWynik').innerText = `Długości boków nie mogą być mniejsze od 0.`;
    }
}

function ObliczOkrag()
{
    const promien = document.getElementById('OkragPromien').value;
    
    if (promien > 0)
    {
        const pole = promien * promien * Math.PI;
        const obwod = 2 * promien * Math.PI;
        document.getElementById('OkragWynik').innerText = `Pole: ${pole}, Obwód: ${obwod}`
    }
    else
    {
        document.getElementById('OkragWynik').innerText = `Długość promienia nie może być mniejsza od 0.`
    }
}

function ObliczTrojkat()
{
    const podstawa = parseFloat(document.getElementById('TrojkatPodstawa').value);
    const wysokosc = parseFloat(document.getElementById('TrojkatWysokosc').value);
    if (podstawa > 0 && wysokosc > 0) 
    {
        const pole = (podstawa * wysokosc) * 0.5;
        const przeciwprostokatna = Math.sqrt(Math.pow(podstawa, 2) + Math.pow(wysokosc, 2));
        const obwod = podstawa + wysokosc + przeciwprostokatna;

        document.getElementById('TrojkatWynik').innerText = `Pole: ${pole}, Obwód: ${obwod}`;
    } 
    else 
    {
        document.getElementById('TrojkatWynik').innerText = `Długość podstawy i wysokości nie może być mniejsza od 0.`;
    }
}