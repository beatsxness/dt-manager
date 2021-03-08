import { createStore } from "redux";

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Juan Carlitos",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mA4f2iKzAeRISeFUlnhC_EAQukZY9eoi_g&usqp=CAU"
        },
        {
            id: 2,
            nombre: "Beto Quiroga",
            foto: "https://i.pinimg.com/originals/6c/cc/9b/6ccc9b2a6f771f9278c3b6983c9a0d63.jpg"
        },
        {
            id: 3,
            nombre: "James Rodriguez",
            foto: "http://www.eltiempo.com/files/article_multimedia/uploads/2018/03/23/5ab54fcbecc4e.jpeg"
        },
        {
            id: 4,
            nombre: "Juan Disain",
            foto: "https://i.pinimg.com/236x/bb/37/54/bb3754d4496ec88a2569b42c2b4dccda--football-stickers-toni-kroos.jpg"
        },
        {
            id: 5,
            nombre: "Alvaro Felipe",
            foto: "https://i.pinimg.com/236x/94/82/25/9482259162adfc858b468225da35c8b3--juraj-kucka-euro--france.jpg"
        },
        {
            id: 6,
            nombre: "Alexys Lozada",
            foto: "https://i.pinimg.com/236x/a3/b0/f2/a3b0f2e23fd385d063172991058975c2--football-stickers-uefa-euro-.jpg"
        },
        {
            id: 7,
            nombre: "Harold Pajuelo",
            foto: "https://i.pinimg.com/originals/6a/5d/14/6a5d14b2ea4acefda4061019c678f0ac.jpg"
        },
        {
            id: 8,
            nombre: "Manu Rodriguez",
            foto: "https://i.pinimg.com/originals/73/b9/7e/73b97ecef5aac6ffa4c964a054ceae68.jpg"
        },
        {
            id: 9,
            nombre: "AlejoRodríguez",
            foto: "https://i.pinimg.com/236x/73/f6/e3/73f6e30b6bb275587c7bd0b15fecbf4e.jpg"
        },
        {
            id: 10,
            nombre: "Andrés Muquinche",
            foto : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxr2CjwY8JhUIP9tgsIHHzwM4djTIWKkIV2w&usqp=CAU"
        },
        {
            id: 11,
            nombre: "Ricardo Otero",
            foto : "https://i.pinimg.com/originals/b2/5e/85/b25e85b480a59d290aabf4cac081e179.jpg"
        },
        {
            id: 12,
            nombre: "Deivis Rivera",
            foto : "data:image/jpeg;base64,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"
        },
        {
            id: 13,
            nombre: "Neymar JR",
            foto: "https://i.pinimg.com/originals/78/bf/4a/78bf4aa97159e8be47f9c91a5b423c38.jpg"
        },
        {
            id: 14,
            nombre: "Samir Narsi",
            foto: "https://i.pinimg.com/236x/1b/34/1c/1b341cae8f5484a87547b6381cfc94e0.jpg"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {

    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "AGREGAR_SUPLENTE" ) {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if ( action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)