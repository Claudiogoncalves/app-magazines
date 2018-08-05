export async function getMagazines() {
  try {
    const response = await fetch('https://app-magazine.firebaseio.com/magazines', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "No Auth",
        "x-access-token": token
      },
    });
    const json = await response.json();
    return json

  } catch (err) {
    console.log("Error problem", err);
  }
}
