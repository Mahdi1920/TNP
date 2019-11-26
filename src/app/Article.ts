export class Article
{
    constructor(private _id:number , private _libelle:string , private _image:string , private _prix:number , private _couleur:string, private _vitesse:number, private _etat:boolean , private _date:Date )
    {}

    public get id(): number 
        { return this._id; } 
    public set id(id:number)
        { this.id=id; }

    public get libelle(): string 
        { return this._libelle; } 
    public set libelle(lib:string)
        { this._libelle =lib; }

    public get image(): string 
        { return this._image; } 
    public set image(img:string)
        { this._image =img; }
    
    public get prix(): number 
        { return this._prix; } 
    public set prix(pr:number)
        { this.prix=pr; }

    public get couleur(): string 
        { return this._couleur; } 
    public set couleur(coul:string)
        { this._libelle =coul; }

    public get vitesse(): number 
        { return this._vitesse; } 
    public set vitesse(vit:number)
        { this.prix=vit; }
    
    public get etat(): boolean
        { return this._etat; } 
    public set etat( b:boolean)
        { this._etat =b; }

    public get date():Date
        {return this._date ;}
    public set date (dt :Date)
        {this._date=dt ;}
}
