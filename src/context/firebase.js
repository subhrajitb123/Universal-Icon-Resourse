import { createContext, useContext, useEffect, useState } from "react"
import { initializeApp } from "firebase/app"
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth"
import { signOut } from "firebase/auth"

const FirebaseContext = createContext(null)

const firebaseConfig = {
	apiKey: "AIzaSyDvzKR2ts5mJTsJ3nHpxO4fdrblW-5GJjg",
	authDomain: "universal-icon-data.firebaseapp.com",
	projectId: "universal-icon-data",
	storageBucket: "universal-icon-data.appspot.com",
	messagingSenderId: "352693824671",
	appId: "1:352693824671:web:1142b422b3c9e4958546aa",
}

export const useFirebase = () => useContext(FirebaseContext)

const firebaseApp = initializeApp(firebaseConfig)

const firebaseAuth = getAuth(firebaseApp)

export const FirebaseProvider = props => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		onAuthStateChanged(firebaseAuth, user => {
			if (user) setUser(user)
			else setUser(null)
		})
	}, [])

	const signupUserWithEmailAndPassword = (email, password) => {
		return createUserWithEmailAndPassword(firebaseAuth, email, password)
	}

	const LoginUserWithEmailAndPassword = (email, password) => {
		return signInWithEmailAndPassword(firebaseAuth, email, password)
	}

	const isLoggedIn = user ? true : false

	const signOutUser = () => {
		return signOut(firebaseAuth)
	}

	return (
		<FirebaseContext.Provider
			value={{
				signupUserWithEmailAndPassword,
				LoginUserWithEmailAndPassword,
				isLoggedIn,
				signOutUser,
			}}
		>
			{props.children}
		</FirebaseContext.Provider>
	)
}
