function navigate(page) {
  const content = document.getElementById("content");
  switch(page) {
    case "dashboard":
      content.innerHTML = "<h2>Dashboard</h2><p>Quick overview of bookings, finances, and reminders.</p>";
      break;
    case "bookings":
      content.innerHTML = "<h2>Bookings</h2><p>Manage all upcoming and past rentals.</p>";
      break;
    case "customers":
      content.innerHTML = "<h2>Customers</h2><p>Store renter details here.</p>";
      break;
    case "transactions":
      content.innerHTML = "<h2>Transactions</h2><p>Track income, expenses, and balances.</p>";
      break;
    case "cars":
      content.innerHTML = "<h2>Cars</h2><p>View fleet details (currently 1 car).</p>";
      break;
    case "settings":
      content.innerHTML = "<h2>Settings</h2><p>Backup, reminders, and app settings.</p>";
      break;
  }
}

// Load dashboard by default
window.onload = () => navigate("dashboard");
