function updateMaterial() {
  const material = document.getElementById("material").value;
  const quantity = document.getElementById("quantity").value;
  const list = document.getElementById("materialList");

  const existing = Array.from(list.children).find(p => p.textContent.startsWith(material));
  if (existing) {
    existing.textContent = `${material}: ${parseFloat(quantity).toFixed(2)} kg`;
  } else {
    const newItem = document.createElement("p");
    newItem.textContent = `${material}: ${parseFloat(quantity).toFixed(2)} kg`;
    list.appendChild(newItem);
  }
}

function deleteMaterial() {
  const material = document.getElementById("material").value;
  const list = document.getElementById("materialList");

  const items = Array.from(list.children);
  for (const item of items) {
    if (item.textContent.startsWith(material)) {
      list.removeChild(item);
      break;
    }
  }
}
