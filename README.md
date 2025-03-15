# Szent István Katolikus Technikum és Gimnázium
![Szent István Katolikus Technikum és Gimnázium logója](main/logo_keri.jpg)

# GameKnowledge

## Készítői
- Földházi Zsolt, frontend és dizájn
- Vicickó Vencel, backend és adatbázis

## Leírás
Ez a API architektúrára épülő projekt egy videójátékos adatbázis weboldalt valósít meg. A célunk hogy az oldalunkon gyakran keresett általános
információkat könnyen kereshető formátumban jelenítsünk meg. Minden információt helyileg tárolunk a gyors és független működés érdekében.

## Rendszerkövetelmények

### Minimum
CPU - Intel Pentium 4 ami képes SSE3-ra
Memória - 4 GB RAM
Operációs rendszer: Windows 10

### Ajánlott

CPU - Intel(R) Core(TM) - i3-1005GI 1.20GHz
Memória - 8 GB RAM
Operációs rendszer: Windows 10

## Használt Szoftverek

- XAMPP Control Panel v3.3.0
- Visual Studio Code 1.98.2
- Node 20.18.2
- Angular 18
- Postman 11.36.6

## Üzembehelyezés
Miután leszedtük a forrás fájlokat https://github.com/Vencel453/Projekt-GameKnowledge main branch-ről, navigáljuk a main mappába és Visual Studio Code-al nyissuk meg
a backend mappát és a terminal-t használva futtassuk az npm i parancsot, ezzel letöltjük a szükséges csomagokat, ezután nyissuk meg szintén Visual Studio Code-al a main mappában a frontend mappán belüli frontend mappát itt is futtassuk az npm i parancsot egy terminal-ban. Így telepítettük minden szükséges csomagot. Ezek után
indítsuk el a XAMPP Control Panel-t, majd indítsuk el az Apache és MySQL-t. Egy böngészőben menjünk a localhost/phpmyadmin címre ahol importáljuk a forrás fájlok
között található game_knowledge.sql fájlt. Így minden rendelkezésünkre áll a futtatáshoz.

Ha futtattni szeretnénk akkor a XAMPP Control Panel-ban indítsuk el az Apache és MySQL-t, a Visual Studio Code-al nyissuk meg a backned mappát, majd terminal-ba
írjuk be hogy npm run dev, ezután Visual Studio Code-al nyissuk meg a frontend mappán belül található frontend mappát és terminal-ba írjuk bele hogy ng serve.
A weboldal így a http://localhost/4200 címen fog futni.
