export default async function updateViewCount(userId , projectName ){
    const docRef = doc(firestore, `users/${userId}/projects/${projectName}/analytics/viewCount/`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const viewCount = docSnap.data();
        await updateDoc(docRef, { viewCount: increment(1) });
       // console.log({viewCount});
    } else {
        console.log("No data available for analytics.");
    }
}