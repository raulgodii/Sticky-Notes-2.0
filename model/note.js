class Note{
    creationDate;
    constructor(id=null){
        this.id = id;
        this.title = "";
        this.text = "";

        let date = new Date();
        this.creationDate = date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear();
    }
}