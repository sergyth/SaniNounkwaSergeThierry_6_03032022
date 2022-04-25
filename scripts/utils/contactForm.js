export function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
    document.getElementById('prenom').focus();
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

