import firebase from "firebase/compat/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("3jDVgMMVx6QFx9K4DOL7")
  .collections("cartItem")
  .doc("TYeM4gYh3URQ9t62EJ43");


  firestore.doc('/users/3jDVgMMVx6QFx9K4DOL7/cartItems/TYeM4gYh3URQ9t62EJ43')