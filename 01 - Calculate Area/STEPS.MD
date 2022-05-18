# Megoldási lépések

## 1. HTML template elkészítése

1. Hozz létre egy `index.html` fájlt a gyökérkönyvtárban
2. Generáld le az alap `HTML-5`-ös templatet
3. Hozd létre az alábbi html szerkezetet

```html
<div class="container">
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4">
      <div class="d-flex justify-content-center mt-5">
        <h1 class="m-5">Területszámítás</h1>
      </div>
      <form>
        <div class="form-group">
          <label for="width-input">Szélesség (m²)</label>
          <input type="number" class="form-control" id="width-input" />
        </div>
        <div class="form-group">
          <label for="length-input" class="form-label">Hosszúság (m²)</label>
          <input type="number" class="form-control" id="length-input" />
        </div>

        <div>
          <h5>A számított terület: <span id="calculated-area">0</span>m²</h5>
        </div>
        <div class="d-flex justify-content-center mt-5">
          <button type="button" class="btn btn-primary">Számítás</button>
        </div>
      </form>
    </div>
    <div class="col-4"></div>
  </div>
</div>
```

## 2. Bootstrap 4.0.0 integrálása

1. Töltsd le a bootstrap 4.0.0-ás verzióját innen:
   https://github.com/twbs/bootstrap/releases/download/v4.0.0/bootstrap-4.0.0-dist.zip
2. Hozz létre a projekt gyökérmappáján belül egy `lib` mappát
3. Ezen belül pedig egy `bootstrap-4.0.0` mappát.
4. Csomagold ki ide a letöltött `zip` fájl tartalmát
5. Integráld be a projekted fejlécében a `bootstrap.min.css` fájlt
6. Ha a bootstrap JavaScriptes funkcióit is használni akarod (pl. hamburger menü), akkor importáld be a `bootstrap.min.js` fájlt is

   Tipp: `<script>` taget használj `src` attribútummal és ezt a `</body>`-t megelőző helyre tedd.

## 3. JavaScript kód elkészítése

1.  Hozz létre egy `js` mappát a gyökérkönyvtárban
2.  A mappán belül hozz létre egy `script.js` fájlt
3.  Definiálj egy paraméter nélküli - egyelőre - üres fügvényt

    Tipp: Legyen a neve pl.: `calcArea()`.

4.  Ezt a függvényt fogjuk meghívni a gombunk megnyomására, tehát kapcsold is össze a gomb kattintás eseményét / `click` event-jét / a függvénnyel.

    Tipp: Az egyik lehetséges megoldás a `<button>` elem `onclick` attribútumát használni.

    A másik megoldás a JavaScript kódban közvetlenül a függvényeken kívül eső első sorokban a `<button>` elemre szóló referenciát kimenteni egy változóba. Majd ennek az `onclick` változójához hozzárendelni egy anonymous function-t.

    Példa:

```JavaScript
    const calcBtn = document.querySelector("#calc-btn");
    calcBtn.onclick = () => calcArea();
    function calcArea() {}
```

5. Ha már a html fájlban ügyködsz, akkor integráld szépen be az újonnan létrehozott `js` fájlodat.

   Tipp: `<script>` taget használj `src` attribútummal és ezt a `</body>`-t megelőző helyre tedd.

6. A függvényeden belül hozz létre két változót, amelyekben a bemeneti- (input) elemekre mutató egy-egy referenciát tárold.

   Tipp: A `document.querySelector()` függvény a paraméterként megadott attribútum-értékkel rendelkező elemre mutató referenciát adja vissza, amit el tudsz változóban tárolni. A változók nevei legyenek pl.:
   `widthInput` és `lengthInput` A html sablonban már mind a kettő beviteli elemnek van `id` attribútuma, ami alapján hivatkozhatsz rájuk. Ezeket kell paraméterként használni. A paraméterek a függvények `()`-en belül megadott bemeneti adatai.

   A `document.querySelector()`-ban megadott paraméter leggyakoribb kezdőkarakterei:

   - `#` - Ha az `id` attribútum alapján választunk ki elemet
   - `.` - Ha `class` attribútum alapján választunk ki elemet

7. Ments ki változókba a beviteli mezők (szélesség, hosszúság) értékeit.

   Tipp: A beviteli mezők értékeit a .`value` változó tárolja.

   Legyenek a változók nevei pl. `width` és `length`.

8. Hozz létre egy változót, amiben a kalkulált eredményt tárolod.

   Tipp: Nevezd a változót pl. `area`-nak.

   Terület = szélesség \* hosszúság

9. Hozz létre egy változót, amelyben a kimeneti- ( `<span>` ) elemre mutató referenciát tárold.

   Tipp: Az eljárás ugyanaz, mint az 5-ös pontban.

   Nevezd `outputElement`-nek a változót.

10. Változtasd meg a kimeneti elem belső tartalmát a 7. pontban létrehozott kalkulált terület értékére.

    Tipp: Használd a kimeneti elem `innerHTML`, vagy `innerText` tulajdonságát.
