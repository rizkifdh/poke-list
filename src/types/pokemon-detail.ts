export interface PokemonDetail {
  name: string;
  height: number;
  weight: number
  abilities: {
    map:any
    ability: {
      name:string
    }
  };
  sprites:{other:{
    "official-artwork": {
      front_default: string;
    }
  }};
  types:{
    map:any
    type:{
      name:string
    }
  }
  stats:{
    map:any
    base_stat:number
    stat:{
      name:string
    }
  }
  moves:{
    map:any
    move:{
      name:string
    }
  }
}