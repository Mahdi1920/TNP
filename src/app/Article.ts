export class Article
{
  [x: string]: any;
    constructor(private _id:number ,
         private _libelle:string , 
         private _image:string ,
          private _prix:number ,
           private _couleur:string,
            private _vitesse:number,
            private _etat:boolean ,
             private _date:Date ,
             private _hp:number)
    {}

    public get id(): number 
        { return this._id; } 
    public set id(id:number)
        { this._id=id; }

    public get libelle(): string 
        { return this._libelle; } 
    public libellee(lib:string)
        { this._libelle =lib; }

    public get image(): string 
        { return this._image; } 
    public imagee(img:string)
        { this._image =img; }
    
    public get prix(): number 
        { return this._prix; } 
    public prixx(pr:number)
        { this._prix=pr; }

    public get couleur(): string 
        { return this._couleur; } 
    public couleurr(coul:string)
        { this._couleur =coul; }

    public get vitesse(): number 
        { return this._vitesse; } 
    public vitessee(vit:number)
        { this._vitesse=vit; }
    
    public get etat(): boolean
        { return this._etat; } 
    public etatt( b:boolean)
        { this._etat =b; }

    public get date():Date
        {return this._date ;}
    public datee (dt :Date)
        {this._date=dt ;}
    
        public get hp(): number 
        { return this._hp; } 
    public hpp(hp:number)
        { this._hp=hp; } 
    }
