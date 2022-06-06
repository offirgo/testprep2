import firebase from "./firebase";
import { FacebookAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";

export const fabebookProvider = new FacebookAuthProvider();
export const googleProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
