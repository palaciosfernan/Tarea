class Nodo{
    constructor(valor){
        this.valor=valor;
        this.derecha=null;
        this.izquierda=null;
    }
}
class Usuario{
    constructor (id,usuario,password,nombre,apellidos){
        this.id=id;
        this.usuario=usuario;
        this.password=password;
        this.nombre=nombre;
        this.apellidos=apellidos;
    }
}
class BinaryTree{
    constructor(){
        this.raiz=null;
    }

    insertar(usuario){
        const nodoNuevo=new Nodo(usuario);
        if(!this.raiz){
            this.raiz=nodoNuevo; 
        }else{
            this.insertarDato(this.raiz,nodoNuevo);
        }
    }
    insertarDato(nodoActual,nodoNuevo){
        if(nodoNuevo.valor.id ===nodoActual.valor.id){
            return;
        }
        if(nodoNuevo.valor.id<nodoActual.valor.id){
            if(!nodoActual.izquierda){
                nodoActual.izquierda=new Nodo(nodoNuevo.valor);
            }else{
                this.insertarDato(nodoActual.izquierda,nodoNuevo);
            }
        }else{
            if(!nodoActual.derecha){
                nodoActual.derecha=new Nodo(nodoActual.izquierda,nodoNuevo);
            }else{
                this.insertarDato(nodoActual.derecha,nodoNuevo)
            }
        }
    }
    buscar(id){
        return this.buscarDato(this.raiz,id);
    }
    buscarDato(nodoActual,id){
        if(!nodoActual){
            return null;
        }
        if(id===nodoActual.valor,id){
            return nodoActual.valor;
        }else if(id<nodoActual.valor.id){
            return this.buscarDato(nodoActual.izquierda,id);
        }else{
            return this.buscarDato(nodoActual.derecha,id)
        }
    }
    eliminar (id){
        this.raiz=this.eliminarDato(this.raiz,id);
    }
    eliminarDato(nodoActual,id){
        if(!nodoActual){
            return null;
        }
        if(id===nodoActual.valor.id){
            if(!nodoActual.izquierda&& !nodoActual.derecha){
                return null;
            }
            if(!nodoActual.izquierda){
                return nodoActual.derecha;
            }
            if(!nodoActual.derecha){
                return nodoActual.izquierda;
            }
            const nodoMin=this.encontrarDato(nodoActual.derecha);
            nodoActual.valor=nodoMin.valor;
            nodoActual.izquierda=this.eliminarDato(nodoActual.derecha,nodoMin.valor.id);
            return nodoActual;
        }
        if (id<nodoActual.valor.id){
            nodoActual.izquierda=this.eliminarDato(nodoActual.izquierda,id);
        }else{
            nodoActual.derecha=this.eliminarDato(nodoActual.derecha,id);
        }
        return nodoActual;
    }
    encontrarDato(nodo){
        while(nodo.izquierda){
            nodo=nodo.izquierda;
        }
        return nodo;
    }
    actualizarTabla(id,usuarioActua){
        this.eliminar(id);
        this.insertar(usuarioActua);
    }
}
const binaryTree=new BinaryTree();
//Usuarios creados
const usuario1=new Usuario(23,"Fernan","Jkñ23","Fernando","Palacios");
const usuario2=new Usuario(2,"Flav","res42","Flavio","Diaz Lopez");
binaryTree.insertar(usuario1);
binaryTree.insertar(usuario2);
//utilizando la funcion de buscar por id
const usuario_Encon1= binaryTree.buscar(23);
console.log("Usuario encontrado:   ",usuario_Encon1);

//eliminar usuario por el id    
binaryTree.eliminar(2);
console.log("se elimino por id")
//actualizar datos del usuario utilizando el id
const usuarioActua=new Usuario(25,"Fernan2","ksx30","Luis Fernando","Palacios Trujillo");
binaryTree.actualizarTabla(23, usuarioActua);

//Imprimir el usuario que se atualizaron los datos
const usuario_Encon_Actua=binaryTree.buscar(25);
console.log("Usuario actualizado encontrado",usuario_Encon_Actua);