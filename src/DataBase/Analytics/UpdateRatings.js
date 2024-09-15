export default async function updateRatings(userId, projectName, rating) {
    const docRef = doc(firestore, `users/${userId}/projects/${projectName}/analytics/ratings`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        await updateDoc(docRef, {
            [rating]: increment(1) 
        });
        console.log(`Rating ${rating} has been incremented`);
    } else {
        console.log("No data available for Ratings.");
    }
}
