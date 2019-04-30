import {TilgangeligeDage} from './tilgængeligedage.model';

export class Tilbud {
  public koreskole_id: string;
  public pris: number;
  public korekort_type: string;
  public lynkursus: number;
  public bilmarke: string;
  public bilstorrelse: string;
  public kon: string;
  public beskrivelse: string;
  public tilgangeligeDage: TilgangeligeDage;
  public  id: number;

  constructor() {
    this.tilgangeligeDage = new TilgangeligeDage();
  }
}
