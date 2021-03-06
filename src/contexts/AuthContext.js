import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider({ children }) {


    const [currentUser, setCurrentUser] = useState()
    const [loading, setloading] = useState(true)


    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            setloading(false)
            setCurrentUser(user)
        })
        return unsuscribe
    }, [])



    const value = {
        currentUser,
        signup,
        login
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}
