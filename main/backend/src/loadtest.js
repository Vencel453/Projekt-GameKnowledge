// Importáljuk a teszthez szükséges k6 csomagot
import http from 'k6/http';
import { sleep } from 'k6';

// Itt beállítjuk a tesztet
export let options = {
    // A vus-ban megadjuk hogy h,ány virtuális felhasználóval végezzük a tesztet
    vus: 200,
    // A duration-ben megadjuk, hogy mennyi ideig tartson a teszt
    duration: '180s'
};

export default function () {
    // Itt megadjuk, hogy milyen metódussal érjük el melyik címet
    http.get('http://localhost:3000/game/1');
    // Megadjuk, hogy egy virtuális felhasználó kérése után várjon egy másodpercet
    sleep(1);
}