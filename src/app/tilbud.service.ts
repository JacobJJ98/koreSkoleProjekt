import {TilgangeligeDage} from './Model/tilgængeligedage.model';
import {ngAppResolve} from '@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs';
import {TilbudTilBrugere} from './Model/tilbudTilBrugere.model';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {MyObjModel} from './Model/myObj.model';
import {Tilbud} from './Model/tilbud.model';
import {Koreskole} from './Model/koreskole.model';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Injectable()
export class TilbudService {

  private tilg: TilgangeligeDage = new TilgangeligeDage();
  private tilbuddeneV4: TilbudTilBrugere[] = new Array();
  constructor(private http: Http) {
  }
  henttilbudTilBruger() {
    this.http.get('http://localhost:8080/koereskole_REST/webresources/generic/getAlleTilbud').subscribe(
      (response: Response) => {
        const data = response.text();
        const obj: TilbudTilBrugere[] = JSON.parse(data.toString());
       // console.log('GAMLE MÅDE ' + obj[0].tilbud.tilgangeligeDage.tilgangelig_mandag);

        this.tilbuddeneV4.splice(0, this.tilbuddeneV4.length);
        // this.fraObjTilListen(obj);
      },
      (error) => console.log(error),
    );
    return this.tilbuddeneV4;
  }
  hentTilbudMedId(index: number) {
  }
  hentTilbudMedPostnummer(postnummer: number, pris: string, kon: string, maerke: string, str: string, typ: string, lyn: string, dage: string) {
    console.log(postnummer);
    console.log(pris);
    console.log(kon);
    console.log(maerke);
    console.log(str);
    console.log(typ);
    console.log(lyn);
    console.log(dage);
    this.http.post('http://localhost:8080/koereskole_REST/webresources/generic/tilbudMedGiventPostnummer', postnummer).subscribe(
      (response: Response) => {
        const data = response.text();
        const obj: TilbudTilBrugere[] = JSON.parse(data.toString());
        // console.log('DETTE ER BLEVET HENTET FRA SERVEREN MED GIVET POSTNUMMER: ' + data);
       // console.log('LÆNGDEN AF OBJ ER: ' + obj.length);
        this.tilbuddeneV4.splice(0, this.tilbuddeneV4.length);
        this.fraObjTilListen(obj, pris, kon, maerke, str, typ, lyn, dage);
      },
      (error) => console.log(error),
    );
  }
  fraObjTilListen(obj: TilbudTilBrugere[], pris: string, kon: string, maerke: string, str: string, typ: string, lyn: string, dage: string) {
    const midlerArr: TilbudTilBrugere[] = [];
   // const midlArr = new TilbudTilBrugere[obj.length];
    for (let o = 0; o < obj.length; o++) {
      const tilll = new TilbudTilBrugere();
      // tilbud
      // tilll.tilbud.koreskole_id = obj[o].tilbud.koreskole_id;
      const prisikr: number = this.prisUdfraIndex(obj[o].tilbud.pris.toString());
      tilll.tilbud.pris = prisikr;
      tilll.tilbud.korekort_type = obj[o].tilbud.korekort_type;
      tilll.tilbud.lynkursus = obj[o].tilbud.lynkursus;
      tilll.tilbud.bilmarke = obj[o].tilbud.bilmarke;
      tilll.tilbud.bilstorrelse = obj[o].tilbud.bilstorrelse;
      tilll.tilbud.kon = obj[o].tilbud.kon;
      tilll.tilbud.beskrivelse = obj[o].tilbud.beskrivelse;
      tilll.tilbud.tilgangeligeDage = obj[o].tilbud.tilgangeligeDage;
      // oversætter alle dage fra int til string
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_mandag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_mandag = 'Mandag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_mandag = '';
      }
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_tirsdag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_tirsdag = ', Tirsdag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_tirsdag = '';
      }
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_onsdag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_onsdag = ', Onsdag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_onsdag = '';
      }
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_torsdag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_torsdag = ', Torsdag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_torsdag = '';
      }
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_fredag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_fredag = ', Fredag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_fredag = '';
      }
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_lordag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_lordag = ', Lørdag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_lordag = '';
      }
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_sondag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_sondag = ', Søndag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_sondag = '';
      }
      // her slutter oversættelse af dage!!
      tilll.tilbud.id = obj[o].tilbud.id;
      // køreskole
      tilll.koreskole.id = obj[o].koreskole.id;
      tilll.koreskole.navn = obj[o].koreskole.navn;
      tilll.koreskole.adresse = obj[o].koreskole.adresse;
      tilll.koreskole.postnummer = obj[o].koreskole.postnummer;
      tilll.koreskole.telefonnummer = obj[o].koreskole.telefonnummer;
      tilll.koreskole.mail = obj[o].koreskole.mail;
      midlerArr.push(tilll);
     this.tilbuddeneV4.push(tilll);
    }
    this.reducerUdfraKrav(pris, kon, maerke, str, typ, lyn, dage);
  }

  private reducerUdfraKrav(pris: string, kon: string, maerke: string, str: string, typ: string, lyn: string, dage: string) {
    // vælger tilbud som stemmer overens med priskrav
     const pris2: number = this.prisUdfraIndex(pris);
    const prisv2: number = +pris;
    const type2: string = this.typeUdfraIndex(typ);
    const lyn2: number =  this.lynUdfraBool(lyn);
    const str2: string  = this.strUdfraIndex(str);
    const count: number = this.tilbuddeneV4.length;
    const sletDisseID: number[] = [];
    for (let o = 0; o < count; o++) {
      let erBlevetNoteret = false;
  // tjekker for de ønskede dage
      for (let n = 0; n < 1; n++) {
        if (dage.includes('Mandag') && this.tilbuddeneV4[o].tilbud.tilgangeligeDage.tilgangelig_mandag === 1) {
          break;
        }
        if (dage.includes('Tirsdag') && this.tilbuddeneV4[o].tilbud.tilgangeligeDage.tilgangelig_tirsdag === 1) {
          break;
        }
        if (dage.includes('Onsdag') && this.tilbuddeneV4[o].tilbud.tilgangeligeDage.tilgangelig_onsdag === 1) {
          break;
        }
        if (dage.includes('Torsdag') && this.tilbuddeneV4[o].tilbud.tilgangeligeDage.tilgangelig_torsdag === 1) {
          break;
        }
        if (dage.includes('Fredag') && this.tilbuddeneV4[o].tilbud.tilgangeligeDage.tilgangelig_fredag === 1) {
          break;
        }
        if (dage.includes('Lørdag') && this.tilbuddeneV4[o].tilbud.tilgangeligeDage.tilgangelig_lordag === 1) {
          break;
        }
        if (dage.includes('Søndag') && this.tilbuddeneV4[o].tilbud.tilgangeligeDage.tilgangelig_sondag === 1) {
          break;
        }
        console.log('DAGE---------IF');
        sletDisseID.push(o);
        erBlevetNoteret = true;
      }

      // tjekker for prisen
      if (this.tilbuddeneV4[o].tilbud.pris > pris2 && !erBlevetNoteret) {
        console.log('PRIS-------IF');
        sletDisseID.push(o);
        erBlevetNoteret = true;
      }
      // tjekker for typen
      if (this.tilbuddeneV4[o].tilbud.korekort_type !== type2 && !erBlevetNoteret) {
        console.log('TYPE------IF');
        sletDisseID.push(o);
        erBlevetNoteret = true;
      }
      // tjekker for køn (der er toLoweCase fordi det er startet med stor i angu og småt i DB
      if (this.tilbuddeneV4[o].tilbud.kon.toLowerCase() !== kon.toLowerCase() && !erBlevetNoteret) {
        console.log('KØN---------IF');
        sletDisseID.push(o);
        erBlevetNoteret = true;
      }
      // tjekker for lynkursus
      if (this.tilbuddeneV4[o].tilbud.lynkursus !== lyn2 && !erBlevetNoteret) {
        console.log('LYN---------IF');
        sletDisseID.push(o);
        erBlevetNoteret = true;
      }
      // tjekekr for størrelse
      if (this.tilbuddeneV4[o].tilbud.bilstorrelse !== str2 && !erBlevetNoteret) {
        console.log('STØRRELSE---------IF');
        sletDisseID.push(o);
        erBlevetNoteret = true;
      }
      // tjekker for mærke
      if (!maerke.toString().toLowerCase().includes(this.tilbuddeneV4[o].tilbud.bilmarke.toString().toLowerCase()) && !erBlevetNoteret) {
        console.log('MÆRKE---------IF');
        sletDisseID.push(o);
        erBlevetNoteret = true;
      }

    }
    for (let k = 0; k < sletDisseID.length; k++) {
      this.tilbuddeneV4.splice(sletDisseID[k] - k, 1) ;
      // console.log('længden af v4: ' + this.tilbuddeneV4.length);
    }
  }

  private prisUdfraIndex(pris: string) {
    switch (pris) {
      case '1':
        return 8000;
        break;
      case '2':
       return 8500;
       break;
      case '3':
        return 9000;
        break;
      case '4':
        return 9500;
        break;
      case '5':
        return 10000;
        break;
      case '6':
        return 10500;
        break;
      case '7':
        return 11000;
        break;
      case '8':
        return 11500;
        break;
      case '9':
        return 12000;
        break;
      case '10':
        return 12500;
        break;
      case '11':
        return 13000;
        break;
      case '12':
        return 13500;
        break;
      case '13':
        return 14000;
        break;
      case '14':
        return 14500;
        break;
      case '15':
        return 15000;
        break;
      case '16':
        return 15500;
        break;
      case '17':
        return 16000;
        break;
      case '18':
        return 16500;
        break;
      case '19':
        return 17000;
        break;
    }
  }
  private typeUdfraIndex(type: string) {
    switch (type) {
      case '1':
        return 'AM';
        break;
      case '2':
        return 'A1';
        break;
      case '3':
        return 'A2';
        break;
      case '4':
        return 'A';
        break;
      case '5':
        return 'B';
        break;
      case '6':
        return 'BE';
        break;
      case '7':
        return 'B1';
        break;
      case '8':
        return 'C1';
        break;
      case '9':
        return 'C1E';
        break;
      case '10':
        return 'C';
        break;
      case '11':
        return 'CE';
        break;
      case '12':
        return 'D1';
        break;
      case '13':
        return 'D1E';
        break;
      case '14':
        return 'D';
        break;
      case '15':
        return 'DE';
        break;
      default:
        break;
    }
  }

  private lynUdfraBool(lyn: string) {
    if (lyn) {
      return 1;
    } else {
      return 0 ;
    }
  }

  private strUdfraIndex(str: string) {
    switch (str) {
      case '1':
        return 'lille';
        break;
      case '2':
        return 'mellem';
        break;
      case '3':
        return 'stor';
        break;
      default:
        return '';
            break;
    }
    return '';
  }

  opretKoreskole(brugernavn: string, password: string, koreskole: Koreskole) {
  const jsonkoreskole: string = JSON.stringify(koreskole);
  const stringArr: string[] = [brugernavn, password, jsonkoreskole];
  const jsonStringArr: string = JSON.stringify(stringArr);
    this.http.post('http://localhost:8080/koereskole_REST/webresources/generic/opretKøreskole', jsonStringArr).subscribe(
      (response: Response) => {
        const data = response.text();
        console.log('SVAR FRA SERVER OPRET KORESKOLE:');
        console.log(data);
      },
      (error) => console.log(error),
    );
  }
}


