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

  constructor(){
  }
}
