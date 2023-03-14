import { createContext, useContext, useEffect, useState } from "react"
import { initializeApp } from "firebase/app"
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	sendPasswordResetEmail,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth"
import { signOut } from "firebase/auth"
import {
	getFirestore,
	collection,
	addDoc,
	onSnapshot,
} from "firebase/firestore"

const FirebaseContext = createContext(null)

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = props => {
	const [user, setUser] = useState(null)
	const [favorites, setFavorites] = useState([])
	const provider = new GoogleAuthProvider()

	const firebaseConfig = {
		apiKey: "AIzaSyDvzKR2ts5mJTsJ3nHpxO4fdrblW-5GJjg",
		authDomain: "universal-icon-data.firebaseapp.com",
		projectId: "universal-icon-data",
		storageBucket: "universal-icon-data.appspot.com",
		messagingSenderId: "352693824671",
		appId: "1:352693824671:web:1142b422b3c9e4958546aa",
	}

	const firebaseApp = initializeApp(firebaseConfig)
	const db = getFirestore(firebaseApp)
	const firebaseAuth = getAuth(firebaseApp)

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

	const ResetPassword = email => {
		return sendPasswordResetEmail(firebaseAuth, email)
	}

	const addFavorite = (iconName, providerName, values) => {
		const currentUser = firebaseAuth.currentUser
		if (!currentUser) {
			alert("You need to be signed in to add favorites.")
			return
		}

		const favoriteRef = collection(
			db,
			"users",
			currentUser.uid,
			"favorites"
		)

		addDoc(favoriteRef, {
			iconName,
			providerName,
			values,
		})
			.then(() => {
				alert("Favorite added successfully!")
			})
			.catch(error => {
				alert(`Error adding favorite: ${error.message}`)
			})
	}

	const fetchFavorites = () => {
		const currentUser = firebaseAuth.currentUser
		if (!currentUser) {
			alert("You need to be signed in to fetch favorites.")
			return
		}

		const favoriteRef = collection(
			db,
			"users",
			currentUser.uid,
			"favorites"
		)
		onSnapshot(favoriteRef, querySnapshot => {
			const favoritesList = []
			querySnapshot.forEach(doc => {
				favoritesList.push({ id: doc.id, ...doc.data() })
			})
			setFavorites(favoritesList)
		})
	}

	const SignupWithGoogle = () => {
		return signInWithPopup(firebaseAuth, provider)
	}

	return (
		<FirebaseContext.Provider
			value={{
				signupUserWithEmailAndPassword,
				LoginUserWithEmailAndPassword,
				isLoggedIn,
				signOutUser,
				ResetPassword,
				addFavorite,
				favorites,
				fetchFavorites,
				SignupWithGoogle,
			}}
		>
			{props.children}
		</FirebaseContext.Provider>
	)
}
