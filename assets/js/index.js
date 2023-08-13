const portfolioData = [
    { title: "Proyek 1", description: "Deskripsi proyek 1." },
    { title: "Proyek 2", description: "Deskripsi proyek 2." },
    { title: "Proyek 3", description: "Deskripsi proyek 3." }
    // Tambahkan lebih banyak objek proyek sesuai kebutuhan
];

// nge select element value base on id.
const portfolioContainer = document.getElementById("portfolioContainer");

portfolioData.forEach(project => {
    const projectItem = document.createElement("div");
    projectItem.className = "item";
    projectItem.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;
    portfolioContainer.appendChild(projectItem);
});

function search() {
    const items = document.querySelectorAll('.item'); 
    var selectElement = document.getElementById("search");
    var searchTerm = selectElement.value;

    items.forEach(item => {
        const projectTitle = item.querySelector('h2').textContent.toLowerCase();
        const projectDescription = item.querySelector('p').textContent.toLowerCase();

        if (projectTitle.includes(searchTerm) || projectDescription.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
