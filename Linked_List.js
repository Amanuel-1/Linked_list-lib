class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Dnode {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev =null;
    }
}
class Linkedlist{
 
    constructor(head=null){
        this.head = head ;
    
    }
     length(){
        let trav = this.head ;
        let counter =0;
        while(trav!=null){
            counter++;
            trav = trav.next;
        }
        return counter;
     }
     stringify(){
        let trav = this.head ;
      let str = "";
        while(trav!=null){
           str += trav.data +" -> ";
            trav = trav.next;
        }
        str+="null";
        return str;
     }
    print(){ //prints the linked list with an arrow representing the pointers.
        console.log(this.stringify());
    }
    search(data){
        let trav = this.head ;
        let counter =0;
        
        while(trav!=null){
            if(trav.data == data){
                counter++;
                
            }
            trav = trav.next;
        }
         (counter==0)?console.log("No dode found by the data %d. at index",data):console.log("%d Nodes found by the data %d",counter,data);
    }

    getLast(){
        let trav = this.head ;
        let len = this.length();
       for(let i=0;i<len-1;i++){
        trav = trav.next;
       }
            
            
        
        return trav.data;
    }
    getFirst(){
        return (this.head != null)?this.head.data : null;
    }

    append(data){

        let nodToAppend =new Node(data);
        let trav = this.head ;
        let len = this.length();
       for(let i=0;i<len-1;i++){
        trav = trav.next;
       }

       trav.next = nodToAppend;
       //return this.print(this.head);
}

bulkAppend(arr){ //accepts an array as a parameter to append every elelment of the array into the linked list
    //if(this.head== null){
   //     this.head  = new Node(arr[0])
   //     this.head = this.head.next;
 //   }
    
    
  let elem ; //represents each and every element of the array
    for(let i = 0 ;i<arr.length ;i++){
        elem = arr[i]
        this.append(elem); 
     
    }
}
//~~~~~~~~~~~~~~~~~a function to traverse through the linked list`````````````````````
traverse(index){//traverse through the linked list until it reaches the index;
    let trav = this.head;
    if(index == 0){
        return this.head ;
    }
    for(let i=0;i<index; i++){
        trav =trav.next;
    }
    return trav;
}



insert(data,index){ // used to insert a data at a specific index.
    let trav = this.head;
    let former //used to store the former pointeer to the position at the index.
    let nodToInsert =new Node(data)

    if(index == 0){
        nodToInsert.next = this.head;
    }

    for(let i=0;i<index-1 ; i++){
        trav =trav.next;
    }
    console.log(trav)
    former =trav.next;
    
    trav.next =nodToInsert;
nodToInsert.next =former;
    this.print()
}


delete(index){//this block deletes a Node at a specific index
    let trav = this.head;
    let former //used to store the former pointer to the position at the index.
    if(index ==0){
        this.head = this.head.next ;
    }
    for(let i=0;i<index-1 ; i++){
        trav =trav.next;
    }
    console.log(trav)
    former =trav.next;
    
    trav.next =former.next;

    this.print()
}
clear(){ // this method clears the linked list resulting in tha head Node

    this.head = null;
    this.print()
}


//to sort a linked list
//let say that the linked list is     1 -> 4 -> 6 -> 5 -> 7 -> 3 -> 0
sort(){
    let trav1 = this.head ;
    let trav2 = this.head.next;
  let temp;
  /*
                 temp =trav1.data ;
                trav1.data = trav2.data;
                trav2.data =temp ;
                trav1 = trav1.next ;
*/
 try{
    while(trav1.next!=null){
        if(trav2 == null){
            trav1 =trav1.next;
            trav2 =trav1.next;
        }
        
        if(trav2.data < trav1.data){
            temp =trav1.data ;
            trav1.data = trav2.data;
            trav2.data =temp ;
            //trav1 = trav1.next ;
          //  this.print()
        }
        trav2 = trav2.next ;
        if(trav1.next == null){
           // this.print()
        }
    }

}catch(err){

}
finally{
    this.print()
    return this


}
}

///********************************************************** */
 static merge (list1, list2) {

        let t1 =list1.head ;
        let t2= list2.head ;
          let v1,v2 ;
          let result = new Linkedlist()
          let trav  =result.head ;
      
          while(t1!=null || t2!=null){
              if(trav ==null){
                  trav = new Linkedlist(new Node(t1.val))
              }
              else{
              v1 =t1.val;
              v2 =t2.val ;
      
              if(v2 >=v1){
                  trav.next =  new Node(v1,null)
                  t1 =t1.next
                  trav =trav.next ;
              }
              if(v1 >v2){
                  trav.next =  new Node(v2,null)
                  t2=t2.next
                  trav =trav.next ;
              }
              }
      
          }
      
       console.log(result)
    
}
};
//end of the singly linked class


