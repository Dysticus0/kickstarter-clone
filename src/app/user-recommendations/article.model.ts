export class Article{
    title: string = '';
    content: string = '';
    smallDesc: string = '';
    img: string = '';

    constructor(title: string, content: string, smallDesc: string,img: string){
        this.title = title;
        this.content = content;
        this.smallDesc = smallDesc;
        this.img = img;
    }
}