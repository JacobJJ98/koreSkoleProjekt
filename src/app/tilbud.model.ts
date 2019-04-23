import {TilgængeligeDage} from './tilgængeligedage.model';

export class Tilbud {
  public koreskole_id: string;
  public pris: number;
  public korekort_type: string;
  public lynkursus: number;
  public bilmaerke: string;
  public bilstørrelse: string;
  public køn: string;
  public beskrivelse: string;
  public tilgængeligedage: TilgængeligeDage;
  public  id: number;

  constructor() {
  }
}
