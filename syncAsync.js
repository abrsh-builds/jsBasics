const load = () => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json())
    .then((data) => console.log(data.name))
    .catch((error) => console.error("Error:", error))
    .finally(() => {
      console.log("Fetch operation completed.");
    });
};
const enhancedLoad = async () => {
  try {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await responce.json();
    console.log(data.name);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Fetch operation completed.");
  }
};
load();
enhancedLoad();
