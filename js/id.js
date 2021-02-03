/*
iconを管理する為のクラス
singleton
 */
class item {
    constructor() {
        this.id = 0;
        this.arr = Array(100000);
        this.arr.fill(false);
        this.max = 100000;
    }
    
    getId() {
        if(this.id+1 >= this.max || arr[this.id]){
            for (i = 0; i < this.arr.length; i++){
                if (!arr[i]){
                    this.id = i;
                    break;
                }
            }
        }
        arr[this.id]=true;
        return this.id++;
    }

    getCurrent() {
        return this.id;
    }

    deleteId(index){
        this.arr[index] = false;
    }

}

export default new item();