import { ref, get, update, runTransaction, onValue } from "firebase/database";
import { database } from "./Firebase";
import { getAuth, signInAnonymously } from "firebase/auth";

export const getOrdinalSuffix = (n: number): string => {
  const j = n % 10;
  const k = n % 100;

  if (j === 1 && k !== 11) return "st";
  if (j === 2 && k !== 12) return "nd";
  if (j === 3 && k !== 13) return "rd";
  return "th";
};

export const subscribeToVisitorCount = (callback: (count: number) => void) => {
  const visitorCountRef = ref(database, "visitorCount/count");
  return onValue(visitorCountRef, (snapshot) => {
    const count = snapshot.val() || 0;
    callback(count);
  });
};

export const getVisitorCount = async (): Promise<number> => {
  const visitorCountRef = ref(database, "visitorCount/count");
  const snapshot = await get(visitorCountRef);
  return snapshot.val() || 0;
};

export const incrementVisitorCount = async (): Promise<number> => {
  const auth = getAuth();
  if (!auth.currentUser) {
    await signInAnonymously(auth).catch((error) => {
      console.error("Error during anonymous sign-in:", error);
      return 0;
    });
  }

  const userId = auth.currentUser?.uid;
  if (!userId) {
    return 0;
  }

  const uniqueVisitorsRef = ref(
    database,
    `visitorCount/uniqueVisitors/${userId}`
  );
  const visitorCountRef = ref(database, "visitorCount/count");

  try {
    const isNewVisitor = await get(uniqueVisitorsRef);

    if (!isNewVisitor.exists()) {
      await update(ref(database, "visitorCount/uniqueVisitors"), {
        [userId]: true,
      });

      const result = await runTransaction(visitorCountRef, (currentCount) => {
        return (currentCount || 0) + 1;
      });

      if (result.committed) {
        return result.snapshot.val();
      } else {
        return 0;
      }
    } else {
      const snapshot = await get(visitorCountRef);
      return snapshot.val();
    }
  } catch (error) {
    console.error("Error updating visitor count:", error);
    return 0;
  }
};
