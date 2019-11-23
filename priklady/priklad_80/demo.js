/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *
 *  Výpočet soudního poplatku
 * 
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *  demo.js
 */

function validace(vstup_id_str) {
  const el_vstup = document.getElementById(vstup_id_str);                 // načtení vstupu
  if (isNaN(Number(el_vstup.value))) {                                    // kontrola je číslo?
    alert(`
Zadaná hodnota "${el_vstup.value}" je velmi pravděpodobně nesprávná. 
Zadejte prosím správně novou číselnou hodnotu. 
Desetinná místa pište ve formátu ##.##`);
    return false
  }
  else return true
}

function vypocet(vstup_id_str, vystup_id_str) {
  const el_vstup = document.getElementById(vstup_id_str);
  const el_vystup = document.getElementById(vystup_id_str);
  const sazba_pct_5 = 5 / 100;
  const sazba_pct_1 = 1 / 100;
  let zaklad = Number(el_vstup.value);                                    // základ poplatku ze vstupu
  let poplatek = 0;                                                       // výchozí výše poplatku
  if ((zaklad > 0) && (zaklad <= 20000)) {                                // poplatek do 20.000,- základu
    poplatek = 1000;
  }
  else {
    zaklad = Math.floor(Number(el_vstup.value) / 100) * 100;         // nad 20.000,- základu zaokrouhlíme na stovky dolů
  }
  if ((zaklad > 20000) && (zaklad <= 40000000)) {
    poplatek = zaklad * sazba_pct_5;                                 // 5 % sazba poplatku
  }
  else if (zaklad > 40000000) {                                      // nad 40 mil. základu
    zaklad = (zaklad <= 250000000) ? zaklad : 250000000;             // základ omezen na max. 250 mil.
    poplatek = 2000000 + ((zaklad - 40000000) * sazba_pct_1);        // 1 % sazba poplatku ze základu nad 40 mil.
  }
  poplatek = Math.ceil(poplatek / 10) * 10;                          // zaokrouhlení poplatku na desetikoruny nahoru
  el_vystup.innerHTML =
    `<div class="card">
    <div class="card-body"> Základ soudního poplatku činí: <b>${Number(el_vstup.value).toFixed(2)} Kč</b>.<br />
    ${((Number(el_vstup.value).toFixed(2) > 20000)
        &&
       (Number(el_vstup.value).toFixed(2) != zaklad)) ?              // pokud se zaokrouhloval základ, upravíme výpis
      `Upravený základ soudního poplatku (zaokrouhlený na stovky dolů) činí: <b>${zaklad.toFixed(2)} Kč</b>.<br /><br />`
      :
      `<br />`
    }
    <span class="vetsi_text">Soudní poplatek 
    ${(Number(el_vstup.value).toFixed(2) > 20000) ?            // u základu nad 20 tis. se bude zaokrouhlovat i poplatek
      `(zaokrouhlený na desetikoruny nahoru)`
      :
      ``
    }
    činí: <b class="vyse_poplatku">${poplatek.toFixed(2)} Kč</b></span><br /><br /> a lze jej zaplatit 
    ${(poplatek <= 6000) ?                                     // poplatek do 6 tis. lze zaplatit kolky
      `<b>na účet soudu</b> anebo <b>kolky</b>`
      :
      `<b>na účet soudu</b>`
    }.
    </div>
</div>`;
}