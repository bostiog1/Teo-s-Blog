import React, { useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const POSTS_PER_PAGE = 4; // Number of posts per page

const PostList = () => {
  const posts = useSelector((state) => state.posts.filteredPosts); // Use filteredPosts
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  // Calculate the range of posts to display based on the current page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE); // Get posts for the current page

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Handle page change
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Display current posts */}
      {currentPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {/* Conditionally render pagination controls */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`mx-1 px-3 py-1 border rounded ${
                page === currentPage
                  ? "bg-blue-500 text-white dark:bg-blue-700 dark:text-white"
                  : "bg-white text-black dark:bg-gray-800 dark:text-gray-300"
              } hover:bg-gray-200 dark:hover:bg-gray-700 transition`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;

// Drag and drop doesnt work ... bellow you have the code
/*
const PostList = () => {
  const posts = useSelector((state) => state.posts.filteredPosts); // Use filteredPosts
  const dispatch = useDispatch();

  const handleOnDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside the list, do nothing

    const items = Array.from(posts);
    const [reorderedItem] = items.splice(result.source.index, 1); // Remove dragged item
    items.splice(result.destination.index, 0, reorderedItem); // Insert it in the new position

    dispatch(reorderPosts(items)); // Update state with the new order
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="posts">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {posts.map((post, index) => (
              <Draggable
                key={post.id.toString()} // Ensure key is a string
                draggableId={post.id.toString()} // Ensure draggableId is a string
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Post post={post} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default PostList;

*/
