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

export const incrementVisitorCount = async (): Promise<number> => {
  console.log("Attempting to increment visitor count");

  const auth = getAuth();
  if (!auth.currentUser) {
    await signInAnonymously(auth).catch((error) => {
      console.error("Error during anonymous sign-in:", error);
      return 0;
    });
  }

  const userId = auth.currentUser?.uid;
  if (!userId) {
    console.error("No user ID found after sign-in.");
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
      // Mark the user as a unique visitor
      await update(ref(database, "visitorCount/uniqueVisitors"), {
        [userId]: true,
      });

      // Atomically increment the visitor count
      const result = await runTransaction(visitorCountRef, (currentCount) => {
        return (currentCount || 0) + 1;
      });

      if (result.committed) {
        console.log("Visitor count updated:", result.snapshot.val());
        return result.snapshot.val();
      } else {
        console.error("Transaction aborted");
        return 0;
      }
    } else {
      console.log("User already visited, no increment.");
      const snapshot = await get(visitorCountRef);
      return snapshot.val();
    }
  } catch (error) {
    console.error("Error updating visitor count:", error);
    return 0;
  }
};
