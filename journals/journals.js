const navBar = document.querySelector("nav");
const menuBtns = document.querySelectorAll(".menu-icon");
const overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

overlay.addEventListener("click", () => {
  navBar.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", function () {
  const booksContainer = document.getElementById("books-container");
  const titleFilter = document.getElementById("title-filter");
  const authorFilter = document.getElementById("author-filter");
  const subjectFilter = document.getElementById("subject-filter");
  const publishDateFilter = document.getElementById("publish-date-filter");
  const paginationContainer = document.getElementById("pagination-container");

 
  const books = [
    { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", subject: "History", publishDate: "2014-04-23" },
    { title: "The Alchemist", author: "Paulo Coelho", subject: "Fiction", publishDate: "1988-01-01" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", subject: "Classic Literature", publishDate: "1960-07-11" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", subject: "Classic Literature", publishDate: "1925-04-10" },
    { title: "1984", author: "George Orwell", subject: "Dystopian Fiction", publishDate: "1949-06-08" },
    { title: "Pride and Prejudice", author: "Jane Austen", subject: "Classic Literature", publishDate: "1813-01-28" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", subject: "Classic Literature", publishDate: "1951-07-16" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", subject: "Fantasy", publishDate: "1937-09-21" },
    { title: "To Kill a Kingdom", author: "Alexandra Christo", subject: "Young Adult Fantasy", publishDate: "2018-03-06" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", subject: "Fantasy", publishDate: "1997-06-26" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", subject: "Fantasy", publishDate: "1954-07-29" },
    { title: "The Hunger Games", author: "Suzanne Collins", subject: "Young Adult Dystopian", publishDate: "2008-09-14" },
    { title: "The Da Vinci Code", author: "Dan Brown", subject: "Thriller", publishDate: "2003-03-18" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", subject: "Mystery", publishDate: "2005-08-01" },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis", subject: "Fantasy", publishDate: "1950-10-16" },
    { title: "The Fault in Our Stars", author: "John Green", subject: "Young Adult", publishDate: "2012-01-10" },
    { title: "The Kite Runner", author: "Khaled Hosseini", subject: "Historical Fiction", publishDate: "2003-05-29" },
    { title: "The Book Thief", author: "Markus Zusak", subject: "Historical Fiction", publishDate: "2005-03-14" },
    { title: "Brave New World", author: "Aldous Huxley", subject: "Dystopian Fiction", publishDate: "1932-02-17" },
    { title: "The Handmaid's Tale", author: "Margaret Atwood", subject: "Dystopian Fiction", publishDate: "1985-09-01" },
    { title: "Gone Girl", author: "Gillian Flynn", subject: "Mystery", publishDate: "2012-06-05" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde", subject: "Classic Literature", publishDate: "1890-07-01" },
    { title: "The Maze Runner", author: "James Dashner", subject: "Young Adult Dystopian", publishDate: "2009-10-06" },
    { title: "The Shining", author: "Stephen King", subject: "Horror", publishDate: "1977-01-28" },
    { title: "The Giver", author: "Lois Lowry", subject: "Young Adult Dystopian", publishDate: "1993-04-26" },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", subject: "Fantasy", publishDate: "2007-03-27" },
    { title: "The Girl on the Train", author: "Paula Hawkins", subject: "Thriller", publishDate: "2015-01-13" },
    { title: "The Help", author: "Kathryn Stockett", subject: "Historical Fiction", publishDate: "2009-02-10" },
    { title: "The Secret Life of Bees", author: "Sue Monk Kidd", subject: "Historical Fiction", publishDate: "2001-11-08" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", subject: "Fantasy", publishDate: "1950-10-16" },
    { title: "The Lovely Bones", author: "Alice Sebold", subject: "Fiction", publishDate: "2002-06-02" },
    { title: "The Pillars of the Earth", author: "Ken Follett", subject: "Historical Fiction", publishDate: "1989-10-02" },
    { title: "A Game of Thrones", author: "George R.R. Martin", subject: "Fantasy", publishDate: "1996-08-01" },
    { title: "The Fault in Our Stars", author: "John Green", subject: "Young Adult", publishDate: "2012-01-10" },
    { title: "The Book Thief", author: "Markus Zusak", subject: "Historical Fiction", publishDate: "2005-03-14" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", subject: "Fantasy", publishDate: "1937-09-21" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", subject: "Fantasy", publishDate: "1997-06-26" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", subject: "Fantasy", publishDate: "1954-07-29" },
  ];
  
  
  

  const itemsPerPage = 10;
  let currentPage = 1;

  function renderBooks() {
    const filteredBooks = books.filter((book) => {
      const title = book.title.toLowerCase();
      const author = book.author.toLowerCase();
      const subject = book.subject.toLowerCase();
      const publishDate = book.publishDate;

      const titleFilterValue = titleFilter.value.toLowerCase();
      const authorFilterValue = authorFilter.value.toLowerCase();
      const subjectFilterValue = subjectFilter.value.toLowerCase();
      const publishDateFilterValue = publishDateFilter.value;

      return (
        title.includes(titleFilterValue) &&
        author.includes(authorFilterValue) &&
        subject.includes(subjectFilterValue) &&
        (publishDateFilterValue === "" || publishDate === publishDateFilterValue)
      );
    });

    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    booksContainer.innerHTML = "";
    for (let i = startIndex; i < endIndex && i < filteredBooks.length; i++) {
      const book = filteredBooks[i];
      const bookCard = createBookCard(book);
      booksContainer.appendChild(bookCard);
    }

    
    const titleCount = document.getElementById("title-count");
    const authorCount = document.getElementById("author-count");
    const subjectCount = document.getElementById("subject-count");
    const publishDateCount = document.getElementById("publish-date-count");

    titleCount.textContent = filteredBooks.length.toString();
    authorCount.textContent = filteredBooks.length.toString();
    subjectCount.textContent = filteredBooks.length.toString();
    publishDateCount.textContent = filteredBooks.length.toString();

    renderPagination(totalPages);
  }

  
  function createBookCard(book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
  
    const titleElement = document.createElement("h3");
    titleElement.textContent = book.title;
    bookCard.appendChild(titleElement);
  
    const authorElement = document.createElement("p");
    authorElement.textContent = "Author: " + book.author;
    bookCard.appendChild(authorElement);
  
    const subjectElement = document.createElement("p");
    subjectElement.textContent = "Subject: " + book.subject;
    bookCard.appendChild(subjectElement);
  
    const publishDateElement = document.createElement("p");
    const formattedPublishDate = formatDate(book.publishDate); 
    publishDateElement.textContent = "Publish Date: " + formattedPublishDate;
    bookCard.appendChild(publishDateElement);
  
    const button = document.createElement("button");
    button.textContent = "Request Book";
    button.classList.add("buy-button");
    bookCard.appendChild(button);
  
    
button.addEventListener("click", () => {
  const issueDate = new Date(); 

  const dueDate = new Date();
  dueDate.setDate(issueDate.getDate() + 15); 
  const formattedIssueDate = formatDate(issueDate);
  const formattedDueDate = formatDate(dueDate);
  const message = `
  Title: ${book.title}<br>
  Author: ${book.author}<br>
  Issue Date: ${formattedIssueDate}<br>
  Due Date: ${formattedDueDate}`;

  Swal.fire({
    title: 'Book Request Sucessful',
    html: message,
    icon: 'success',
    confirmButtonText: 'OK',
    customClass: {
      
      confirmButton: 'my-swal-confirm-button'
    }
  });
});

    
    function formatDate(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }
  
    return bookCard;
  }
  

  function renderPagination(totalPages) {
    paginationContainer.innerHTML = "";

    const previousButton = createPaginationButton("Previous", currentPage > 1);
    previousButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderBooks();
      }
    });
    paginationContainer.appendChild(previousButton);

    for (let i = 1; i <= totalPages; i++) {
      const pageNumberButton = createPaginationButton(i, i !== currentPage);
      pageNumberButton.addEventListener("click", () => {
        currentPage = i;
        renderBooks();
      });
      paginationContainer.appendChild(pageNumberButton);
    }

    const nextButton = createPaginationButton("Next", currentPage < totalPages);
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderBooks();
      }
    });
    paginationContainer.appendChild(nextButton);
  }

  
  function createPaginationButton(text, enabled) {
    const button = document.createElement("button");
    button.textContent = text;
    button.disabled = !enabled;
    return button;
  }

 
  titleFilter.addEventListener("input", renderBooks);
  authorFilter.addEventListener("input", renderBooks);
  subjectFilter.addEventListener("input", renderBooks);
  publishDateFilter.addEventListener("input", renderBooks);

 
  renderBooks();
});
