import {TilgængeligedageModel} from './tilgængeligedage.model';

export class TilbudModel {
  public koreskole_id: string;
  public pris: number;
  public korekort_type: string;
  public lynkursus: number;
  public bilmaerke: string;
  public bilstørrelse: string;
  public køn: string;
  public beskrivelse: string;
  public tilgængeligedage: TilgængeligedageModel;
  public  id: number;





  constructor(koresid: string, pris: number, type: string, lynkursus: number, maerke: string, str: string, køn: string, beskr: string, tilgdage: TilgængeligedageModel, id: number) {
    this.koreskole_id = koresid;
    this.pris  = pris;
    this.korekort_type = type;
    this.lynkursus = lynkursus;
    this.bilmaerke = maerke;
    this.bilstørrelse = str;
    this.køn = køn;
    this.beskrivelse = beskr;
    this.tilgængeligedage = tilgdage;
    this.id = id;
  }
}