class Dlinkedlist {
 
    constructor(head=null){
        this.head = head ;
       
    }
     length(){
        let trav = this.head ;
        let counter =0;
        while(trav!=null){
            counter++;
            trav = trav.next;
        }
        return counter;
     }
     stringify(){
        let trav = this.head ;
        let temp ;
      let str = "";
        while(trav!=null){
           str += trav.data +" <--> ";
           temp = trav ;
            trav = trav.next;
           // trav.prev = temp;
        }
        str+="null";
        return str;
     }
    print(){ //prints the linked list with an arrow representing the pointers.
        console.log(this.stringify());
    }
    search(data){
        let trav = this.head ;
        let counter =0;
        
        while(trav!=null){
            if(trav.data == data){
                counter++;
                
            }
            trav = trav.next;
        }
         (counter==0)?console.log("No dode found by the data %d. at index",data):console.log("%d Dnodes found by the data %d",counter,data);
    }

    getLast(){
        let trav = this.head ;
        let len = this.length();
       for(let i=0;i<len-1;i++){
        trav = trav.next;
       }
            
            
        
        return trav.data;
    }
    getFirst(){
        return (this.head != null)?this.head.data : null;
    }

    append(data){
    
        let nodToAppend =new Dnode(data);
        let trav = this.head ;
        let len = this.length();
       for(let i=0;i<len-1;i++){
        trav = trav.next;
       }
       nodToAppend.prev = trav ;
       trav.next = nodToAppend;
       //return this.print(this.head);
}

bulkAppend(arr){ //accepts an array as a parameter to append every elelment of the array into the linked list
  let elem ; //represents each and every element of the array
    for(let i = 0 ;i<10 ;i++){
        elem = arr[i]
        this.append(elem); 
     }
}
//~~~~~~~~~~~~~~~~~a function to traverse through the linked list`````````````````````
traverse(index){//traverse through the linked list until it reaches the index;
    let trav = this.head;
    if(index == 0){
        return this.head ;
    }
    for(let i=0;i<index; i++){
        trav =trav.next;
    }
    return trav;
}


insert(data,index){ // used to insert a data at a specific index.
    let trav = this.head;
    let former //used to store the former pointeer to the position at the index.
    let nodToInsert =new Dnode(data)

    if(index == 0){
        nodToInsert.next = this.head;
    }

    for(let i=0;i<index-1 ; i++){
        trav =trav.next;
    }
    console.log(trav)

    former =trav.next;
    nodToInsert.prev =trav; //
    trav.next =nodToInsert;//
    former.prev =nodToInsert ;//
    nodToInsert.next =former;//
    this.print()
}


delete(index){//this block deletes a Dnode at a specific index
    let trav = this.head;
    let former //used to store the former pointer to the position at the index.
    if(index ==0){
      
        this.head = this.head.next ;
        
    }
    for(let i=0;i<index-1 ; i++){
        trav =trav.next;
    
    }
    console.log(trav)
    former =trav.next;
    (former.next).prev =trav;
    trav.next =former.next;

    this.print()
}
clear(){ // this method clears the linked list resulting in tha head Dnode

    this.head = null;
    this.print()
}


};



export {Linkedlist as Linkedlist ,Dlinkedlist as Dlinkedlist, Node as Node , Dnode as Dnode}