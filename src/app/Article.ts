export class Article
{
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
    /*public set libelle(lib:string)
        {this.libelle=lib;}*/
    public libellee(lib:string)
        { this._libelle =lib; }

    public get image(): string 
        { return this._image; } 
    /*public set image(src:string)
        {this.image=src;}*/
    public imagee(img:string)
        { this._image =img; }
    
    public get prix(): number 
        { return this._prix; }
    public set prix(pr:number)
        { this._prix=pr; } 
    public prixx(pr:number)
        { this._prix=pr; }

    public get couleur(): string 
        { return this._couleur; } 
    public set couleur(coul:string)
        {this.couleur=coul;}
    public couleurr(coul:string)
        { this._couleur =coul; }

    public get vitesse(): number 
        { return this._vitesse; } 
    public set vitesse(vit:number)
        { this._vitesse=vit; }
    public vitessee(vit:number)
        { this._vitesse=vit; }
    
    public get etat(): boolean
        { return this._etat; } 
    public set etat( b:boolean)
        { this._etat =b; }
    public etatt( b:boolean)
        { this._etat =b; }

    public get date():Date
        {return this._date ;}
    public set date (dt :Date)
        {this._date=dt ;}
    public datee (dt :Date)
        {this._date=dt ;}
    
    public get hp(): number 
        { return this._hp; }
    public set hp(hp:number)
        { this._hp=hp; }  
    public hpp(hp:number)
        { this._hp=hp; } 
    }
