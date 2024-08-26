import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Post from "./Post";
import { reorderPosts } from "../redux/postSlice"; // Import the action to reorder posts

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
