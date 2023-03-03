// save to saved items page
function saveForLater(articleId) {
    // Get the HTML block to save
    const articleContainer = document.querySelector(`#article-${articleId}`).outerHTML;
  
    // Save the article container to localStorage
    localStorage.setItem(`saved-article-${articleId}`, articleContainer);
  
    // Alert the user that the item was saved and how many items there are
    const savedItemsCount = Object.keys(localStorage).filter(key => key.startsWith('saved-article-')).length;
    alert(`Item saved! You have ${savedItemsCount} saved item(s).`);
  }
  
  
// Get the saved items container on the saved items page
const savedItemsContainer = document.querySelector('#saved-items-container');

// Loop through all keys in localStorage that start with 'saved-article-'
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  if (key.startsWith('saved-article-')) {
    // Create a new div element to hold the saved article container
    const savedArticleContainer = document.createElement('div');
    savedArticleContainer.classList.add('saved-article');
    savedArticleContainer.id = key;

    // Set the HTML of the new div to the saved article container HTML
    savedArticleContainer.innerHTML = localStorage.getItem(key);

    // Add the saved article container to the saved items container
    savedItemsContainer.appendChild(savedArticleContainer);
  }
}


// Function to leave comments on about page

function submitForm() {
  // Get the values of the form fields
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  // Construct the comment message
  let message = name + " says: " + comment;

  // Add the comment to the page
  const commentList = document.getElementById("commentList");
  const newComment = document.createElement("div");
  newComment.className = "card mb-3";
  newComment.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${comment}</p>
    </div>`;
  commentList.appendChild(newComment);

  // Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";

  // Prevent the form from submitting
  return false;
}

//  Function to add likes to the articles
function addLike(articleId) {
  let likeCount = parseInt(document.getElementById('likeCount' + articleId).textContent);
  likeCount++;
  document.getElementById('likeCount' + articleId).textContent = likeCount;
}

