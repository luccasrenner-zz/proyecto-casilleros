class Casilleros {

    GET( id = false ) {

        if( id ) {
            return { item : id  }
        }else {
            return { list : {} }
        }
        

    }

}

module.exports = new Casilleros();